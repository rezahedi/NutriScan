import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <h1>Nutrition Facts Scanner App</h1>
      <p>This page is for showing off features of the application and tech stacks behind the app, link to github and screenshots.</p>
      <p>This application works only on mobile devices, because it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API"><u>Barcode Detection API</u></a> which is only available on mobile devices, and not on desktop browsers.</p>
      <p>To use the application, you can either scan the QR code below, or click the link below it to open the application in your mobile browser.</p>
      <Image src="/app-url-qr-code-dark.png" alt="App link QR code" width="300" height="300" className='bg-blend-difference' />
      <p>&nbsp;</p>
      <Link href="/app" className="my-4 bg-accent text-background rounded-full p-4 px-8 shadow-xl">Open Application</Link>
    </>
  );
}
