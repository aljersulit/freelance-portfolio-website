'use client'

import { useEffect, useRef } from "react";
import { roboto } from "@/app/(frontend)/font";
import useScreenHeight from "@/hooks/useScreenHeight";
import useScrollDirection from "@/hooks/useScrollDirection";
import { motion, useSpring } from "motion/react";
import { Banner } from "@/payload-types";
import IKImage from "@/components/IKImage";

export default function Paragraph({ text }: { text: Banner['paragraph'] }) {
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
      className={`${roboto.className} relative ml-[76px] mr-2 h-[85px] w-[166px] px-[18px] pt-[0.9375rem] text-center text-[0.625rem] font-normal leading-[1.1] md:ml-[175px] md:h-[175px] md:w-[335px] md:px-[42px] md:text-xl lg:ml-[258px] lg:w-[432px] lg:text-pretty lg:text-left xl:ml-[380px] xl:mt-[45px] xl:h-[206px] xl:w-[628px] xl:px-[52px] xl:pt-8 xl:text-3xl 2xl:ml-[450px] 2xl:h-[250px] 2xl:w-[738px] 2xl:text-4xl`}
    >
      {text ||
        "Let's craft a digital presence that builds credibility, attracts opportunities, and drives real results!"}
      <IKImage
        alt=''
        src='/bubble_mobile.png'
        width={251}
        height={130}
        role='presentation'
        className='absolute inset-0 -z-10 w-full object-contain lg:hidden'
      />
      <IKImage
        alt=''
        src='/bubble.png'
        width={634}
        height={208}
        role='presentation'
        className='absolute inset-0 -z-10 hidden w-full object-contain lg:block'
      />
    </motion.p>
  );
}