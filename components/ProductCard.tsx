import Image from 'next/image'
import { NutritionProps } from '@/types'
import { NutrientBar } from '@/components';

export default function ProductCard( {product, showNutrients=false}: {product: NutritionProps, showNutrients?: boolean} ) {
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
        <div className="py-4">
          <div className='flex justify-between items-center'>
            <h3 className='font-medium text-lg'>Negatives</h3>
            <div className='text-neutral-400'>Per 100g</div>
          </div>
          {product.nutrients.map((nutrient) => {
            // if(nutrient.amount === 0) return;

            return (
              <NutrientBar key={nutrient.id} nutrient={nutrient} />
            );
          })}
        </div>
      )}
    </>
  )
}