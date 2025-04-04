'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent, useSpring, motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Link from 'next/link';

import { NAVLINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [activeSection, setActiveSection] = useState<string | null>();

  const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useSpring(0, { damping: 20, stiffness: 300, mass: 0.2 });

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? 'down' : 'up');

    function hideNavbar() {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      y.set(-navHeight);
    }

    function showNavbar() {
      y.set(0);
    }

    if (scrollDirection === 'down' && current > 0) {
      hideNavbar();
    } else {
      showNavbar();
    }

    if (current > 0) {
      setIsNavbarBgTransparent(false);
    } else {
      setIsNavbarBgTransparent(true);
    }
  });

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-main]');

    const handleScroll = () => {
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const top = window.scrollY;
          const offset = section.offsetTop - 150;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');

          if (top >= offset && top < offset + height) {
            setActiveSection(id);
          }
        }
      });
      if (window.scrollY === 0) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      style={{ y }}
      ref={navRef}
      className={cn(
        'fixed top-0 z-[100] flex h-24 w-full items-center justify-between border-b border-b-slate-300 px-6 text-secondary-foreground transition-colors duration-700',
        !isNavbarBgTransparent && 'bg-[rgba(145,155,120,0.35)] shadow-sm backdrop-blur-[6px]',
      )}
    >
      <Link href='/' className='font-outfit text-xl font-bold uppercase tracking-widest'>
        AljoyDigital.
      </Link>
      <ul className='font-workSans flex pr-12 text-lg font-medium'>
        {NAVLINKS.map((nav, i, arr) => {
          return (
            <li
              key={nav.title + i}
              className={cn('relative', nav.title.toLowerCase() === activeSection && 'text-accent-foreground')}
            >
              <Link href={nav.link} className='px-[1.38rem] py-3'>
                {nav.title}
              </Link>
            </li>
          );
        })}
        <li className='cursor-dot relative ml-[1.38rem] rounded-md border border-secondary-foreground transition-colors hover:border-background hover:bg-accent hover:text-primary-foreground'>
          <Link href='/#contact' className='px-[1.38rem] py-3'>
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
