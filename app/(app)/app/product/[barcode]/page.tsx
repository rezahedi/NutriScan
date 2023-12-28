import { ProductCard } from "@/components/app";
import { PrismaClient, Products } from "@prisma/client";
// import { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'Next.js',
// }

async function fetchData(barcode: string): Promise<Products | null> {
  const prisma = new PrismaClient();
  const data = await prisma.products.findUnique({
    where: {
      barcode: barcode
    }
  });
  
  return data;
}; 

export default async function page(
  { params }:
  { params: { barcode: string } }
 ) {

  const product = await fetchData( params.barcode );

  return (
    <div className="p-4">
      {product && <ProductCard product={product} withNutrients />}
    </div>
  )
}
