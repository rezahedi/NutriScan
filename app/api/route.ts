
export async function GET(
  request: Request
) {
  try {
    if ( process.env.MONGODB_API_KEY === undefined || process.env.MONGODB_DATA_API_BASE_URL === undefined )
      throw new Error('Using .env.example as a template and create a .env file and add required env variables');

    const result = await fetch(`${process.env.MONGODB_DATA_API_BASE_URL}/action/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGODB_API_KEY,
        'Accept': 'application/ejson'
      },
      body: JSON.stringify(
        {
          "dataSource":"Cluster0",
          "database":"nutrition-facts-scanner",
          "collection": "Products",
          "sort": {
            "createdAt": -1
          },
          "limit": 10,
          "projection": {
            "_id": 0,
            "barcode": 1,
            "name": 1,
            "image": 1,
            "brandOwner": 1,
            "brandName": 1,
            "ingredients": 1,
            "servingSize": 1,
            "servingUnit": 1,
            "packageWeight": 1,
            "rated": 1,
          }
        }
      )
    });
    
    const json = await result.json();
    return Response.json( json );

  } catch (error) {
    return new Response( JSON.stringify( {error} ), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
