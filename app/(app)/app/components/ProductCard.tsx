"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'
import NutrientBundle from './NutrientBundle';
import { ProductNutrients, Products } from '@prisma/client';
import { getProductNutrients } from '@/(app)/actions';
import { NutrientSkeleton } from '@/(app)/components/skeleton';

export default function ProductCard( {product, withNutrients = false}: {product: Products, withNutrients?: boolean} ) {

  const [negativeNutrients, setnegativeNutrients] = useState<ProductNutrients[] | null>(null);
  const [positiveNutrients, setpositiveNutrients] = useState<ProductNutrients[] | null>(null);
  const [nutrients, setNutrients] = useState<ProductNutrients[] | null>(null);

  useEffect(() => {
    (async () => {
      if ( !product || !withNutrients || nutrients ) return;

      setNutrients( await getProductNutrients( product.id ) );
    })();
  }, []);


  useEffect(() => {
    if ( !nutrients ) return;
    if ( negativeNutrients !== null || positiveNutrients !== null ) return;

    // 3. Separate negatives and positives (positive to negative => 0, 1, 2, 3)
    setnegativeNutrients( nutrients.filter((nutrient) => nutrient.rated && nutrient.rated >= 2) );
    setpositiveNutrients( nutrients.filter((nutrient) => nutrient.rated && nutrient.rated < 2) );
  }, [nutrients]);


  return (
    <>
      <div className="flex gap-4 group">
        <div className='w-1/3 overflow-hidden rounded-xl'>
          <Image src={product.image || `/no-image.webp`} alt={product.name} className='w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300 transform' width="100" height="100" />
        </div>
        <div className='flex-1'>
          <h3 className="font-normal group-hover:underline">{product.name}</h3>
          {(product.brandName || product.brandName) &&
            <p className="text-text-2 font-light text-sm pb-2">{product.brandName ? product.brandName : product.brandOwner}</p>}
          {product.servingSize>0 &&
            <p className='pt-1 font-light text-xs'><b>Serving Size:</b> {product.servingSize}{product.servingUnit}</p>}
          {product.ingredients && <p className='pt-2 text-xs text-text-2 line-clamp-2 lowercase'>{product.ingredients}</p>}
        </div>
      </div>
      {withNutrients && nutrients && (
        <>
          {negativeNutrients && <NutrientBundle title='Negatives' nutrients={negativeNutrients} />}
          {positiveNutrients && <NutrientBundle title='Positives' nutrients={positiveNutrients} />}
        </>
      )}
      {withNutrients && !nutrients && 
        Array.from({length: 4}, (_, index) =>
          <NutrientSkeleton key={index} />
        )
      }
    </>
  )
}
