import Link from 'next/link'
import Image from 'next/image'
import { Github } from './'

function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 border-background-2 pb-7 sm:px-4 px-4 py-2">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          alt="NutriScann Logo" width={36} height={36}
          src="/nutrition-facts-scanner-logo.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
        />
        <h1 className="sm:text-3xl text-2xl ml-2 tracking-tight">
          NutriScan
        </h1>
      </Link>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full p-2 sm:px-4 text-sm bg-text-3 text-background shadow-md transition-colors hover:bg-text"
        href="https://github.com/rezahedi/nutriscan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p className='hidden sm:block'>Star on GitHub</p>
      </a>
    </header>
  )
}

export default Header