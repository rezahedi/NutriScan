"use server";

export async function getNutrition(prevState: any, formData: FormData)
{
  try {
    const barcode = formData.get("barcode");
    if(barcode === null)
      throw new Error("Null barcode")

    const result = await fetch(
      `https://api.nal.usda.gov/fdc/v1/food/${barcode}?format=full&api_key=GyHcFwTdyLtDHxblTEgzvGEOwN49UP7Y0jGGIhEs`
    );
    const data = await result.json();
    return data;
  } catch (error) {
    return { error, message: "Couldn't find the product!" };
  }
}