'use client';
import Link from 'next/link';
import { playfairDisplay, roboto } from '@/app/(frontend)/font';
import { motion, Variants } from 'motion/react';
import { Hero } from '@/payload-types';

const lineVariants: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1], // custom easing for smoother motion
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

interface HeroHeaderProps extends Pick<Hero, 'intro' | 'headline' | 'subheading'> {}

export default function HeroHeader({ intro, headline, subheading }: HeroHeaderProps) {
  return (
    <motion.header
      className='flex flex-col justify-center lg:w-[500px] xl:w-[762px] 3xl:w-[1200px]'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2
        className={`${playfairDisplay.className} playfairDisplay mb-2 hidden h-min overflow-hidden text-3xl lg:block 2xl:mb-[14px] 2xl:pb-[10px] 2xl:text-4xl 3xl:text-6xl`}
      >
        <motion.div variants={lineVariants}>
          <motion.span
            className='inline-block 3xl:text-5xl'
            style={{
              originY: 1,
              originX: 0.7,
            }}
            animate={{
              rotate: [0, 20, -10, 20, -10, 0],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
              delay: 1.4,
            }}
          >
            👋
          </motion.span>{' '}
          {intro}
        </motion.div>
      </h2>
      <h1
        className={`${roboto.className} mb-4 text-[1.7rem] font-bold leading-[1.1] min-[375px]:text-3xl min-[425px]:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-balance lg:text-6xl lg:font-semibold 2xl:mb-9 3xl:text-8xl`}
      >
        {headline.map((headlineObj) => (
          <div key={headlineObj.id} className='overflow-hidden 2xl:-mb-[12px] 2xl:pb-[12px]'>
            <motion.div variants={lineVariants}>{headlineObj.text}</motion.div>
          </div>
        ))}
      </h1>
      <div className='mb-4 overflow-hidden text-[0.625rem] text-muted-foreground min-[375px]:text-sm md:mb-6 md:text-xl lg:mb-11 lg:text-xl 2xl:mb-8 3xl:text-4xl'>
        <motion.p variants={lineVariants}>{subheading}</motion.p>
      </div>
      <div className='overflow-hidden'>
        <motion.div variants={lineVariants}>
          <Link
            href='/#services'
            className='block w-max cursor-dot rounded-sm bg-primary px-7 py-[0.4rem] text-xs font-medium text-primary-foreground transition-colors hover:bg-accent min-[375px]:text-sm md:rounded-md md:text-lg lg:rounded-lg lg:px-8 lg:py-2 lg:text-2xl lg:font-normal 3xl:rounded-2xl 3xl:px-16 3xl:py-4 3xl:text-4xl'
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
