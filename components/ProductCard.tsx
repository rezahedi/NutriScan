import { useEffect, useState } from 'react';
import Image from 'next/image'
import NutrientBundle from './NutrientBundle';
import { ProductNutrients, Products } from '@prisma/client';
import { getProductNutrients } from '@/app/actions';

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
      <div className="flex gap-4 items-start">
        <Image src={product.image || `/no-image.webp`} alt={product.name} className='w-1/3 object-cover aspect-square' width="100" height="100" />
        <div className="grow">
          <h3 className="text-xl">{product.name}</h3>
          <p className="text-gray-400 font-light text-sm pb-2">{product.brandOwner}</p>
          {/* <p className='pt-2 font-light text-sm'><b>Ingredients:</b> {product.ingredients}</p> */}
          <p className='pt-1 font-light text-sm'><b>Serving Size:</b> {product.servingSize}{product.servingUnit}</p>
          <p className='font-light text-sm'><b>Package Weight:</b> {product.packageWeight}</p>
        </div>
      </div>
      {withNutrients && nutrients && (
        <>
          {negativeNutrients && <NutrientBundle title='Negatives' nutrients={negativeNutrients} />}
          {positiveNutrients && <NutrientBundle title='Positives' nutrients={positiveNutrients} />}
        </>
      )}
    </>
  )
}