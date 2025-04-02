import type { Metadata } from 'next';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';

import { workSans } from '@/app/font';

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
      <body className={`${workSans.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
