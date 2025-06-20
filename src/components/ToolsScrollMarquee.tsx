'use client';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { roboto } from '@/app/font';
import { TOOLS } from '@/lib/constants';
import { SOFTWARE } from '@/lib/constants';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ToolsScrollMarquee() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const slideLeft = useTransform(scrollYProgress, [0, 1], ['-80%', '-120%']);
  const slideRight = useTransform(scrollYProgress, [0, 1], ['-120%', '-80%']);
  return (
    <div ref={scrollRef}>
      <div
        aria-roledescription='Tools list container'
        className='mt-[58px] overflow-x-hidden md:mt-[72px] lg:mt-[122px] xl:mt-[180px]'
      >
        <motion.div
          style={{
            x: slideLeft,
          }}
          className='flex items-center'
        >
          <ul aria-hidden='true' className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px]'>
            {TOOLS.map((Tool, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Tool className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
          <h4
            className={`${roboto.className} px-[12px] text-base uppercase md:px-[40px] md:text-4xl lg:px-[50px] lg:text-5xl xl:text-7xl`}
          >
            Tools
          </h4>
          <ul className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px]'>
            {TOOLS.map((Tool, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Tool className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div
        aria-roledescription='Software list container'
        className='mt-[4px] overflow-x-hidden md:mt-[10px] min-[2100px]:mt-[18px]'
      >
        <motion.div
          style={{
            x: slideRight,
          }}
          className='flex items-center'
        >
          <ul aria-hidden='true' className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'>
            {SOFTWARE.firstList.map((Software, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
          <h4
            className={`${roboto.className} px-[12px] text-base uppercase md:px-[40px] md:text-4xl lg:px-[50px] lg:text-5xl xl:text-7xl`}
          >
            Software
          </h4>
          <ul className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'>
            {SOFTWARE.firstList.map((Software, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          style={{
            x: slideLeft,
          }}
          className='mt-[4px] flex items-center md:mt-[10px] min-[2100px]:mt-[18px]'
        >
          <ul
            aria-hidden='true'
            className='flex gap-[4px] pl-[4px] md:gap-[6px] md:pl-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'
          >
            {SOFTWARE.secondList.map((Software, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
          <ul className='flex gap-[4px] pl-[4px] md:gap-[6px] md:pl-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'>
            {SOFTWARE.secondList.map((Software, i) => (
              <li
                key={i}
                className={cn(
                  'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                  i % 2 === 0 && 'rounded-full',
                )}
              >
                {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
