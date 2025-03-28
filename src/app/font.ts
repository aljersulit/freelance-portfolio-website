import { Outfit, Work_Sans, Playfair_Display, Roboto } from 'next/font/google';

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-outfit',
});

export const workSans = Work_Sans({
  // weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-work-sans',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-playfair-display',
});

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-roboto',
});