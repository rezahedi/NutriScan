import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })
inter.className = `${inter.className} pt-16`

export const metadata: Metadata = {
  title: 'NutriScan: Nutrition Facts Scanner',
  description: 'Generated by Next.js, MongoDB, Browser Barcode Detection API, USDA and OpenFoodFacts APIs, Tailwind and hosted on Vercel',
  icons: '/nutrition-facts-scanner-logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav className="fixed top-0 flex items-center gap-2 w-full max-w-lg bg-background-200 p-2 border-b">
            <Link href="/app">
              <Image src="/nutrition-facts-scanner-logo.svg" alt="NutriScann Logo" width="32" height="32" className='sm:w-10 sm:h-10 w-9 h-9' />
            </Link>
            <h1 className="sm:text-3xl text-2xl ml-2 tracking-tight">NutriScan</h1>
          </nav>
          {children}
      </body>
    </html>
  )
}