"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { cn } from '@/lib/utils';

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);
  const negativePosX = useMotionValue(0);
  const negativePosY = useMotionValue(0);
  const scaleSize = useMotionValue(1);
  const transform = useMotionTemplate`translate(${posX}px, ${posY}px)`;
  const negativeTransform = useMotionTemplate`translate3d(${negativePosX}px, ${negativePosY}px, 0) scale3d(${scaleSize}, ${scaleSize}, 1)`;
  // const scale = useMotionTemplate`scale(${scaleSize})`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    posX.set(x);
    posY.set(y);
    negativePosX.set(-x);
    negativePosY.set(-y);
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        scaleSize.set(1.03);
      }}
      onMouseLeave={() => {
        scaleSize.set(1);
        posX.set(0);
        posY.set(0);
        negativePosX.set(0);
        negativePosY.set(0);
      }}
      style={{
        transform,
        transition: 'transform 0.1s ease-out',
      }}
      className={cn('relative overflow-hidden rounded-2xl', containerClassName)}
    >
      <div
        className='relative h-full overflow-hidden bg-gradient-to-b from-black/5 to-black/40 px-6 py-[38px] sm:mx-0 sm:rounded-2xl'
        //[background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]
        style={{
          boxShadow:
            '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
        }}
      >
        <motion.div
          style={{
            transform: negativeTransform,
            transition: 'transform 0.1s ease-out',
          }}
          className={cn('h-full', className)}
        >
          {/* <Noise /> */}
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

// const Noise = () => {
//   return (
//     <div
//       className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
//       style={{
//         backgroundImage: "url(/noise.webp)",
//         backgroundSize: "30%",
//       }}
//     ></div>
//   );
// };
