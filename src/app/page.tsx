import Hero from '@/components/Hero';
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
      <main>
        <Hero />
        <Banner />
        <div className='rounded-3xl bg-secondary md:rounded-[3.3rem]'>
          <Works />
          {/* <Services /> */}
          {/* <About /> */}
        </div>
        {/* <Tools />
        <Testimonials />
        <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
