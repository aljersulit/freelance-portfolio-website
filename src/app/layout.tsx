import type { Metadata } from 'next';
import { Montserrat, Noto_Serif_Display } from 'next/font/google';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-display',
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
    <html lang='en' className='scrollbar-thin scrollbar-track-secondary scrollbar-thumb-accent scroll-smooth'>
      <body className={`${notoSerifDisplay.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
