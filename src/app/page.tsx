import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      {/* <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer /> */}
    </main>
  );
}
