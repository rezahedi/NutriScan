import { getProducts } from "@/(app)/actions";

export async function GET(
  request: Request
) {
  try {
    const { searchParams } = new URL( request.url );
    // const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || 10;

    const result = await getProducts( parseInt( page ), parseInt( limit ) );

    return Response.json( result || [] );

  } catch (error) {
    return new Response( JSON.stringify( {error} ), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
