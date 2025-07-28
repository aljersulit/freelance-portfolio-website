import Hero from '@/components/pages/ResultsPage/Hero';
import CaseStudy from '@/components/pages/ResultsPage/CaseStudy';
import Stats from '@/components/pages/ResultsPage/Stats';
import Takeaways from '@/components/pages/ResultsPage/Takeaways';

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
