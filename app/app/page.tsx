import Link from 'next/link';
import { ProductsList } from "@/components/app";

export default function Home() {

  return (
    <>
      <div className="bg-background p-4">
        <ProductsList />
      </div>
      <Link href="/app/scan" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 my-4 bg-accent text-background rounded-full p-4 px-8 shadow-xl">
        Scan Product
      </Link>
    </>
  );
}
