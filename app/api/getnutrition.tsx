import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const barcode = req.body.barcode;

  const result = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${barcode}?format=full&api_key=GyHcFwTdyLtDHxblTEgzvGEOwN49UP7Y0jGGIhEs`
  );
  const data = await result.json();
  
  res.status(200).json( data );
}
