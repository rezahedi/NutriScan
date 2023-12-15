import Image from 'next/image'
import { NutrientProps } from '@/types'
import { rateIndexColors, nutrientMetrics } from '@/constants'
import { getRateIndex, getAmountInMilligrams, getPercentage } from '@/utils'

export default function NutrientBar({nutrient}: {nutrient: NutrientProps}) {

  // get access to nutrientMetric
  const metricObject = nutrientMetrics.getNutrientMetric( nutrient.name );
  if ( metricObject === null ) return null;
  console.log( metricObject );

  const nutrientMetric = nutrientMetrics.getNutrientMetric( nutrient.name );
  if ( nutrientMetric === null ) return null;
  const percentage = nutrientMetric.calc( getAmountInMilligrams( nutrient ) );
  const rateIndex = getRateIndex(
    percentage,
    nutrientMetric
  );


  // This percentage used to locate the arrow in the bar
  // TODO: This is not the best way to do it, but it works
  // TODO: Refactor this
  let benchmarkMax = metricObject.benchmarkPercentages[ metricObject.benchmarkPercentages.length-1 ];
  const percentageofBarParts: number[] = [];
  metricObject.benchmarkPercentages.map((value) => {
    percentageofBarParts.push(
      Math.round( (value / benchmarkMax) * 100 )
    );
  });
  let percentageOfBar = Math.round( (percentage / benchmarkMax) * 100 );
  percentageOfBar = percentageOfBar > 100 ? 100 : percentageOfBar;


  // console.log(
  //   nutrient.amount + nutrient.unitName,
  //   getAmountInMilligrams( nutrient ) + "mg",
  //   percentage + "% of 100g",
  //   "Rate Index: " + rateIndex
  // );
  
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
            <p className="text-xs font-light">{nutrientMetric.messages[rateIndex]}</p>
          </div>
          <div className='flex items-center gap-2 text-xs'>
            <p>{nutrient.amount} {nutrient.unitName}</p>
            <div className={`rounded-2xl w-4 h-4 bg-${rateIndexColors[rateIndex]}`}></div>
          </div>
        </div>
        <div className='group/detail h-0 overflow-hidden group-hover/item:h-9 transition-[height] ease-in-out delay-50'>
          <div className='relative h-4'>
            <div style={{left:parseInt(percentageOfBar)+`%`}} className={`text-xs absolute -ml-1.5 text-${rateIndexColors[rateIndex]} animate-bounce`}>▼</div>
          </div>
          <div className='flex gap-[2px] h-1'>
            {rateIndexColors.map((color, index) => (
              <div key={index} style={{width:percentageofBarParts[index]+'%'}} className={`bg-${color} w-1/4 h-full`}></div>
            ))}
          </div>
          <div className='flex justify-between text-xs font-light'>
            <div style={{width:percentageofBarParts[0]+'%'}}>0</div>
            {metricObject.benchmarkPercentages.map((percentage, index) => (
              <div key={index} style={{width:percentageofBarParts[index+1]+'%'}}>{percentage}</div>
            ))}
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
