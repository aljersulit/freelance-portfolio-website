import type { Metadata } from 'next';
import { Outfit, Work_Sans, Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Aljoydigital',
  description: 'Your go-to partner for expert digital marketing and creative content.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth scrollbar-thin scrollbar-track-secondary scrollbar-thumb-accent'>
      <body
        className={`${outfit.variable} ${workSans.variable} ${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
