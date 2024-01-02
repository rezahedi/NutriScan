import { getProductNutrients } from '@/(app)/actions';
import { PrismaClient } from '@prisma/client';

export async function GET(
  request: Request,
  { params }: { params: { barcode: string } }
)
{
  try {
    const { barcode } = params;

    const prisma = new PrismaClient();
    const product = await prisma.products.findUnique({
      where: {
        barcode: barcode
      }
    });

    if ( product === null )
      return Response.json( {error: 'Product not found'} );

    const nutrients = await getProductNutrients( product.id ) || [];
  
    return Response.json( { product, nutrients } );

  } catch (error) {
    return new Response( JSON.stringify( {error} ), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}