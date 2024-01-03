import { ProductSkeleton } from "@/(app)/components/skeleton";

function ProductsListLoading() {
  return (
    <>
      {Array.from({length: 8}, (_, index) =>
        <ProductSkeleton key={index} />
      )}
    </>
  )
}

export default ProductsListLoading