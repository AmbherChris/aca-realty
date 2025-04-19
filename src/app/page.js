
import Landing from "./components/landing";
import NavBar from "./components/navbar";

import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 gap-16 p-5 sm:p-10 font-[family-name:var(--font-geist-sans)]">

      <NavBar />
      <Landing />
      
    </div>
  );
}
