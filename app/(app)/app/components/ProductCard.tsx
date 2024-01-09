"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'
import NutrientBundle from './NutrientBundle';
import { ProductNutrients, Products } from '@prisma/client';
import { productRateBenchmarks, productRateTags, rateIndexColors } from '@/constants';

export default function ProductCard( {product, nutrients = []}: {product: Products, nutrients?: ProductNutrients[]} ) {

  const [negativeNutrients, setnegativeNutrients] = useState<ProductNutrients[] | null>(null);
  const [positiveNutrients, setpositiveNutrients] = useState<ProductNutrients[] | null>(null);
  const [productRate, setProductRate] = useState<{tag:string, color:string} | null>(null);

  useEffect(() => {
    let productRateIndex = productRateBenchmarks.findIndex((benchmark) => product.rated >= benchmark);
    setProductRate({
      tag: productRateTags[ productRateIndex ],
      color: rateIndexColors[ productRateIndex ]
    });

    if ( nutrients.length === 0 ) return;
    if ( negativeNutrients !== null || positiveNutrients !== null ) return;

    // If product rate was high, Sort nutrient's rate good to bad
    if ( product.rated >= 70 )
    nutrients.sort((a, b) => a.rated - b.rated);

    // 3. Separate negatives and positives (positive to negative => 0, 1, 2, 3)
    setnegativeNutrients( nutrients.filter((nutrient) => nutrient.rated >= 2) );
    setpositiveNutrients( nutrients.filter((nutrient) => nutrient.rated < 2) );
  }, []);


  return (
    <>
      <div className="flex gap-4 group">
        <div className='w-1/3 overflow-hidden rounded-xl'>
          <Image src={product.image || `/no-image.webp`} alt={product.name} className='w-full h-full object-contain bg-text aspect-square group-hover:scale-105 transition-transform duration-300 transform' width="170" height="170" loading='lazy' />
        </div>
        <div className='flex-1 flex flex-col gap-1'>
          <h3 className="font-normal group-hover:underline">{product.name}</h3>
          {(product.brandName || product.brandName) &&
            <p className="text-text-2 font-light text-sm">{product.brandName ? product.brandName : product.brandOwner}</p>}
          {product.servingSize>0 &&
            <p className='pt-1 font-light text-xs'><b>Serving Size:</b> {product.servingSize}{product.servingUnit}</p>}
          {product.ingredients && <p className='pt-2 text-xs text-text-2 line-clamp-2 lowercase'>{product.ingredients}</p>}
          <div className='flex items-center gap-2 text-sm pt-2'>
            {productRate &&
            <>
              <div style={{
                  backgroundColor: productRate.color
                }} className='rounded-2xl w-4 h-4'></div>
              <p>{productRate.tag} <i>({product.rated}/100)</i></p>
            </>}
          </div>
        </div>
      </div>
      {nutrients.length > 0 && (
        ((product.rated < 70) ?
          <>
            {negativeNutrients && <NutrientBundle title='Negatives' nutrients={negativeNutrients} />}
            {positiveNutrients && <NutrientBundle title='Positives' nutrients={positiveNutrients} />}
          </>
          :
          <>
            {positiveNutrients && <NutrientBundle title='Positives' nutrients={positiveNutrients} />}
            {negativeNutrients && <NutrientBundle title='Negatives' nutrients={negativeNutrients} />}
          </>
        )
      )}
    </>
  )
}
