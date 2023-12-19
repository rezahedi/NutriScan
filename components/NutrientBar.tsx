import Image from 'next/image'
import { NutrientProps } from '@/types'
import { rateIndexColors } from '@/constants'
import { limitDecimalPlaces, getBarUIDetails } from '@/utils'

export default function NutrientBar({nutrient}: {nutrient: NutrientProps}) {

  const { metric, amount, ratedIndex } = nutrient;

  if( ratedIndex === undefined || metric === undefined ) return;

  // Get UI details
  const ui = getBarUIDetails( amount, ratedIndex , metric);

  return (
    <div key={nutrient.id} className="flex flex-row gap-4 border-b border-b-gray-600 last:border-b-0 py-4">
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
            <p className="text-xs font-light">{ui.message}</p>
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
            {metric.rates.map((rate, index) => (
              <div key={index} style={{
                  width: ui.barPartsWidth[index],
                  backgroundColor: rateIndexColors[rate]
                }} className='w-1/4 h-full'></div>
            ))}
          </div>
          <div className='flex justify-between text-xs font-light'>
            <div >0</div>
            {metric.benchmarks_100g.map((benchmark, index) => (
              <div key={index} style={{
                  width: ui.barPartsWidth[index]
                }} className='text-right'>{ui.moreThanLargestBenchmark && index===metric.benchmarks_100g.length-1 && `+`}{benchmark}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
