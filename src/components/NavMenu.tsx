import { motion } from 'motion/react';
import Link from 'next/link';
import { NAVLINKS, SOCIALS } from '@/lib/constants';
import MyLogo from '@/components/svg/MyLogo';

const containerVariant = {
  hidden: {
    opacity: 0,
    originX: '100%',
    originY: '0%',
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

const itemsVariant = {
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

export default function NavMenu({ setIsMenuVisible }: { setIsMenuVisible: (value: boolean) => void }) {
  function closeNavMenu() {
    setIsMenuVisible(false);
  }

  return (
    <motion.div
      variants={containerVariant}
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
