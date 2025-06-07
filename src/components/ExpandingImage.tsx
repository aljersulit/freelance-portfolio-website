'use client'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function ExpandingImage({
  src,
  alt,
  className,
  hasHoverAnimation = true,
}: {
  src: StaticImageData;
  alt: string;
  className: string;
  hasHoverAnimation?: boolean;
}) {
  return (
    <motion.div
      initial={{
        scale: 0.82,
      }}
      whileInView={{
        scale: 1,
      }}
      transition={{
        type: 'spring',
        damping: 35,
        stiffness: 150,
      }}
      className={className}
    >
      <Image
        src={src}
        alt={`${alt} sample preview`}
        className={cn('object-cover', hasHoverAnimation && 'transition-transform hover:rotate-3 hover:scale-105')}
        placeholder='blur'
      />
    </motion.div>
  );
}
