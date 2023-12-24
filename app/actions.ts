"use server";
import { NutritionProps, NutrientProps } from "@/types";
import { USDAGovCodeToOFFOrgKeyword } from "@/constants";
import { checkBarcodeFormat, convertMetric, getRateIndex, verifyNutrient } from "@/utils";
import { PrismaClient, Products, ProductNutrients } from "@prisma/client";


export async function getProductFromDatabase(barcode: string): Promise<Products | null>
{
  try {
    if ( !checkBarcodeFormat(barcode) )
      throw new Error("Barcode format error: Please enter a valid barcode.")

    const prisma = new PrismaClient();
    return prisma.products.findUnique({
      where: { productID: barcode },
      include: { nutrients: true }
    });

  } catch (error) {
    return null;
  }  
}

export async function getNutrition(barcode: string): Promise<NutritionProps | null>
{
  try {
    // Check if barcode all digits are numbers with 8 to 13 digits
    if ( !checkBarcodeFormat(barcode) )
      throw new Error("Barcode format error: Please enter a valid barcode.")

    //TODO: check database for barcode first
    // let product = await getProductFromDatabase(barcode);
    // if ( product !== null )
    //   return product;

    let product: NutritionProps | null = null;
    product = await fetchFromOpenFoodFacts(barcode);

    if(product === null)
      product = await fetchFromUSDA(barcode);

    if( product === null )
      throw new Error("No result from USDA or OpenFoodFacts");

    // TODO: analyze, rate and save to database
    let { nutrients } = product;
    
    if ( nutrients.length === 0 )
      throw new Error("No nutrients found in the product.");
    
    const analyzedNutrients: NutrientProps[] = [];
    nutrients.forEach((nutrient) => {
      // Verify and get nutrient metric object
      let metric = verifyNutrient(nutrient);
      if ( metric === null ) return;
  
      nutrient.metric = metric;
  
      // Convert nutrient amount to match the benchmarks' unit
      nutrient.amount = convertMetric( nutrient.amount, nutrient.unitName, nutrient.metric.benchmarks_unit );
      nutrient.unitName = nutrient.metric.benchmarks_unit;
  
      // Find the rate's index of nutrient amount
      nutrient.ratedIndex = getRateIndex( nutrient.amount, nutrient.metric );
      nutrient.rate = nutrient.metric.rates[ nutrient.ratedIndex ];

      analyzedNutrients.push( nutrient );
    });

    const prisma = new PrismaClient();
    const { productID } = await prisma.products.create({
      data: {
        productID: barcode,
        name: product.name,
        image: product.image,
        brandOwner: product.brandOwner,
        brandName: product.brandName,
        ingredients: product.ingredients,
        servingSize: product.servingSize,
        servingUnit: product.servingSizeUnit,
        packageWeight: product.packageWeight,
        rated: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        nutrients: {
          create: analyzedNutrients.map((nutrient) => {
            return {
              nutrient_ID: nutrient.id,
              amount: nutrient.amount,
              unitName: nutrient.unitName,
              rated: nutrient.rate,
            }
          })
        }
      }
    });

    // insert nutrients into Nutrients table if name does not exist
    // await prisma.$transaction(
    //   analyzedNutrients.map((nutrient) => {
    //     return prisma.nutrients.create({
    //       data: {
    //         name: nutrient.name,
    //         icon: nutrient.metric?.img || "",
    //       }
    //     });
    //   })
    // );
    
    return product;

  } catch (error) {
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
