"use server";
import { NutritionProps, NutrientProps } from "@/types";
import { USDAGovCodeToOFFOrgKeyword } from "@/constants";
import { checkBarcodeFormat, convertMetric, getRateIndex, verifyNutrient } from "@/utils";
import { PrismaClient, ProductNutrients, Products } from "@prisma/client";


export async function getProducts(page: number = 1, limit: number = 10): Promise<Products[] | null>
{
  try {
    const prisma = new PrismaClient();
    return await prisma.products.findMany({
      skip: (page - 1) * limit,
      take: limit,
    }).catch((error) => {
      console.log(error);
      return null;
    }).finally(() => {
      prisma.$disconnect();
    });

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProduct(barcode: string): Promise<Products | null>
{
  try {
    const prisma = new PrismaClient();
    return await prisma.products.findUnique({
      where: { productID: barcode }
    });

  } catch (error) {
    console.log(error);
    return null;
  }  
}

export async function getProductNutrients(barcode: string): Promise<ProductNutrients[] | null>
{
  try {
    const prisma = new PrismaClient();
    return await prisma.productNutrients.findMany({
      where: { product_ID: barcode },
      orderBy: { rated: "desc" }
    }).catch((error) => {
      console.log(error);
      return null;
    }).finally(() => {
      prisma.$disconnect();
    });

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function checkProduct(barcode: string): Promise<Products | null>
{
  try {
    // Check if barcode all digits are numbers with 8 to 13 digits
    if ( !checkBarcodeFormat(barcode) )
      throw new Error("Barcode format error: Please enter a valid barcode.")

    // Check database for product if exists
    let product: Products | null = await getProduct(barcode);
    if ( product !== null )
      return product;

    // Fetch from Open Food Facts Org. API
    let newProduct: NutritionProps | null = null;
    newProduct = await fetchFromOpenFoodFacts(barcode);

    // Fetch from USDA Gov. API
    if(newProduct === null)
      newProduct = await fetchFromUSDA(barcode);

    if( newProduct === null )
      throw new Error("No result from USDA or OpenFoodFacts APIs.");

    // Analyze, rate and insert new product with all related nutrients into database
    let { nutrients } = newProduct;
    
    if ( nutrients.length === 0 )
      throw new Error("Product doesn't have any nutrients.");
    
    const ratedNutrients: NutrientProps[] = [];
    nutrients.forEach((nutrient) => {
      // Verify and get nutrient metric object
      let metric = verifyNutrient(nutrient);
      if ( metric === null ) return;
  
      // Convert nutrient amount to match the benchmarks' unit
      nutrient.amount = convertMetric( nutrient.amount, nutrient.unitName, metric.benchmarks_unit );
      nutrient.unitName = metric.benchmarks_unit;
  
      // Find the rate of nutrient amount
      nutrient.rate = metric.rates[ getRateIndex( nutrient.amount, metric ) ];

      ratedNutrients.push( nutrient );
    });
    newProduct.nutrients = ratedNutrients;

    const prisma = new PrismaClient();
    let res = await prisma.products.create({
      data: {
        productID: barcode,
        name: newProduct.name,
        image: newProduct.image,
        brandOwner: newProduct.brandOwner,
        brandName: newProduct.brandName,
        ingredients: newProduct.ingredients,
        servingSize: newProduct.servingSize,
        servingUnit: newProduct.servingSizeUnit,
        packageWeight: newProduct.packageWeight,
        rated: 0,
        nutrients: {
          create: newProduct.nutrients.map((nutrient) => {
            return {
              nameKey: nutrient.name,
              amount: nutrient.amount,
              unitName: nutrient.unitName,
              rated: nutrient.rate || 0,
            }
          })
        }
      }
    });

    if ( res === null )
      throw new Error("Error while inserting product into database.");
    
    return await getProduct(barcode);

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchFromOpenFoodFacts(barcode: string): Promise<any> {
  try {
    const result = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const data = await result.json();
    if(data.status === 0)
      return null;
    return createNutritionObjectFromOpenFoodFacts(data.product);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createNutritionObjectFromOpenFoodFacts(json: any): Promise<NutritionProps | null> {

  // Parse "1 oz (28 g)" | "123 lb" | "1 g" | "3.432mg" to array of value number and unit string
  const parseServingSize = (servingSize: string): [number, string] => {
    const regex = /\((.*)\)/;
    const match = servingSize.match(regex);
    if( match !== null )
      servingSize = match[1];  

    let matches = servingSize.match(/(\d+(\.\d+)?)\s*([a-zA-Z]+)/);
    if( matches !== null )
      return [ parseFloat(matches[1]), matches[3] ];
    else
      return [ 0, "" ];
  };

  try {
    const nutritionObject: NutritionProps = {
      id: json._id || "",
      image: json.image_url || "/no-image.webp",
      name: json.product_name || "",
      brandOwner: json.brand_owner || "",
      brandName: json.brands || "",
      ingredients: json.ingredients_text || "",
      servingSize: parseServingSize(json.serving_size || "")[0],
      servingSizeUnit: parseServingSize(json.serving_size || "")[1],
      packageWeight: "",
      nutrients: [],
    };

    let nutrientsIdCounter = 0;
    Object.keys(json.nutriments).filter((key) => {
      if ( !/[_]/.test(key) )
      {
        nutritionObject.nutrients.push({
          id: ++nutrientsIdCounter,
          name: key,
          code: "",
          amount: json.nutriments[key] || 0,
          unitName: json.nutriments[key+"_unit"] || "",
        });
      }
    });

    return nutritionObject;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchFromUSDA(barcode: string): Promise<any> {
  try {
    if ( !process.env.USDA_API_KEY ) {
      throw new Error('Missing env var for USDA API key: `USDA_API_KEY`');
    }

    const result = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${barcode}&pageSize=1&api_key=${process.env.USDA_API_KEY}`
    );
    const data = await result.json();
    if(data.foods.length === 0)
      return null;

    return createNutritionObjectFromUSDA( data.foods[0] );
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Create a new nutrition object defined in @/Types from the JSON object returned by the USDA API
export async function createNutritionObjectFromUSDA(json: any): Promise<NutritionProps | null> {
  const createNutrient = (nutrient: any): NutrientProps => ({
    id: parseInt(nutrient.nutrientId || ""),
    name: USDAGovCodeToOFFOrgKeyword[ nutrient.nutrientNumber as keyof typeof USDAGovCodeToOFFOrgKeyword ] || nutrient.nutrientName || "",
    code: nutrient.nutrientNumber || "",
    amount: parseFloat(nutrient.value || ""),
    unitName: nutrient.unitName || "",
  });

  try {
    const nutritionObject: NutritionProps = {
      id: json.fdcId || "",
      image: "/no-image.webp",
      name: json.description || "",
      brandOwner: json.brandOwner || "",
      brandName: json.brandName || "",
      ingredients: json.ingredients || "",
      servingSize: parseFloat(json.servingSize || ""),
      servingSizeUnit: json.servingSizeUnit || "",
      packageWeight: json.packageWeight || "",
      nutrients: json.foodNutrients.map(createNutrient),
    };

    return nutritionObject;
  } catch (error) {
    console.error(error);
    return null;
  }
}
