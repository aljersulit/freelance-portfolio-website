import Linkedin from '@/components/svg/Linkedin';
import Mail from '@/components/svg/Mail';
import Instagram from '@/components/svg/Instagram';
import Facebook from '@/components/svg/Facebook';

import A1 from '@/assets/A1.png';
import A2 from '@/assets/A2.png';
import A3 from '@/assets/A3.png';
import A4 from '@/assets/A4.png';

import B1 from '@/assets/B1.png';
import B2 from '@/assets/B2.png';
import { StaticImageData } from 'next/image';

export const TESTIMONIALS = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: '/man_1.avif',
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: 'Michael Rodriguez',
    designation: 'CTO at InnovateSphere',
    src: '/women_portrait.avif',
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: 'Emily Watson',
    designation: 'Operations Director at CloudScale',
    src: '/man_2.avif',
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: 'James Kim',
    designation: 'Engineering Lead at DataPro',
    src: '/man_3.avif',
  },
  {
    quote:
      'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
    name: 'Lisa Thompson',
    designation: 'VP of Technology at FutureNet',
    src: '/man_4.avif',
  },
];

export const NAVLINKS = [
  {
    title: 'Works',
    link: '/#works',
  },
  {
    title: 'Services',
    link: '/#services',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Testimonials',
    link: '/#testimonials',
  },
];

export const SERVICES = [
  {
    name: 'Social Media Management',
  },
  {
    name: 'Content Creation',
  },
  {
    name: 'Graphic Design',
  },
  {
    name: 'Video Edit',
  },
];

type Logo = typeof Linkedin | typeof Mail | typeof Instagram | typeof Facebook;

type Socials = {
  Logo: Logo;
  textContent: string;
  link: string;
};

export const SOCIALS: Socials[] = [
  {
    Logo: Facebook,
    textContent: 'Aljoy Alfaro Sulit',
    link: 'https://www.facebook.com/aljoyalfarosulit',
  },
  {
    Logo: Instagram,
    textContent: '@aljoyalfs',
    link: 'https://www.instagram.com/aljoyalfs',
  },
  {
    Logo: Linkedin,
    textContent: 'Aljoy Alfaro Sulit',
    link: 'https://www.linkedin.com/in/aljoysulit',
  },
  {
    Logo: Mail,
    textContent: 'aljoysulit@gmail.com',
    link: 'mailto:aljoysulit@gmail.com',
  },
];

export type CarouselList = { image: StaticImageData; altText: string }[];
type CarouselPhotosType = Record<'list1' | 'list2', CarouselList>;

export const CarouselPhotos: CarouselPhotosType = {
  list1: [
    { image: A1, altText: 'Aljoy in the office infront of her laptop.' },
    { image: A2, altText: 'Aljoy in her photo shot standing wearing her Agribank office uniform.' },
    { image: A3, altText: 'Aljoy as a model employee for the Agribank loan product.' },
    { image: A4, altText: "Agribank's Tiktok account." },
  ],
  list2: [
    { image: B1, altText: "Aljoy as host of Agribank's annual company events." },
    { image: B2, altText: "Aljoy as host of Agribank's branch opening." },
  ],
};