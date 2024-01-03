import { Suspense } from 'react';
import Link from 'next/link';
import { ProductsList, ProductsListLoading, Search, Stats, Welcome } from "@/(app)/components";

export default function Home() {

  return (
    <div className="flex flex-col gap-6 p-4">
      <Welcome name="Reza" />
      <Search />
      <Stats />
      <Suspense fallback={<ProductsListLoading />}>
        <ProductsList />
      </Suspense>
      <div className='h-16 z-10'>
        <Link href="/app/scan" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full no-underline font-medium py-4 px-10 bg-primary text-background">
          Scan Product
        </Link>
      </div>
    </div>
  );
}
