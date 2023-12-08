"use client";
import { useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
// @ts-expect-error
import {experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus} from 'react-dom';
import { getNutrition } from '@/app/actions';
import { ShowNutritionFacts } from './components';
import { Scanner } from '@/components';
import { NutritionProps } from "@/types";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full'>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

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
  <section className="items-center justify-center flex h-screen">
    <div className="relative z-50 mx-auto h-full sm:h-[700px] sm:w-[370px] min-w-[350px] sm:rounded-[42px] sm:border-[14px] sm:border-[var(--foreground)] shadow-xl">
      <div className="absolute left-1/2 top-0 z-50 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem] bg-[var(--foreground)] hidden sm:block"></div>
      <div className="absolute left-[-17px] top-[124px] z-50 h-[46px] w-[4px] rounded-l-lg bg-[var(--foreground)] hidden sm:block"></div>
      <div className="absolute left-[-17px] top-[178px] z-50 h-[46px] w-[4px] rounded-l-lg bg-[var(--foreground)] hidden sm:block"></div>
      <div className="absolute right-[-17px] top-[142px] z-50 h-[64px] w-[4px] rounded-r-lg bg-[var(--foreground)] hidden sm:block"></div>
      <div className="relative h-full w-full overflow-hidden break-words sm:rounded-[32px] bg-[var(--background)]">
        <div className="z-20 h-full w-full items-center justify-center bg-[var(--background)] text-sm text-muted-foreground pt-6 p-4 overflow-y-auto">
          <nav className="flex items-center justify-between w-full">
            <Link href="/">
            <Image src="/nutrition-facts-scanner-logo.svg" alt="logo" width="100" height="100" /></Link>
            <h1 className="text-2xl font-semibold">Nutrition Facts Scanner</h1>
          </nav>
          <Scanner handleResult={handleDetectedBarcode} />
          <div className="bg-white">
            {state === loadingState && <p>Loading...</p>}
            {state === successState && nutritionFacts === null && <p>Product does not Detected!</p>}
            {state === successState && nutritionFacts && (
              <ShowNutritionFacts foodNutrients={nutritionFacts} />
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
