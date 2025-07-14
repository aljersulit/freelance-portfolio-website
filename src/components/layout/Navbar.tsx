'use client';

import { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent, useSpring, motion, AnimatePresence, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { NAVLINKS, SOCIALS } from '@/lib/constants';
// import NavMenu from '@/components/NavMenu';
import Menu from '@/components/svg/Menu';
import HorizontalLogo from '@/components/svg/HorizontalLogo';
import MyLogo from '@/components/svg/MyLogo';

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
        <ul className='font-workSans hidden pr-12 text-base font-medium lg:flex xl:text-xl 2xl:text-2xl'>
          {NAVLINKS.map((nav, i) => {
            return (
              <li
                key={nav.title + i}
                className={cn('relative', nav.title.toLowerCase() === activeSection && 'text-accent-foreground')}
              >
                <Link href={nav.link} className='block px-[1.38rem] lg:py-0 xl:py-1'>
                  {nav.title}
                  {nav.Svg && <nav.Svg className='inline w-4' />}
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

function NavMenu({ setIsMenuVisible }: { setIsMenuVisible: (value: boolean) => void }) {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.09,
        type: 'spring',
        stiffness: 160,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const itemsVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.65,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  function closeNavMenu() {
    setIsMenuVisible(false);
  }

  return (
    <motion.div
      variants={containerVariant}
      style={{
        originX: '100%',
        originY: '0%',
      }}
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0 }}
      className='fixed inset-x-3 inset-y-2 z-[100] select-none rounded-xl bg-primary px-4 pb-20 pt-5 text-black md:inset-4 md:px-7 md:pt-6'
    >
      <motion.div variants={itemsVariant} className='relative flex justify-between'>
        <Link href='/' onClick={closeNavMenu}>
          <MyLogo className='h-[45px] w-[45px] md:h-[60px] md:w-[60px]' />
        </Link>

        <button
          tabIndex={0}
          aria-label='Close navigation menu'
          className='group relative mr-2 h-[30px] w-[30px] md:h-[45px] md:w-[45px]'
          onClick={closeNavMenu}
        >
          <i className='absolute right-0 top-[11px] h-2 w-7 rotate-45 bg-current transition-all duration-500 ease-out group-hover:rotate-[360deg] md:top-[18px] md:w-10'></i>
          <i className='absolute right-0 top-[11px] h-2 w-7 -rotate-45 bg-current transition-all duration-500 ease-out group-hover:rotate-[360deg] md:top-[18px] md:w-10'></i>
        </button>
      </motion.div>
      <ul className='mt-8 sm:container md:mt-10'>
        {NAVLINKS.map((item, index) => (
          <motion.li key={index} className='leading-[1em]' variants={itemsVariant}>
            <Link
              className='block border-b border-black py-4 text-3xl font-normal uppercase leading-[0.9em] md:text-4xl xl:text-9xl'
              href={item.link}
              onClick={closeNavMenu}
            >
              {item.title} {item.Svg && <item.Svg className='inline w-5 sm:w-6 md:w-7' />}
            </Link>
          </motion.li>
        ))}
        <motion.footer variants={itemsVariant} className='mt-6 sm:container'>
          <ul className='flex gap-5 text-3xl'>
            {SOCIALS.map((social, index) => (
              <li key={index}>
                <a
                  className='hover:text-yellow text-[1.15em]'
                  href={social.link}
                  target='_blank'
                  rel='nofollow noreferrer'
                >
                  {<social.Logo className='w-8 md:w-10' />}
                </a>
              </li>
            ))}
          </ul>
        </motion.footer>
      </ul>
    </motion.div>
  );
}
