'use client';

import { motion, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';
import IKImage from '@/components/IKImage';

export default function BannerImg() {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  const divBgRef = useRef<HTMLDivElement | null>(null);

  const y = useSpring(100, { bounce: 0.25, visualDuration: 0.3 });
  const scale = useSpring(0.5, { bounce: 0.25, visualDuration: 0.3 });
  const opacity = useSpring(0, { bounce: 0.25, visualDuration: 0.3 });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!divBgRef.current) return;
      const divBgBottom = divBgRef.current.getBoundingClientRect().bottom;
      const divBgTop = divBgRef.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= divBgBottom) {
        y.set(0);
        scale.set(1);
        opacity.set(1);
      } else if (scrollDirection === 'up' && screenHeight <= divBgTop) {
        y.set(100);
        scale.set(0.5);
        opacity.set(0);
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight, opacity, scale, y]);
  return (
    <motion.div
      ref={divBgRef}
      style={{
        y,
        scale,
        opacity,
      }}
      className='absolute left-[5px] top-[20px] h-[125px] w-[76px] overflow-hidden md:left-[15px] md:top-[30px] md:h-[245px] md:w-[170px] lg:-top-[80px] lg:h-[325px] lg:w-[300px] xl:-top-[125px] xl:left-0 xl:h-[586px] xl:w-[368px] 2xl:h-[750px] 2xl:w-[555px]'
    >
      <IKImage
        alt=''
        src='/g550.webp'
        width={816}
        height={1172}
        role='presentation'
        className='h-full w-full object-contain object-left-top'
      />
    </motion.div>
  );
}
