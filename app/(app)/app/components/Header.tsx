"use client";
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation';
import { Back, More } from "@/(app)/components";

function Header() {
  const router = useRouter();
  const isHome = usePathname() === '/app';

  const handleGoBack = () => {
    if (isHome) return;
    router.back();
  };


  return (
    <nav className="fixed z-10 top-0 flex items-center gap-2 w-full max-w-lg bg-background-1 p-2 shadow-md shadow-background">
      <div className="w-9">
        {!isHome &&
          <button onClick={handleGoBack} className="p-2 focus:outline-none">
            <Back />
          </button>
        }
      </div>
      <Link href="/app" className="grow flex items-center justify-center text-center">
        <Image src="/nutrition-facts-scanner-logo.svg" alt="NutriScann Logo" width="32" height="32" className='sm:w-10 sm:h-10 w-9 h-9' />
        <h1 className="sm:text-3xl text-xl ml-2 tracking-tight">NutriScan</h1>
      </Link>
      <div className="w-9">
        <button className="p-2 focus:outline-none">
          <More />
        </button>
      </div>
    </nav>
  )
}

export default Header