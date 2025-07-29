import Hero from '@/components/sections/Hero';
import Banner from '@/components/sections/Banner';
import FeaturedWorks from '@/components/sections/FeaturedWorks';
import Services from '@/components/sections/Services';
import AboutMe from '@/components/sections/AboutMe';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

// Enable ISR with 60 second revalidation
export const revalidate = 60;

// Force dynamic rendering for real-time content updates
export const dynamic = 'force-dynamic';

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
