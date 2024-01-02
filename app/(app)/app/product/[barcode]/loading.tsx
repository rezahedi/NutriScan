import { NutrientSkeleton, ProductSkeleton } from "@/(app)/components/skeleton";

function Loading() {
  return (
    <>
      <ProductSkeleton />
      {Array.from({length: 4}, (_, index) =>
        <NutrientSkeleton key={index} />
      )}
    </>
  )
}

export default Loading