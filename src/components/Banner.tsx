import React from 'react';

import { playfairDisplay, roboto } from '@/app/font';

export default function Banner() {
  return (
    <section className='mt-[45px] md:mb-[32px] md:mt-[90px] lg:mt-[168px]'>
      <div className='lg:mx-auto lg:h-[586px] lg:w-[1065px] lg:-translate-x-[65px]'>
        <h3
          className={`${playfairDisplay.className} text-center text-xl font-normal md:text-5xl lg:ml-[351px] lg:text-[3.2rem] lg:leading-[3.4rem]`}
        >
          Struggling to Stand Out in the Digital Marketing World?
        </h3>
        <div className='relative mx-auto mt-[16px] w-fit overflow-visible pb-[76px] md:mt-[40px]'>
          <div
            aria-hidden='true'
            className='absolute left-[5px] top-[20px] h-[125px] w-[76px] bg-[url(/g550.png)] bg-contain bg-no-repeat md:left-[15px] md:top-[30px] md:h-[245px] md:w-[170px] lg:-top-[155px] lg:h-[586px] lg:w-[408px] lg:bg-[auto_586px]'
          />
          <p
            className={`${roboto.className} ml-[76px] mr-2 h-[85px] w-[166px] bg-[url(/bubble_mobile.png)] bg-contain bg-no-repeat px-[18px] pt-[0.9375rem] text-center text-[0.625rem] font-normal leading-[1.1] md:ml-[175px] md:h-[175px] md:w-[335px] md:px-[42px] md:text-xl lg:ml-[422px] lg:mt-[45px] lg:h-[206px] lg:w-[628px] lg:text-pretty lg:bg-[url(/Union.png)] lg:px-[52px] lg:pt-8 lg:text-left lg:text-3xl`}
          >
            Let&apos;s craft a digital presence that builds credibility, attracts opportunities, and drives real
            results!
          </p>
        </div>
      </div>
    </section>
  );
}
