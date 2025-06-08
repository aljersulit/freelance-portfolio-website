'use client';
import { motion } from 'motion/react';
import ListArrowRight from '@/components/svg/ListArrowRight';
import ListCheckmark from '@/components/svg/ListCheckmark';

const iconObj = {
  checkmark: ListCheckmark,
  arrowright: ListArrowRight,
};

const listContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 85,
      damping: 22,
    },
  },
};

type Props = {
  containerClassName: string;
  list: string[];
  className: string;
  icon: 'checkmark' | 'arrowright';
  iconClassName: string;
};

export default function StaggeredList({ containerClassName, list, className, icon, iconClassName }: Props) {
  const SVGIcon = iconObj[icon];
  return (
    <motion.ul className={containerClassName} variants={listContainer} initial='hidden' whileInView='show'>
      {list.map((item, index) => (
        <motion.li key={item + index} className={className} variants={listItem}>
          <SVGIcon className={iconClassName} />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
