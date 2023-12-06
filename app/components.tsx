import Image from 'next/image';
import { NutritionProps } from '@/types';

// array of nutrients and their codes to find with their codes
// https://fdc.nal.usda.gov/api-guide.html#bkmk-2

const nutrients = [
  {
    name: 'Calories',
    code: 1,
    img: '/calories.png'
  }, {
    name: 'Total Fat',
    code: 204,
    img: '/fat.png'
  }, {
    name: 'Fatty acids, total trans',
    code: 605,
    img: '/fat.png'
  }, {
    name: 'Fatty acids, total saturated',
    code: 606,
    img: '/fat.png'
  }, {
    name: 'Sugar',
    code: 269,
    img: '/sugar.png'
  }, {
    name: 'Sodium',
    code: 307,
    img: '/sodium.png'
  }, {
    name: 'Protein',
    code: 203,
    img: '/protein.png'
  }, {
    name: 'Carbohydrates',
    code: 205,
    img: '/carbohydrates.png'
  }, {
    name: 'Fiber',
    code: 291,
    img: '/fiber.png'
  }, {
    name: 'Aditive',
    code: 107,
    img: '/additives.png'
  }, {
    name: 'Vitamin A',
    code: 320,
    img: '/vitami-a.png'
  }, {
    name: 'Vitamin C',
    code: 401,
    img: '/vitamin-c.png'
  }, {
    name: 'Calcium',
    code: 301,
    img: '/calcium.png'
  }, {
    name: 'Iron',
    code: 303,
    img: '/iron.png'
  }, {
    name: 'Potassium',
    code: 306,
    img: '/potassium.png'
  }, {
    name: 'Cholesterol',
    code: 601,
    img: '/cholesterol.png'
  }, {
    name: 'Vitamin A, IU',
    code: 318,
    img: '/vitamin-a.png'
  }, {
    name: 'Vitamin C',
    code: 401,
    img: '/vitamin-c.png'
  }, {
    name: 'Energy',
    code: 208,
    img: '/energy.png'
  }
]
function getNutrientIconByCode(code: number): any {
  let nutrient = nutrients.find(nutrient => nutrient.code === code)
  if (nutrient) return nutrient.img;
  return '/no-image.webp';
}

export function ShowNutritionFacts( {foodNutrients}: {foodNutrients: NutritionProps} ) {
  console.log(foodNutrients)
  return (
    <div className="border border-white p-6 mt-4 rounded-lg">
      <ProductCard product={foodNutrients} />
      <div className="py-4">
        {foodNutrients.nutrients.map((nutrient) => {
          // if(nutrient.amount === 0) return;

          return (
            <div key={nutrient.id} className="flex flex-row gap-4 xitems-center border-b border-b-gray-600 last:border-b-0 p-4">
              <div>
              <Image
                src={ getNutrientIconByCode( parseInt(nutrient.code) ) }
                alt={ nutrient.name }
                className='w-6 pt-2 grayscale'
                width="24" height="24" />
              </div>
              <div className="group/item flex flex-col gap-2 grow">
                <div className="flex flex-row justify-between">
                  <div className='flex flex-col'>
                    <p className="text-sm">{nutrient.name}</p>
                    <p className="text-xs font-light">A bit too much sodium</p>
                  </div>
                  <div className='flex items-center gap-2 text-xs'>
                    <p>{nutrient.amount} {nutrient.unitName}</p>
                    <div className='rounded-2xl w-4 h-4 bg-lime-600'></div>
                  </div>
                </div>
                <div className='group/detail h-0 overflow-hidden group-hover/item:h-9 transition-[height] ease-in-out delay-50'>
                  <div className='relative h-4'>
                    <div className='text-xs absolute -ml-1.5 left-[30%] text-lime-500 animate-bounce'>▼</div>
                  </div>
                  <div className='flex gap-[2px] h-1'>
                    <div className='bg-lime-800 w-1/4 h-full'></div>
                    <div className='bg-lime-500 w-1/4 h-full'></div>
                    <div className='bg-orange-500 w-1/4 h-full'></div>
                    <div className='bg-red-700 w-1/4 h-full'></div>
                  </div>
                  <div className='flex justify-between text-xs font-light'>
                    <div>0</div>
                    <div>2.7</div>
                    <div>5.4</div>
                    <div>9.3</div>
                    <div>14</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export function ProductCard( {product}: {product: NutritionProps} ) {
  return (
    <div className="flex gap-4 items-start">
      <Image src={product.image} alt='No Image' className='w-1/3 object-contain' width="100" height="100" />
      <div className="grow">
        <h2 className="text-3xl">{product.name}</h2>
        <p className="text-gray-600 font-light text-sm pb-4">{product.brandOwner}</p>
        {/* <p className='pt-2 font-light text-sm'><b>Ingredients:</b> {product.ingredients}</p> */}
        <p className='pt-2 font-light text-sm'><b>Serving Size:</b> {product.servingSize}{product.servingSizeUnit}</p>
        <p className='pt-2 font-light text-sm'><b>Package Weight:</b> {product.packageWeight}</p>
      </div>
    </div>
  )
}