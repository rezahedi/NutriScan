import Image from 'next/image'
import { Nutrient } from '@/types'


export default function NutrientBar({nutrient}: {nutrient: Nutrient}) {
  return (
    <div key={nutrient.id} className="flex flex-row gap-4 xitems-center border-b border-b-gray-600 last:border-b-0 p-4">
      <div>
      <Image
        src={ nutrient.code && getNutrientIconByCode( parseInt(nutrient.code) ) || getNutrientIconByName( nutrient.name ) }
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
  )
}

// array of nutrients and their codes to find with their codes
// https://fdc.nal.usda.gov/api-guide.html#bkmk-2

const nutrients = [
  {
    name: 'calories calory',
    code: 1,
    img: '/calories.png'
  }, {
    name: 'total Fat',
    code: 204,
    img: '/fat.png'
  }, {
    name: 'fatty acids total trans',
    code: 605,
    img: '/fat.png'
  }, {
    name: 'fatty acids total saturated',
    code: 606,
    img: '/fat.png'
  }, {
    name: 'sugar',
    code: 269,
    img: '/sugar.png'
  }, {
    name: 'sodium salt',
    code: 307,
    img: '/sodium.png'
  }, {
    name: 'proteins',
    code: 203,
    img: '/protein.png'
  }, {
    name: 'carbohydrates',
    code: 205,
    img: '/carbohydrates.png'
  }, {
    name: 'fibers',
    code: 291,
    img: '/fiber.png'
  }, {
    name: 'aditives',
    code: 107,
    img: '/additives.png'
  }, {
    name: 'vitamin a',
    code: 320,
    img: '/vitami-a.png'
  }, {
    name: 'vitamin C',
    code: 401,
    img: '/vitamin-c.png'
  }, {
    name: 'calciums',
    code: 301,
    img: '/calcium.png'
  }, {
    name: 'irons',
    code: 303,
    img: '/iron.png'
  }, {
    name: 'potassiums',
    code: 306,
    img: '/potassium.png'
  }, {
    name: 'cholesterols',
    code: 601,
    img: '/cholesterol.png'
  }, {
    name: 'vitamin a IU',
    code: 318,
    img: '/vitamin-a.png'
  }, {
    name: 'vitamin c',
    code: 401,
    img: '/vitamin-c.png'
  }, {
    name: 'energy',
    code: 208,
    img: '/energy.png'
  }
]
function getNutrientIconByCode(code: number): string {
  let nutrient = nutrients.find(nutrient => nutrient.code === code)
  if (nutrient) return nutrient.img;
  return '/no-image.webp';
}

function getNutrientIconByName(name: string): string {
  let nutrient = nutrients.find(nutrient => nutrient.name.includes(name))
  if (nutrient) return nutrient.img;
  return '/no-image.webp';
}
