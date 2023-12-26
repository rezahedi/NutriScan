import { useState, useEffect } from "react";
import { Products } from "@prisma/client";
import { ProductCard } from "@/components";
import { getProducts } from "@/app/actions";


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
      <h3>ProductsList</h3>
      <div className="flex flex-col gap-2">
        {products.map((product) => 
          <ProductCard key={product.id} product={product} />
        )}
      </div>
    </>
  )
}
