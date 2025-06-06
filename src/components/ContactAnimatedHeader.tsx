'use client';
import { useEffect, useRef } from 'react';
import { playfairDisplay } from '@/app/font';
import { motion, useSpring } from 'motion/react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

export default function ContactAnimatedHeader() {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  const ref = useRef<HTMLDivElement | null>(null);
  const scale = useSpring(0.82, {
    damping: 35,
    stiffness: 150,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= top) {
        scale.set(1);
      } else if (scrollDirection === 'up' && screenHeight <= top) {
        scale.set(0.82);
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight]);
  return (
    <motion.header
      ref={ref}
      style={{
        scale
      }}
      className='mx-[20px] rounded-xl border-[2px] border-primary bg-accent-foreground py-[20px] sm:mx-[100px] lg:mx-[120px] lg:border-[6px] lg:py-[50px] xl:mx-auto xl:w-[1105px] xl:rounded-3xl xl:py-[78px]'
    >
      <h2
        className={`${playfairDisplay.className} text-balance text-center text-2xl font-normal leading-[1.3] md:text-4xl xl:text-[3.375rem] xl:leading-snug`}
      >
        Let&apos;s turn your digital presence into your biggest asset!
      </h2>
    </motion.header>
  );
}
