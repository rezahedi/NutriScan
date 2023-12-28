"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { checkProduct } from '@/app/(app)/app/actions';
import { Scanner, ProductCard } from '@/components/app';
import { Products } from "@prisma/client";

export default function Page() {
  const waitingState = 0,
        loadingState = 1,
        errorState = 2,
        successState = 3;
  const [state, setState] = useState( waitingState );
  const [product, setProduct] = useState<null | Products>(null);

  const handleDetectedBarcode = async (barcode: string) =>
  {
    setState(loadingState);
    let result = await checkProduct(barcode);

    if ( result !== null ) {
      setProduct( result );
      setState(successState);
    } else {
      setState(errorState);
    }
  }

  // For testing scanning without actually scanning!
  // useEffect(() => {
  //   handleDetectedBarcode("00649094");
  // }, []);

  return (
    <div className="h-full p-4">
      <Scanner handleResult={handleDetectedBarcode} />
      <div className="bg-background">
        {state === loadingState && <p>Loading...</p>}
        {state === errorState && <p>Product does not Detected!</p>}
        {state === successState && product && (
          <ProductCard product={product} withNutrients />
        )}
      </div>
    </div>
  );
}
