import { NutrientBar } from "@/(app)/components";
import { ProductNutrients } from "@prisma/client";
import AdditivesBar from "./AdditivesBar";

export default function NutrientBundle( {title, nutrients}: {title: string, nutrients: ProductNutrients[]} ) {

  if( nutrients.length === 0 )
    return;

  return (
    <>
      <div className='flex justify-between items-center pt-6 pb-2'>
        <h3 className='font-semibold text-lg text-primary'>{title}</h3>
        <div className='font-light text-sm text-primary-3'>Per 100g</div>
      </div>
      <div>
        {nutrients.map((nutrient) => {
          if ( nutrient.nameKey === 'additives' )
            return <AdditivesBar key={nutrient.id} nutrient={nutrient} />;
          else
            return <NutrientBar key={nutrient.id} nutrient={nutrient} />;
        })}
      </div>
    </>
  )
}
