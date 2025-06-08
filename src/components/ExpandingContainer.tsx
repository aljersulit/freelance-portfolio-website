'use client'
import { motion } from 'motion/react';

export default function ExpandingContainer({
  className,
  children
}: {
  className: string;
  children: React.ReactNode
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
      {children}
    </motion.div>
  );
}
