import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';
import { workSans } from '@/app/font';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang='en' className='scroll-smooth scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary'>
      <body className={`${workSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} />
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
