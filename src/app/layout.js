import { Roboto, Poppins, Open_Sans } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
 });

 const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
 });

export const metadata = {
  title: "ACA Realty",
  description: "A Real-Estate Website",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
 })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.variable} ${openSans.variable}`}>
 {children}
 </body>
    </html>
  );
}
