'use client'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from 'motion/react';

export default function ExpandingImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <motion.div 
      initial={{
        scale: 0.82
      }}
      whileInView={{
        scale: 1
      }}
      transition={{
        type: 'spring',
        damping: 35,
        stiffness: 150
      }}
      className='hidden w-[630px] overflow-hidden lg:flex lg:flex-1 lg:justify-center 3xl:rounded-lg'
    >
      <Image
        src={src}
        alt={`${alt} sample preview`}
        className='object-cover transition-transform hover:rotate-3 hover:scale-105'
        placeholder='blur'
      />
    </motion.div>
  );
}
