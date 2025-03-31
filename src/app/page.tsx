import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import MyWorks from '@/components/MyWorks';
import About from '@/components/About';
import Tools from '@/components/Tools';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <Services />
        <MyWorks />
        <About />
        <Tools />
      </main>
    </>
  );
}
