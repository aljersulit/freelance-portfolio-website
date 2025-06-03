'use client';

import React from 'react';
import { roboto } from '@/app/font';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      visualDuration: 0.5,
      bounce: 0.4,
    },
  },
};

export default function SkillsList({ skills }: { skills: string[] }) {
  return (
    <motion.ul variants={containerVariants} initial='hidden' whileInView='visible' viewport={{once: true}} className='flex flex-wrap gap-[6px]'>
      {skills.map((skill, i) => (
        <motion.li
          key={skill + i}
          variants={lineVariants}
          className={`${roboto.className} rounded-full bg-list px-[11px] py-[7px] text-[0.6rem] text-primary-foreground md:text-base lg:px-[14px] lg:py-[9px] lg:text-xs xl:text-sm 2xl:text-base min-[1900px]:text-xl min-[2160px]:px-[30px] min-[2160px]:py-[18px] min-[2160px]:text-2xl`}
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
}
