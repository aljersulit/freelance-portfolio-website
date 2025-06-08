'use client';
import { useRef, useState, useEffect } from 'react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';
import { motion, Variants, VariantLabels } from 'motion/react';

export default function FadeInAnimationContainer({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
}) {
  const variantsKey = Object.keys(variants);

  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();
  const [status, setStatus] = useState<VariantLabels>(variantsKey[0]);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      const height = ref.current.offsetHeight;

      if (scrollDirection === 'down' && screenHeight >= top + height * 0.65) {
        setStatus(variantsKey[1]);
      } else if (scrollDirection === 'up' && screenHeight <= top) {
        setStatus(variantsKey[0]);
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollDirection, screenHeight]);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={false}
      animate={status}
      className={className}
      transition={{
        type: 'spring',
        damping: 35,
        stiffness: 150,
      }}
    >
      {children}
    </motion.div>
  );
}
