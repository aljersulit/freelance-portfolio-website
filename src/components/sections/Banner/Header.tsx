'use client';

import { useRef, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';
import { playfairDisplay } from '@/app/(frontend)/font';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';
import { Banner } from '@/payload-types';

export default function Header({ text }: { text: Banner['header'] }) {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  const h3Ref = useRef<HTMLHeadingElement | null>(null);

  const h3Opacity = useSpring(0, { stiffness: 120, damping: 30 });
  const xTranslate = useSpring('-25%', { stiffness: 120, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!h3Ref.current) return;
      const h3Bottom = h3Ref.current.getBoundingClientRect().bottom;
      const h3Top = h3Ref.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= h3Bottom) {
        h3Opacity.set(1);
        xTranslate.set('0%');
      } else if (scrollDirection === 'up' && screenHeight <= h3Top) {
        h3Opacity.set(0);
        xTranslate.set('-25%');
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight, h3Opacity, xTranslate]);

  return (
    <motion.h3
      ref={h3Ref}
      style={{
        opacity: h3Opacity,
        x: xTranslate,
      }}
      className={`${playfairDisplay.className} px-6 text-center text-xl font-normal md:text-5xl lg:ml-[240px] lg:px-28 lg:text-4xl lg:leading-tight xl:ml-[380px] xl:w-auto xl:px-0 xl:text-[3.2rem] xl:leading-[3.4rem] 2xl:ml-[466px] 2xl:text-7xl`}
    >
      {text || 'Struggling to Stand Out in the Digital Marketing World?'}
    </motion.h3>
  );
}
