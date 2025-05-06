import Hero from '@/components/results/Hero';
import CaseStudy from '@/components/results/CaseStudy';
import Stats from '@/components/results/Stats';
import Takeaways from '@/components/results/Takeaways';

export default function page() {
  return (
    <>
      <Hero />
      <CaseStudy />
      <Stats />
      <Takeaways />
    </>
  );
}
