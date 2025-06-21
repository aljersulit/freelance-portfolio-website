import { Outfit, Work_Sans, Playfair_Display, Roboto, Roboto_Flex, Roboto_Condensed } from 'next/font/google';

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const robotoFlex = Roboto_Flex({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const robotoCondensed = Roboto_Condensed({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});
