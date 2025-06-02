"use client"
import React from 'react';
import { motion } from 'motion/react';

const lineVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      visualDuration: 0.24,
      bounce: 0.44
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type RevealingTextProps = {
  text: string;
};

export default function RevealingText({ text }: RevealingTextProps) {
  const chars = text.split('');

  return (
    <motion.div className='overflow-hidden inline-block' variants={containerVariants} initial="hidden" whileInView="visible">
      {chars.map((char, index) => (
        char !== " " ? (
        <motion.span key={char + index} className='inline-block' variants={lineVariants}>
          {char}
        </motion.span>
        ) : <span key={char + index} className='inline-block'>&nbsp;</span>
      ))}
    </motion.div>
  );
}
