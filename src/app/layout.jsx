import { Inter } from 'next/font/google';
import Navbar from './(components)/navbar';
import "./globals.css";

const interSans = Inter({
  variable: '--inter-sans',
  subsets: ["latin"]
})

export const metadata = {
  title: "Primera app NextJS",
  description: "Practicando con NextJs",
  type: 'website',
  locale: 'es_ES',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-neutral-200'>
      <body
        className={`${interSans.variable} ${interSans.variable} antialiased`}
      >
        {/* navitation bar */}
        <Navbar />

        <div className='w-full min-h-screen flex flex-col px-4 sm:px-10 flex-1 mt-10'>
          {children}
        </div>

      </body>
    </html>
  );
}
