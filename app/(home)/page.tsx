import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Footer, Header } from './components';

export default function Home() {

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>NutriScan: Nutrition Facts Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 my-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 border-text-800 text-text-200 text-sm mb-5 hover:bg-background-800 hover:text-text transition duration-300 ease-in-out">
          <b>321</b> barcodes scanned so far
        </p>
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-text">Nutrition Facts Scanner</h1>
        <div className="max-w-2xl w-full">
          <div className="flex flex-col gap-4 mt-10 items-center text-left">
            <Image src="/Screenshots_20231219-120947-portrait.png" alt="App screenshots" width="600" height="300" />
            <p>This project is an <a target='_blank' href='https://nextjs.org'>Next.js</a> and <a target='_blank' href='https://mongodb.com'>MongoDB</a> project designed to make informed nutrition decisions by scanning UAN or UPC barcode formats on food products. Leveraging the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API'>Browser Barcode Detection API</a>, NutriScan retrieves barcode numbers, calls <a target='_blank' href='https://world.openfoodfacts.org/data'>Open Food Facts</a> or <a target='_blank' href='https://fdc.nal.usda.gov/api-guide.html'>USDA</a> APIs to fetch nutrition facts, analyzes and rates each nutrients. The information is then presented graphically for users to easily understand and make informed decisions about the healthiness of a product.</p>
            <p>This application works only on mobile devices, because it uses the <a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API">Barcode Detection API</a> which is only available on mobile devices, and not on desktop browsers.</p>
            <p>To use the application, you can either scan the QR code below, or click the link below it to open the application in your mobile browser.</p>
            <Image src="/app-url-qr-code-light.png" alt="App link QR code" width="300" height="300" className='bg-blend-difference' />
            <Link href="/app" className="rounded-full no-underline font-medium py-4 px-10 sm:mt-10 mt-8 bg-accent text-background hover:text-text transition duration-300 ease-in-out">Open Application</Link>
            <p className='text-sm font-light'><i>This project inspired by the <a target='_blank' href='https://yuka.io'>Yuka App</a> which is my favorite app for grocery shopping.</i></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
