import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
