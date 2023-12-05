"use server";

export async function getNutrition(prevState: any, formData: FormData)
{
  try {
    const barcode = formData.get("barcode");
    if(barcode === null)
      throw new Error("Null barcode")

    const result = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${barcode}&pageSize=1&api_key=GyHcFwTdyLtDHxblTEgzvGEOwN49UP7Y0jGGIhEs`
    );
    const data = await result.json();
    console.log(data.foods[0]);
    return data.foods[0];
  } catch (error) {
    return { error, message: "Couldn't find the product!" };
  }
}