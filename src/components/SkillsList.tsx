'use client';

import { useState, useRef, useEffect } from 'react';
import { roboto } from '@/app/(frontend)/font';
import { motion } from 'motion/react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

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
  },
};

export default function SkillsList({
  skills,
}: {
  skills?:
    | {
        skill: string;
        id?: string | null | undefined;
      }[]
    | null
    | undefined;
}) {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();
  const [status, setStatus] = useState<'visible' | 'hidden'>('hidden');

  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!ref.current) return;
      const bottom = ref.current.getBoundingClientRect().bottom;
      const top = ref.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= bottom) {
        setStatus('visible');
      } else if (scrollDirection === 'up' && screenHeight <= top) {
        setStatus('hidden');
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight]);
  return (
    <motion.ul
      ref={ref}
      variants={containerVariants}
      initial={false}
      animate={status}
      className='flex flex-wrap gap-[6px]'
    >
      {skills &&
        skills.map((skill, i) => (
          <motion.li
            key={skill.skill + i}
            variants={lineVariants}
            transition={{
              type: 'spring',
              visualDuration: 0.5,
              bounce: 0.4,
            }}
            className={`${roboto.className} rounded-full bg-list px-[11px] py-[7px] text-[0.6rem] text-primary-foreground md:text-base lg:px-[14px] lg:py-[9px] lg:text-xs xl:text-sm 2xl:text-base min-[1900px]:text-xl min-[2160px]:px-[30px] min-[2160px]:py-[18px] min-[2160px]:text-2xl`}
          >
            {skill.skill}
          </motion.li>
        ))}
    </motion.ul>
  );
}
