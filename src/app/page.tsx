import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import MyWorks from '@/components/MyWorks';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <MyWorks />
    </main>
  );
}
