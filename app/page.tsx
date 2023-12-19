"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { getNutrition } from '@/app/actions';
import { DeviceFrame, Scanner, ProductCard } from '@/components';
import { NutritionProps } from "@/types";


export default function Home() {
  const barcodes = [
    "0186852001478", // Vanilla Talenti
    "186852000327", // Coconut Talenti
    "097923002358", // Date
    "00221290", // Peanut Chocolate pups
    "00649094", // Pumpkin seeds
  ]
  const waitingState = 0,
        loadingState = 1,
        errorState = 2,
        successState = 3;
  const [state, setState] = useState( waitingState );
  const [nutritionFacts, setNutritionFacts] = useState<null | NutritionProps>(null);

  const handleDetectedBarcode = async (barcode: string) =>
  {
    setState(loadingState);
    let result = await getNutrition(barcode);

    if ( result !== null ) {
      setNutritionFacts( result );
      setState(successState);
    } else {
      setState(errorState);
    }
  }

  useEffect(() => {
    handleDetectedBarcode('0186852001478');
  }, []);

  return (
    <DeviceFrame>
      <nav className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src="/nutrition-facts-scanner-logo.svg" alt="logo" width="100" height="100" />
        </Link>
        <h1 className="text-2xl font-semibold">Nutrition Facts Scanner</h1>
      </nav>
      <Scanner handleResult={handleDetectedBarcode} />
      <div className="bg-background">
        {state === waitingState && <p>Scanning...</p>}
        {state === loadingState && <p>Loading...</p>}
        {state === errorState && <p>Product does not Detected!</p>}
        {state === successState && nutritionFacts && (
          <ProductCard product={nutritionFacts} showNutrients={true} />
        )}
      </div>
    </DeviceFrame>
  );
}
