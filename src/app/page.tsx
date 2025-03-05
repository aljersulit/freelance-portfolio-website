import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  );
}
