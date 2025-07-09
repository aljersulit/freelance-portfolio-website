import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Works from '@/components/Works';
import Services from '@/components/Services';
import About from '@/components/About';
import Tools from '@/components/Tools';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Banner />
        <Works />
        <Services />
        <About />
        <Testimonials />
        <ContactSection />
      </main>
    </>
  );
}
