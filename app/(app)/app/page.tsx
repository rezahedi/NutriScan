import Link from 'next/link';
import { ProductsList } from "@/(app)/components";

export default function Home() {

  return (
    <>
      <div className="bg-background p-4">
        <ProductsList />
      </div>
      <Link href="/app/scan" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 my-4 rounded-full no-underline font-medium py-4 px-10 sm:mt-10 mt-8 bg-accent text-background">
        Scan Product
      </Link>
    </>
  );
}
