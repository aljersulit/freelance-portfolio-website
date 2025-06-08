import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';

export default function useScrollDirection() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? 'down' : 'up');
  });

  return { scrollDirection, scrollY };
}
