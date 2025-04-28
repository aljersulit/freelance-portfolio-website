'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent, useSpring, motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { NAVLINKS } from '@/lib/constants';
import NavMenu from '@/components/NavMenu';
import Menu from '@/components/svg/Menu';
import HorizontalLogo from '@/components/svg/HorizontalLogo';

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [activeSection, setActiveSection] = useState<string | null>();
  const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState<boolean>(true);
  const [isNavMenuActive, setIsNavMenuActive] = useState<boolean>(false);
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
    <motion.div style={{ y }} className='fixed z-[1000] h-[8.75rem] w-full overflow-hidden pb-4 transition-opacity'>
      <AnimatePresence>{isNavMenuActive && <NavMenu setIsMenuVisible={setIsNavMenuActive} />}</AnimatePresence>
      <nav
        ref={navRef}
        className={cn(
          'fixed left-0 top-0 z-[50] flex h-[40px] w-full items-center justify-between border-b border-b-slate-300 px-[22px] text-secondary-foreground transition-all duration-700 ease-out sm:h-[58px] md:px-[28px] lg:h-[75px] xl:h-[96px] xl:px-[58px] 2xl:h-[125px] 2xl:px-[68px]',
          !isNavbarBgTransparent && 'bg-[rgba(145,155,120,0.35)] shadow-sm backdrop-blur-[6px]',
        )}
      >
        <Link
          href='/'
          className='h-[26px] w-[96px] sm:h-[30px] sm:w-[130px] md:h-[36px] md:w-[170px] xl:h-[60px] xl:w-[190px] 2xl:w-[240px]'
        >
          <HorizontalLogo className='h-full w-full' />
        </Link>
        <ul className='font-workSans hidden pr-12 text-lg font-medium lg:flex xl:text-xl 2xl:text-2xl'>
          {NAVLINKS.map((nav, i) => {
            return (
              <li
                key={nav.title + i}
                className={cn('relative', nav.title.toLowerCase() === activeSection && 'text-accent-foreground')}
              >
                <Link href={nav.link} className='block px-[1.38rem] lg:py-0 xl:py-1'>
                  {nav.title}
                </Link>
              </li>
            );
          })}
          <li className='relative ml-[1.38rem] cursor-dot rounded-md border border-secondary-foreground transition-colors hover:border-background hover:bg-accent hover:text-primary-foreground'>
            <Link href='/#contact' className='block px-[1.38rem] lg:py-0 xl:py-1'>
              Contact
            </Link>
          </li>
        </ul>
        <AnimatePresence>
          {!isNavMenuActive && <OpenNavMenuButton setIsMenuVisible={setIsNavMenuActive} />}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}

function OpenNavMenuButton({ setIsMenuVisible }: { setIsMenuVisible: (value: boolean) => void }) {
  return (
    <button
      type='button'
      className='h-[18px] w-[18px] md:h-[22px] md:w-[22px] lg:hidden'
      aria-controls='navigation-menu'
      aria-label='Main menu'
      aria-expanded='false'
      onClick={() => setIsMenuVisible(true)}
    >
      <Menu />
    </button>
  );
}
