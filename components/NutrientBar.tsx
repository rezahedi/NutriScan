import Image from 'next/image'
import { MetricProps, NutrientProps } from '@/types'
import { rateIndexColors, nutrientMetrics } from '@/constants'
import { limitDecimalPlaces, getRateIndex, convertMetric, getBarParts } from '@/utils'

export default function NutrientBar({nutrient}: {nutrient: NutrientProps}) {

  // Get nutrient metric object
  const metric = nutrientMetrics[ nutrient.name ] || null;
  if ( metric === null ) return null;

  // Convert nutrient amount to match the benchmarks' unit
  const amount = convertMetric( nutrient.amount, nutrient.unitName, metric.benchmarks_unit );

  // Find the rate's index of nutrient amount
  const rateIndex = getRateIndex( amount, metric );

  // Set color of the rate
  const rateColor = rateIndexColors[
    metric.rates[rateIndex]
  ];

  // Calculate benchmark's bars width in percentage
  const percentageOfBarParts = getBarParts(metric);

  // This percentage used to locate the arrow in the bar
  let arrowLocationInBar = Math.round( (amount / metric.benchmarks_100g[ metric.benchmarks_100g.length - 1 ]) * 100 );
  let moreThanLargestBenchmark = false;
  if( arrowLocationInBar > 100 ){
    arrowLocationInBar = 100;
    moreThanLargestBenchmark = true;
  }

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
                left:`${arrowLocationInBar}%`,
                backgroundColor: `${rateColor}`
              }} className='rounded-2xl w-4 h-4'></div>
          </div>
        </div>
        <div className='group/detail -mx-2 px-2 h-0 overflow-hidden group-hover/item:h-9 transition-[height] ease-in-out delay-50'>
          <div className='relative h-4'>
            <div style={{
                left:`${arrowLocationInBar}%`,
                color: `${rateColor}`
              }} className='text-xs absolute -ml-1.5 animate-bounce'>▼</div>
          </div>
          <div className='flex gap-[2px] h-1'>
            {metric.benchmarks_100g.map((value, index) => (
              <div key={index} style={{
                  width: `${percentageOfBarParts[index]}%`,
                  backgroundColor: `${rateIndexColors[metric.rates[index]]}`
                }} className='w-1/4 h-full'></div>
            ))}
          </div>
          <div className='flex justify-between text-xs font-light'>
            <div >0</div>
            {metric.benchmarks_100g.map((benchmark, index) => (
              <div key={index} style={{
                  width: `${percentageOfBarParts[index]}%`
                }} className='text-right'>{benchmark}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
