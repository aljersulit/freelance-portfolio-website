'use client';
import { useRef, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

export default function ExpandingContainer({
  className,
  children,
  animationTrigger = 'onView',
}: {
  className?: string;
  children: React.ReactNode;
  animationTrigger?: 'onView' | 'onScrollDown';
}) {
  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  const ref = useRef<HTMLDivElement | null>(null);
  const scale = useSpring(0.82, {
    damping: 35,
    stiffness: 150,
  });

  useEffect(() => {
    if (animationTrigger === 'onScrollDown') {
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
    }
  }, [scrollY, scrollDirection, screenHeight, animationTrigger]);
  return animationTrigger === 'onView' ? (
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
  ) : (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
}
