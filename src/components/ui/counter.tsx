"use client"
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from 'motion/react';
import useScreenHeight from '@/hooks/useScreenHeight';
import useScrollDirection from '@/hooks/useScrollDirection';

interface CounterProps {
  /**
   * A function to format the counter value. By default, it will format the
   * number with commas.
   */
  format?: (value: number, targetValue?: number) => string;

  /**
   * The target value of the counter.
   */
  targetValue: number;

  /**
   * The direction of the counter. If "up", the counter will start from 0 and
   * go up to the target value. If "down", the counter will start from the target
   * value and go down to 0.
   */
  direction?: 'up' | 'down';

  /**
   * The delay in milliseconds before the counter starts counting.
   */
  delay?: number;

  /**
   * Additional classes for the counter.
   */
  className?: string;
}

export const Formatter = {
  number: (value: number, targetValue?: number) =>
    typeof targetValue === 'number' && targetValue % 1 !== 0
      ? value.toFixed(2)
      : Intl.NumberFormat('en-US').format(+value.toFixed(0)),
  currency: (value: number) =>
    Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+value.toFixed(0)),
};

export default function Counter({
  format = Formatter.number,
  targetValue,
  direction = 'up',
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef<NodeJS.Timeout>(null);
  const isGoingUp = direction === 'up';
  const motionValue = useMotionValue(isGoingUp ? 0 : targetValue);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 115,
  });

  const screenHeight = useScreenHeight();
  const { scrollDirection, scrollY } = useScrollDirection();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;

      if (scrollDirection === 'down' && screenHeight >= top) {
        timer.current = setTimeout(() => {
          springValue.set(isGoingUp ? targetValue : 0);
        }, delay);
      } else if (scrollDirection === 'up' && screenHeight <= top) {
        timer.current = null;
        springValue.set(isGoingUp ? 0 : targetValue);
      }
    });

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      unsubscribe();
    };
  }, [scrollY, scrollDirection, screenHeight, delay, isGoingUp, targetValue, springValue]);

  useEffect(() => {
    const unsubSpring = springValue.on('change', (value) => {
      if (ref.current) {
        ref.current.textContent = format ? format(value, targetValue) : value.toString();
      }
    });

    return () => {
      unsubSpring();
    };
  }, [springValue, format]);

  return <span ref={ref} className={className} />;
}
