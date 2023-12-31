"use client";

import { useState, useEffect } from "react";
import { Products } from "@prisma/client";
import { ProductCard } from "@/(app)/components";
import { getProducts } from "@/(app)/actions";
import Link from 'next/link';
import { ProductSkeleton } from "@/(app)/components/skeleton";

export default function ProductsList() {

  const [products, setProducts] = useState<Products[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      if ( result !== null )
        setProducts( result );
    };
    fetchData();
  }, []);

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
