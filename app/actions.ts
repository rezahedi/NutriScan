"use server";
import { NutritionProps, Nutrient } from "@/types";


export async function getNutrition(prevState: any, formData: FormData)
{
  try {
    const barcode = formData.get("barcode")?.toString() || null;
    if(barcode === null)
      throw new Error("Null barcode")

    let res = await fetchFromOpenFoodFacts(barcode);

    if(res === null)
      res = await fetchFromUSDA(barcode);

    if( res === null )
      throw new Error("No result from USDA or OpenFoodFacts");

    return res;

  } catch (error) {
    return {message: "No result found!"};
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
      if ( !/[-_]/.test(key) )
      {
        nutritionObject.nutrients.push({
          id: ++nutrientsIdCounter,
          name: key,
          code: "",
          amount: limitDecimalPlaces( json.nutriments[key] || 0, 3),
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
  const createNutrient = (nutrient: any): Nutrient => ({
    id: parseInt(nutrient.nutrientId || ""),
    name: nutrient.nutrientName || "",
    code: nutrient.nutrientNumber || "",
    amount: limitDecimalPlaces( parseFloat(nutrient.value || ""), 3 ),
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

function limitDecimalPlaces(number: number, decimalPlaces: number): number {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.trunc(number * factorOfTen) / factorOfTen;
}