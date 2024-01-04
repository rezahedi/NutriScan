import { Products } from "@prisma/client";
import { ProductCard } from "@/(app)/components";
import Link from 'next/link';
import { ProductSkeleton } from "@/(app)/components/skeleton";

const fetchData = async (): Promise<Products[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/`, { next: { revalidate: 3600 } });
  return await response.json();
};

export default async function ProductsList() {

  const products = await fetchData();
  
  return (
    <div className="flex flex-col gap-4">
      {products && products.map((product) =>
        <Link href={`/app/product/${product.barcode}`} key={product.id} className="border-b pb-4 last:border-0 last:pb-0 border-background-1"> 
          <ProductCard product={product} />
        </Link>
      )}
      {!products && Array.from({length: 8}, (_, index) =>
        <ProductSkeleton key={index} />
      )}
    </div>
  )
}
