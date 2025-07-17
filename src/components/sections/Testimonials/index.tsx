import { roboto } from '@/app/(frontend)/font';

import { TESTIMONIALS } from '@/lib/constants';
import RevealingText from '@/components/ui/revealing-text';

import { getTestimonialsData } from '@/lib/payloadData';
import TestimonialCarousel from './TestimonialCarousel';

export default async function Testimonials() {
  const isPlural = TESTIMONIALS.length > 1 ? 's' : '';
  const [DATA] = await getTestimonialsData();
  return (
    <section
      id='testimonials'
      className='rounded-3xl bg-secondary px-[29px] py-[33px] md:px-[50px] md:py-[65px] xl:rounded-[3.3rem] xl:px-[78px] xl:py-[98px]'
    >
      <header>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-lg uppercase text-secondary-foreground md:text-4xl xl:text-6xl 2xl:text-7xl 2xl:font-medium 3xl:text-8xl`}
        >
          <RevealingText text={`Testimonial${isPlural}`} />
        </h2>
      </header>
      <TestimonialCarousel testimonialList={DATA.testimonials} />
    </section>
  );
}
