import { NutritionProps } from '@/types';
import { ProductCard, NutrientBar } from '@/components';

export default function NutritionFacts( {foodNutrients}: {foodNutrients: NutritionProps} ) {
  console.log(foodNutrients)
  return (
    <div className="border border-white p-6 mt-4 rounded-lg">
      <ProductCard product={foodNutrients} />
      <div className="py-4">
        {foodNutrients.nutrients.map((nutrient) => {
          // if(nutrient.amount === 0) return;

          return (
            <NutrientBar key={nutrient.id} nutrient={nutrient} />
          );
        })}
      </div>
    </div>
  )
}
