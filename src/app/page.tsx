import Script from 'next/script';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Works from '@/components/Works';
import Services from '@/components/Services';
import About from '@/components/About';
import Tools from '@/components/Tools';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <div className='rounded-[3.3rem] bg-secondary'>
          <Works />
          <Services />
          <About />
        </div>
        <Tools />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <Script
        strategy='beforeInteractive'
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />
    </>
  );
}
