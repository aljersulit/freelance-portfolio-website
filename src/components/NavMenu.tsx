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
      className='fixed inset-y-2 inset-x-3 z-[100] select-none rounded-xl bg-primary px-4 pb-20 pt-5 text-black'
    >
      <motion.div variants={itemsVariant} className='relative flex justify-between'>
        <Link href='/' onClick={closeNavMenu}>
          <MyLogo className='h-[45px] w-[45px]' />
        </Link>

        <button
          tabIndex={0}
          aria-label='Close navigation menu'
          className='group relative h-[30px] w-[30px] mr-2'
          onClick={closeNavMenu}
        >
          <i className='absolute top-[11px] left-0 h-2 w-7 rotate-45 bg-current transition-all duration-500 ease-out group-hover:rotate-[360deg]'></i>
          <i className='absolute top-[11px] left-0 h-2 w-7 -rotate-45 bg-current transition-all duration-500 ease-out group-hover:rotate-[360deg]'></i>
        </button>
      </motion.div>
      <ul className='mt-8 sm:container'>
        {NAVLINKS.map((item, index) => (
          <motion.li key={index} className='leading-[1em]' variants={itemsVariant}>
            <Link
              className='block border-b border-black py-4 text-3xl font-normal uppercase leading-[0.9em] xl:text-9xl'
              href={item.link}
              onClick={closeNavMenu}
            >
              {item.title}
            </Link>
          </motion.li>
        ))}
        <motion.footer variants={itemsVariant} className="mt-6 sm:container">
          <ul className="flex gap-5 text-3xl">
            {SOCIALS.map((social, index) => (
              <li key={index}>
                <a
                  className="text-[1.15em] hover:text-yellow"
                  href={social.link}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  {<social.Logo className='w-8'/>}
                </a>
              </li>
            ))}
          </ul>
        </motion.footer>
      </ul>
    </motion.div>
  );
}
