'use client';
import React from 'react';
import { motion } from 'motion/react';
import { playfairDisplay, roboto } from '@/app/font';

export default function Banner() {
  return (
    <section className='pt-[45px] md:pb-[52px] md:pt-[90px] lg:pb-[72px] lg:pt-[168px] xl:pb-[95px] 2xl:pt-[200px]'>
      <div className='lg:mx-auto lg:-translate-x-[65px] xl:w-[1065px] 2xl:w-[1490px]'>
        <motion.h3
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            margin: '0px 200px 0px 350px',
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
          className={`${playfairDisplay.className} px-6 text-center text-xl font-normal md:text-5xl lg:ml-[240px] lg:px-28 lg:text-4xl lg:leading-tight xl:ml-[380px] xl:w-auto xl:px-0 xl:text-[3.2rem] xl:leading-[3.4rem] 2xl:ml-[466px] 2xl:text-7xl`}
        >
          Struggling to Stand Out in the Digital Marketing World?
        </motion.h3>
        <div className='relative mx-auto mt-[16px] w-fit overflow-visible pb-[76px] md:mt-[40px] md:pb-[95px] lg:mt-[16px] xl:mt-[25] xl:pb-[210px] 2xl:pb-[385px]'>
          <motion.div
            initial={{
              y: 100,
              scale: 0.5,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              margin: '0px 200px 0px 350px',
            }}
            transition={{
              type: 'spring',
              bounce: 0.25,
              visualDuration: 0.3,
              delay: 0.2,
            }}
            className='absolute left-[5px] top-[20px] h-[125px] w-[76px] bg-[url(/g550.png)] bg-contain bg-no-repeat md:left-[15px] md:top-[30px] md:h-[245px] md:w-[170px] lg:-top-[80px] lg:h-[325px] lg:w-[300px] xl:-top-[125px] xl:left-0 xl:h-[586px] xl:w-[368px] 2xl:h-[750px] 2xl:w-[555px]'
          />
          <motion.p
            initial={{
              scaleX: 0,
              opacity: 0.125,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            style={{
              originX: 0,
            }}
            transition={{
              type: 'spring',
              damping: 20,
            }}
            className={`${roboto.className} ml-[76px] mr-2 h-[85px] w-[166px] bg-[url(/bubble_mobile.png)] bg-contain bg-no-repeat px-[18px] pt-[0.9375rem] text-center text-[0.625rem] font-normal leading-[1.1] md:ml-[175px] md:h-[175px] md:w-[335px] md:px-[42px] md:text-xl lg:ml-[258px] lg:w-[432px] lg:text-pretty lg:bg-[url(/Union.png)] lg:text-left xl:ml-[380px] xl:mt-[45px] xl:h-[206px] xl:w-[628px] xl:px-[52px] xl:pt-8 xl:text-3xl 2xl:ml-[450px] 2xl:h-[250px] 2xl:w-[738px] 2xl:text-4xl`}
          >
            Let&apos;s craft a digital presence that builds credibility, attracts opportunities, and drives real
            results!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
