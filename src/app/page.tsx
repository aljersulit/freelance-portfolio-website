import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      {/* <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer /> */}
    </main>
  );
}
