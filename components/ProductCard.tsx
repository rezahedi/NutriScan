import Image from 'next/image'
import { NutritionProps } from '@/types'

export default function ProductCard( {product}: {product: NutritionProps} ) {
  return (
    <div className="flex gap-4 items-start">
      <Image src={product.image || `/no-image.webp`} alt={product.name} className='w-1/3 object-contain' width="100" height="100" />
      <div className="grow">
        <h2 className="text-3xl">{product.name}</h2>
        <p className="text-gray-400 font-light text-sm pb-2">{product.brandOwner}</p>
        {/* <p className='pt-2 font-light text-sm'><b>Ingredients:</b> {product.ingredients}</p> */}
        <p className='pt-1 font-light text-sm'><b>Serving Size:</b> {product.servingSize}{product.servingSizeUnit}</p>
        <p className='font-light text-sm'><b>Package Weight:</b> {product.packageWeight}</p>
      </div>
    </div>
  )
}