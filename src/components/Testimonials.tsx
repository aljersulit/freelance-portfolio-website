import { roboto } from '@/app/font';
import Image from 'next/image';
import TestimonialPhoto from '@/assets/Ricxzy.png';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='rounded-3xl bg-secondary px-[29px] py-[33px] md:px-[50px] md:py-[65px] xl:rounded-[3.3rem] xl:px-[78px] xl:py-[98px]'
    >
      <header>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-lg uppercase text-secondary-foreground md:text-4xl xl:text-6xl 2xl:text-8xl`}
        >
          Testimonial
        </h2>
      </header>
      <div className='mx-auto mt-[27px] xl:mt-[100px] xl:w-[918px] 2xl:w-[1100px] 3xl:w-[1390px] min-[2100px]:w-[1900px]'>
        <p className='text-left text-sm font-normal leading-[1.43] text-muted-foreground max-md:text-balance md:text-lg lg:text-center 2xl:text-2xl min-[2100px]:text-3xl'>
          {TESTIMONIALS[0].quote}
        </p>
        <Image
          src={TESTIMONIALS[0].src}
          alt={TESTIMONIALS[0].name}
          className='mx-auto mt-[47px] w-[125px] rounded-full md:w-[160px] xl:w-[182px] 2xl:w-[290px]'
        />
        <h4 className='mt-[25px] text-center text-xl uppercase text-secondary-foreground md:max-lg:text-2xl 2xl:text-3xl'>
          {TESTIMONIALS[0].name}
        </h4>
        <p className='text-center text-xs md:max-lg:text-base 2xl:text-lg'>{TESTIMONIALS[0].designation}</p>
      </div>
    </section>
  );
}
