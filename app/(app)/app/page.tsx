import Link from 'next/link';
import { ProductsList, Search, Stats, Welcome } from "@/(app)/components";

export default function Home() {

  return (
    <div className="flex flex-col gap-6 p-4">
      <Welcome name="Reza" />
      <Search />
      <Stats />
      <ProductsList />
      <Link href="/app/scan" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 my-4 rounded-full no-underline font-medium py-4 px-10 sm:mt-10 mt-8 bg-primary text-background">
        Scan Product
      </Link>
    </div>
  );
}
