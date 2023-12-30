import Link from 'next/link';
import { Github, Twitter } from './';

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline transition underline-offset-2"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://mongodb.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline transition underline-offset-2"
        >
          MongoDB
        </a>
        ,{' '}
        <a
          href="https://world.openfoodfacts.org/data"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline transition underline-offset-2 whitespace-nowrap"
        >
          Open Food Facts
        </a>
        {' '}and{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline transition underline-offset-2 whitespace-nowrap"
        >
          Barcode Detection API
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://twitter.com/rezahedi_"
          className="group"
          aria-label="Reza on Twitter"
        >
          <Twitter className="h-6 w-6 fill-text-3 group-hover:fill-text" />
        </Link>
        <Link
          href="https://github.com/rezahedi/nutriscan"
          className="group"
          aria-label="NutriScan on GitHub"
        >
          <Github className='h-6 w-6 fill-text-3 group-hover:fill-text' />
        </Link>
      </div>
    </footer>
  );
}