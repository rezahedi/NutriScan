"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { getNutrition } from '@/app/actions';
import { DeviceFrame, Scanner, NutritionFacts, ProductCard } from '@/components';
import { NutritionProps } from "@/types";


export default function Home() {
  const waitingState = 0,
        loadingState = 1,
        successState = 2;
  const [state, setState] = useState( waitingState );
  const [nutritionFacts, setNutritionFacts] = useState<null | NutritionProps>(null);

  const handleDetectedBarcode = async (barcode: string) => {

    setState(loadingState);
    let result = await getNutrition(barcode);

    setState(successState);
    if ( result )
      setNutritionFacts( result );

  }

  return (
    <DeviceFrame>
      <nav className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src="/nutrition-facts-scanner-logo.svg" alt="logo" width="100" height="100" />
        </Link>
        <h1 className="text-2xl font-semibold">Nutrition Facts Scanner</h1>
      </nav>
      <Scanner handleResult={handleDetectedBarcode} />
      <div className="bg-neutral-800">
        {state === loadingState && <p>Loading...</p>}
        {state === successState && nutritionFacts === null && <p>Product does not Detected!</p>}
        {state === successState && nutritionFacts && (
          <NutritionFacts foodNutrients={nutritionFacts} />
        )}
      </div>
    </DeviceFrame>
  );
}
