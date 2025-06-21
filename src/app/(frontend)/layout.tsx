import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import DeviceResponsiveProvider from '@/components/DeviceResponsiveContext';
import LenisProvider from '@/components/LenisProvider';
import { Toaster } from '@/components/ui/sonner';
import { workSans } from '@/app/(frontend)/font';
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
        <LenisProvider />
        <DeviceResponsiveProvider>
          <Navbar />
          {children}
          <Footer />
        </DeviceResponsiveProvider>
        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} />
        <Toaster richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
