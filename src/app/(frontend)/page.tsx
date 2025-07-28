import Hero from '@/components/sections/Hero';
import Banner from '@/components/sections/Banner';
import FeaturedWorks from '@/components/sections/FeaturedWorks';
import Services from '@/components/sections/Services';
import AboutMe from '@/components/sections/AboutMe';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Banner />
        <FeaturedWorks />
        <Services />
        <AboutMe />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
