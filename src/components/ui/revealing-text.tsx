"use client"
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      visualDuration: 0.24,
      bounce: 0.44,
    },
  },
};

type RevealingTextProps = {
  text: string;
};

export default function RevealingText({ text }: RevealingTextProps) {
  const chars = text.split('');

  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();
  const [status, setStatus] = useState<'visible' | 'hidden'>('hidden');

  const ref = useRef<HTMLDivElement | null>(null);

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
    <motion.div
      ref={ref}
      className='inline-block overflow-hidden'
      variants={containerVariants}
      initial={false}
      animate={status}
    >
      {chars.map((char, index) =>
        char !== ' ' ? (
          <motion.span key={char + index} className='inline-block' variants={lineVariants}>
            {char}
          </motion.span>
        ) : (
          <span key={char + index} className='inline-block'>
            &nbsp;
          </span>
        ),
      )}
    </motion.div>
  );
}
