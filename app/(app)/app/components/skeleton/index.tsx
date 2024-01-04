import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function ProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#4444445c">
      <div className="flex gap-4">
        <div className="w-1/3 aspect-square">
          <Skeleton count={1} width={'100%'} height={'100%'} borderRadius={'0.75rem'} />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Skeleton count={1} height={25} />
          <Skeleton count={3} />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export function NutrientSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#4444445c">
      <div className="flex flex-row gap-4 items-center justify-center w-full h-20">
        <div className='w-6 aspect-square'>
          <Skeleton circle height={'100%'} />
        </div>
        <div className='grow'>
          <p className="text-sm pb-1">
            <Skeleton count={1} width={60} />
          </p>
          <p className="text-xs">
            <Skeleton count={1} width={120} />
          </p>
        </div>
        <div className='w-18 text-xs flex gap-2'>
          <Skeleton count={1} width={46} height={18} />
          <Skeleton circle count={1} width={18} height={18} />
        </div>
      </div>
    </SkeletonTheme>
  )
}