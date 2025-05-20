"use client"

import { motion } from 'motion/react';
import Image from 'next/image';
import hero1 from '@/assets/hero1_results.png';
import hero2 from '@/assets/hero2_results.png';
import hero3 from '@/assets/hero3_results.png';


const list = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 25,
      },
    },
  };

export default function HeroList() {
  return (
    <motion.ul
          variants={list}
          initial='hidden'
          animate='show'
          className='relative z-10 flex flex-wrap items-center justify-center gap-[10px] min-[375px]:gap-[20px] xl:gap-[26px] 3xl:gap-[40px]'
        >
          <motion.li
            variants={item}
            className='w-[135px] min-[375px]:w-[165px] sm:w-[250px] lg:w-[270px] xl:w-[300px] 3xl:w-[400px]'
          >
            <Image src={hero1} alt='Ropa market Motocompare' className='h-auto w-full' priority />
          </motion.li>
          <motion.li
            variants={item}
            className='order-last w-[140px] min-[375px]:w-[170px] sm:w-[260px] lg:order-none lg:w-[320px] xl:w-[352px] 3xl:w-[432px]'
          >
            <Image src={hero2} alt='Agribank smart time deposit' className='h-auto w-full' priority />
          </motion.li>
          <motion.li
            variants={item}
            className='w-[135px] min-[375px]:w-[165px] sm:w-[250px] lg:w-[270px] xl:w-[300px] 3xl:w-[400px]'
          >
            <Image src={hero3} alt='Agribank pay' className='h-auto w-full' priority />
          </motion.li>
        </motion.ul>
  )
}
