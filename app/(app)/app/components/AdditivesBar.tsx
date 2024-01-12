import Image from 'next/image'
import { AdditiveProps } from '@/types'
import { getAdditivesDetails, getBarUIDetails, getMetric, getRateIndex } from '@/utils'
import { Back } from '@/(app)/components';
import { ProductNutrients } from '@prisma/client';
import { Suspense, useState } from 'react';
import AdditivesDetail from './AdditivesDetail';
import { AdditivesSkeleton } from './skeleton';

export default function AdditivesBar({nutrient}: {nutrient: ProductNutrients}) {

  const [status, setStatus] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const { amount } = nutrient;
  const additives = nutrient.unitName!=='' ? nutrient.unitName.split(' ') : [];

  const metric = getMetric( nutrient.nameKey );
  if ( !metric ) return;

  const ratedIndex = getRateIndex( nutrient.amount, metric );

  // Get UI details
  const ui = getBarUIDetails( amount, ratedIndex, metric);

  // handle nutrient bar expand/collapse
  const handleClick = (e: React.MouseEvent<HTMLDivElement>
    ) => {
    let bar = e.currentTarget;
    let barIcon = bar.querySelectorAll('.barIcon')[0];
    let barChart = bar.querySelectorAll('.barChart')[0];
    barIcon.classList.toggle('-rotate-90');
    barIcon.classList.toggle('rotate-90');
    barChart.classList.toggle('h-0');
    barChart.classList.toggle('h-auto');
    setStatus(!status);
    setShowDetail(false);
  }

  const handleShowDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowDetail(!showDetail);
  }

  let additiveCount = additives.length;

  //! TODO: This should be on AdditivesDetail component
  const additivesDetail: AdditiveProps[] = getAdditivesDetails(additives);

  return (
    <div onClick={handleClick} className="flex flex-row gap-4 border-b border-background-3 last:border-b-0 py-4 cursor-pointer">
      <div>
      <Image
        src='/additives.png' alt='Additives'
        className='w-6 pt-2'
        width="32" height="32" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className='flex flex-col'>
            <p className="text-sm">{additiveCount ? 'Additives' : 'No additives'}</p>
            <p className="text-xs font-light text-text-2">{ui.message}</p>
          </div>
          <div className='flex items-center gap-2 text-xs'>
            <p>{additiveCount ? additiveCount : '✔'}</p>
            <div style={{
                backgroundColor: `${ui.color}`
              }} className='rounded-2xl w-4 h-4'></div>
            <Back className='barIcon -rotate-90 text-text-3' />
          </div>
        </div>
        <div className='barChart h-0 -mx-2 px-2 overflow-hidden transition-[height] ease-in-out delay-50'>
          <div className='flex flex-col gap-1'>
            {additivesDetail.map((info, index) => (
              <div key={index} className='flex gap-2 items-center text-sm'>
                <div style={{
                  backgroundColor: `${info.color}`
                }} className='rounded-2xl w-4 h-4'></div>
                {info.number}: {info.riskTitle}
              </div>
            ))}
            {additivesDetail.length>0 &&
            <>
              <button onClick={handleShowDetail} className='text-secondary hover:underline text-sm'>{!showDetail ? `Show more info` : `Show less`}</button>
              {showDetail && (
                <Suspense fallback={<AdditivesSkeleton />}>
                  <AdditivesDetail additives={additives} />
                </Suspense>
              )}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
