import React from 'react';
import { playfairDisplay } from '@/app/font';
import Image from 'next/image';

import hero1 from '@/assets/hero1_results.png';
import hero2 from '@/assets/hero2_results.png';
import hero3 from '@/assets/hero3_results.png';
import backgroundLaptop from '@/assets/results_hero_background_laptop.png';

export default function Hero() {
  return (
    <section className='relative h-lvh px-[10px] lg:px-0 lg:pt-[75px] xl:pt-[96px] 2xl:pt-[125px]'>
      <div className='flex h-full flex-col justify-center gap-[20px] pt-[40px] min-[375px]:gap-[35px] lg:relative lg:pt-0 xl:gap-[54px] 3xl:gap-[45px]'>
        <ul className='relative z-10 flex flex-wrap items-center justify-center gap-[10px] min-[375px]:gap-[20px] xl:gap-[26px] 3xl:gap-[40px]'>
          <li className='w-[135px] min-[375px]:w-[165px] sm:w-[250px] lg:w-[270px] xl:w-[300px] 3xl:w-[400px]'>
            <Image src={hero1} alt='Ropa market Motocompare' className='h-auto w-full' priority />
          </li>
          <li className='order-last w-[140px] min-[375px]:w-[170px] sm:w-[260px] lg:order-none lg:w-[320px] xl:w-[352px] 3xl:w-[432px]'>
            <Image src={hero2} alt='Agribank smart time deposit' className='h-auto w-full' priority />
          </li>
          <li className='w-[135px] min-[375px]:w-[165px] sm:w-[250px] lg:w-[270px] xl:w-[300px] 3xl:w-[400px]'>
            <Image src={hero3} alt='Agribank pay' className='h-auto w-full' priority />
          </li>
        </ul>
        <header className='relative z-10 mx-auto xl:w-[922px]'>
          <h1
            className={`${playfairDisplay.className} text-balance text-center text-base min-[375px]:text-xl sm:text-3xl lg:text-4xl xl:text-5xl xl:leading-[1.12]`}
          >
            Driving brand growth with creative content and platform management
          </h1>
        </header>
        <div className='absolute inset-y-0 right-0'>
          <Image
            src={backgroundLaptop}
            alt=''
            role='presentation'
            className='h-full w-full object-cover lg:object-contain'
            sizes='75vw'
          />
        </div>
      </div>
    </section>
  );
}
