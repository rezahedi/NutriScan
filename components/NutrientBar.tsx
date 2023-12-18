import Image from 'next/image'
import { NutrientProps } from '@/types'
import { rateIndexColors } from '@/constants'
import { limitDecimalPlaces, getRateIndex, convertMetric, verifyNutrient, getBarUIDetails } from '@/utils'

export default function NutrientBar({nutrient}: {nutrient: NutrientProps}) {

  // Verify and get nutrient metric object
  const metric = verifyNutrient(nutrient);
  if ( metric === null ) return null;

  // Convert nutrient amount to match the benchmarks' unit
  const amount = convertMetric( nutrient.amount, nutrient.unitName, metric.benchmarks_unit );

  // Find the rate's index of nutrient amount
  const rateIndex = getRateIndex( amount, metric );

  // Get UI details
  const ui = getBarUIDetails( amount, rateIndex , metric);

  return (
    <div key={nutrient.id} className="flex flex-row gap-4 xitems-center border-b border-b-gray-600 last:border-b-0 p-4">
      <div>
      <Image
        src={ metric.img }
        alt={ nutrient.name }
        className='w-6 pt-2 grayscale'
        width="24" height="24" />
      </div>
      <div className="group/item flex flex-col gap-2 grow">
        <div className="flex flex-row justify-between">
          <div className='flex flex-col'>
            <p className="text-sm">{metric.name}</p>
            <p className="text-xs font-light">{metric.messages[rateIndex]}</p>
          </div>
          <div className='flex items-center gap-2 text-xs'>
            <p>{limitDecimalPlaces(amount, 1)} {metric.benchmarks_unit}</p>
            <div style={{
                backgroundColor: `${ui.color}`
              }} className='rounded-2xl w-4 h-4'></div>
          </div>
        </div>
        <div className='group/detail -mx-2 px-2 h-0 overflow-hidden group-hover/item:h-9 transition-[height] ease-in-out delay-50'>
          <div className='relative h-4'>
            <div style={{
                left: ui.arrowLeft,
                color: ui.color
              }} className='text-xs absolute -ml-1.5 animate-bounce'>▼</div>
          </div>
          <div className='flex gap-[2px] h-1'>
            {metric.benchmarks_100g.map((value, index) => (
              <div key={index} style={{
                  width: ui.barPartsWidth[index],
                  backgroundColor: rateIndexColors[metric.rates[index]]
                }} className='w-1/4 h-full'></div>
            ))}
          </div>
          <div className='flex justify-between text-xs font-light'>
            <div >0</div>
            {metric.benchmarks_100g.map((benchmark, index) => (
              <div key={index} style={{
                  width: ui.barPartsWidth[index]
                }} className='text-right'>{benchmark}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
