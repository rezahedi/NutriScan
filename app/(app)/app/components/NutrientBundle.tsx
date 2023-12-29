import { NutrientBar } from "@/(app)/components";
import { ProductNutrients } from "@prisma/client";

export default function NutrientBundle( {title, nutrients}: {title: string, nutrients: ProductNutrients[]} ) {

  if( nutrients.length === 0 )
    return;

  return (
    <>
      <div className='flex justify-between items-center pt-6 pb-2'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <div className='text-neutral-400'>Per 100g</div>
      </div>
      <div>
        {nutrients.map((nutrient) => {
          return (
            <NutrientBar key={nutrient.id} nutrient={nutrient} />
          );
        })}
      </div>
    </>
  )
}
