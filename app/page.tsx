import Link from 'next/link';

export default function Home() {

  return (
    <>
      <h1>Nutrition Facts Scanner App</h1>
      <p>This page is for showing off features of the application and tech stacks behind the app, link to github and screenshots.</p>
      <Link href="/app" className="my-4 bg-accent text-background rounded-full p-4 px-8 shadow-xl">Application</Link>
    </>
  );
}
