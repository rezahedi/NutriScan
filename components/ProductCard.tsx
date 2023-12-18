import { useEffect, useState } from 'react';
import Image from 'next/image'
import { NutrientProps, NutritionProps } from '@/types'
import { convertMetric, getRateIndex, verifyNutrient } from '@/utils';
import NutrientBundle from './NutrientBundle';

export default function ProductCard( {product, showNutrients=false}: {product: NutritionProps, showNutrients?: boolean} ) {

  const [negativeNutrients, setnegativeNutrients] = useState<NutrientProps[] | null>(null);
  const [positiveNutrients, setpositiveNutrients] = useState<NutrientProps[] | null>(null);

  useEffect(() => {
    if ( !product.nutrients ) return;
    if ( negativeNutrients !== null || positiveNutrients !== null ) return;

    const { nutrients } = product;
    const analyzedNutrients: NutrientProps[] = [];
  
    // 1. Get rates of nutrients
    nutrients.forEach((nutrient) => {
      // Verify and get nutrient metric object
      let metric = verifyNutrient(nutrient);
      if ( metric === null ) return;
  
      nutrient.metric = metric;
  
      // Convert nutrient amount to match the benchmarks' unit
      nutrient.amount = convertMetric( nutrient.amount, nutrient.unitName, nutrient.metric.benchmarks_unit );
      nutrient.unitName = nutrient.metric.benchmarks_unit;
  
      // Find the rate's index of nutrient amount
      nutrient.ratedIndex = getRateIndex( nutrient.amount, nutrient.metric );
      nutrient.rate = nutrient.metric.rates[ nutrient.ratedIndex ];
  
      analyzedNutrients.push( nutrient );
    });
  
    // 2. Sort nutrients by rate (Negative to Positive)
    analyzedNutrients.sort((a, b) => b.rate - a.rate );

    // 3. Separate negatives and positives (positive to negative => 0, 1, 2, 3)
    setnegativeNutrients( analyzedNutrients.filter((nutrient) => nutrient.rate >= 2) );
    setpositiveNutrients( analyzedNutrients.filter((nutrient) => nutrient.rate < 2) );
    // product.nutrients = analyzedNutrients;
  }, []);  


  return (
    <>
      <div className="flex gap-4 items-start">
        <Image src={product.image || `/no-image.webp`} alt={product.name} className='w-1/3 object-contain' width="100" height="100" />
        <div className="grow">
          <h2 className="text-3xl">{product.name}</h2>
          <p className="text-gray-400 font-light text-sm pb-2">{product.brandOwner}</p>
          {/* <p className='pt-2 font-light text-sm'><b>Ingredients:</b> {product.ingredients}</p> */}
          <p className='pt-1 font-light text-sm'><b>Serving Size:</b> {product.servingSize}{product.servingSizeUnit}</p>
          <p className='font-light text-sm'><b>Package Weight:</b> {product.packageWeight}</p>
        </div>
      </div>
      {showNutrients && (
        <>
          {negativeNutrients && <NutrientBundle title='Negatives' nutrients={negativeNutrients} />}
          {positiveNutrients && <NutrientBundle title='Positives' nutrients={positiveNutrients} />}
        </>
      )}
    </>
  )
}