"use client";

import { useState, useEffect } from "react";
import { Products } from "@prisma/client";
import { ProductCard } from "@/components/app";
import { getProducts } from "@/(app)/actions";
import Link from 'next/link';


export default function ProductsList() {

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      if ( result !== null )
        setProducts( result );
    };
    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-xl pb-4">Your Products:</h3>
      <div className="flex flex-col gap-6">
        {products.map((product) =>
          <Link href={`/app/product/${product.barcode}`} key={product.id}> 
            <ProductCard product={product} />
          </Link>
        )}
      </div>
    </>
  )
}
