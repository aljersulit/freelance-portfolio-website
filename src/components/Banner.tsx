'use client';
import { useRef, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';
import { playfairDisplay, roboto } from '@/app/font';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

export default function Banner() {
  return (
    <section className='pt-[45px] md:pb-[52px] md:pt-[90px] lg:pb-[72px] lg:pt-[168px] xl:pb-[95px] 2xl:pt-[200px]'>
      <div className='lg:mx-auto lg:-translate-x-[65px] xl:w-[1065px] 2xl:w-[1490px]'>
        <BannerH3 />
        <div className='relative mx-auto mt-[16px] w-fit overflow-visible pb-[76px] md:mt-[40px] md:pb-[95px] lg:mt-[16px] xl:mt-[25] xl:pb-[210px] 2xl:pb-[385px]'>
          <BannerImg />
          <BannerParagraph />
        </div>
      </div>
    </section>
  );
}

function BannerH3() {
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
      Struggling to Stand Out in the Digital Marketing World?
    </motion.h3>
  );
}

function BannerImg() {
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
      className='absolute left-[5px] top-[20px] h-[125px] w-[76px] bg-[url(/g550.png)] bg-contain bg-no-repeat md:left-[15px] md:top-[30px] md:h-[245px] md:w-[170px] lg:-top-[80px] lg:h-[325px] lg:w-[300px] xl:-top-[125px] xl:left-0 xl:h-[586px] xl:w-[368px] 2xl:h-[750px] 2xl:w-[555px]'
    />
  );
}

function BannerParagraph() {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  const ref = useRef<HTMLDivElement | null>(null);

  const scaleX = useSpring(0, { damping: 20 });
  const scaleY = useSpring(0, { damping: 20 });
  const opacity = useSpring(0.125, { damping: 20 });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!ref.current) return;
      const bottomRect = ref.current.getBoundingClientRect().bottom;
      const topRect = ref.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= bottomRect) {
        setTimeout(() => {
          scaleX.set(1);
          scaleY.set(1);
          opacity.set(1);
        }, 250);
      } else if (scrollDirection === 'up' && screenHeight <= topRect) {
        scaleX.set(0);
        scaleY.set(0);
        opacity.set(0.125);
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight, opacity, scaleX, scaleY]);

  return (
    <motion.p
      ref={ref}
      style={{
        originX: 0,
        originY: 0,
        scaleX,
        scaleY,
        opacity,
      }}
      className={`${roboto.className} ml-[76px] mr-2 h-[85px] w-[166px] bg-[url(/bubble_mobile.png)] bg-contain bg-no-repeat px-[18px] pt-[0.9375rem] text-center text-[0.625rem] font-normal leading-[1.1] md:ml-[175px] md:h-[175px] md:w-[335px] md:px-[42px] md:text-xl lg:ml-[258px] lg:w-[432px] lg:text-pretty lg:bg-[url(/Union.png)] lg:text-left xl:ml-[380px] xl:mt-[45px] xl:h-[206px] xl:w-[628px] xl:px-[52px] xl:pt-8 xl:text-3xl 2xl:ml-[450px] 2xl:h-[250px] 2xl:w-[738px] 2xl:text-4xl`}
    >
      Let&apos;s craft a digital presence that builds credibility, attracts opportunities, and drives real results!
    </motion.p>
  );
}
