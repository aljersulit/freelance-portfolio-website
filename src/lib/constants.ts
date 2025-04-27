import { StaticImageData } from 'next/image';
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
import AgribankPhPreview from '@/assets/AgribankPH_Preview.png';
import RopaMarketPreview from '@/assets/Ropa_Market_Preview.png';
import AgripayPreview from '@/assets/Agripay_Preview.png';
import GlobalSearch from '@/components/svg/GlobalSearch';
import Audience from '@/components/svg/Audience';
import BusinessStat from '@/components/svg/BusinessStat';
import Meta from '@/components/svg/Meta';
import Buffer from '@/components/svg/Buffer';
import Asana from '@/components/svg/Asana';
import Airtable from '@/components/svg/Airtable';
import Mailchimp from '@/components/svg/Mailchimp';
import Microsoft from '@/components/svg/Microsoft';
import Google from '@/components/svg/Google';
import Capcut from '@/components/svg/Capcut';
import Canva from '@/components/svg/Canva';
import Behance from '@/components/svg/Behance';
import Photoshop from '@/components/svg/Photoshop';
import Illustrator from '@/components/svg/Illustrator';
import Figma from '@/components/svg/Figma';
import Pinterest from '@/components/svg/Pinterest';
import Wix from '@/components/svg/Wix';
import Wordpress from '@/components/svg/Wordpress';
import Notion from '@/components/svg/Notion';
import Loom from '@/components/svg/Loom';
import Slack from '@/components/svg/Slack';
import Shopify from '@/components/svg/Shopify';

export const TOOLS = [Meta, Buffer, Asana, Airtable, Mailchimp, Microsoft, Google];

export const SOFTWARE = {
  firstList: [Capcut, Canva, Behance, Photoshop, Illustrator, Figma],
  secondList: [Pinterest, Wix, Wordpress, Notion, Loom, Slack, Shopify],
};

export const CARDS = [
  {
    Svg: GlobalSearch,
    txt: 'Building a strong digital presence',
    alt: 'Globe icon.',
  },
  {
    Svg: Audience,
    txt: 'Creating content that resonates with your audience',
    alt: 'Audience icon.',
  },
  {
    Svg: BusinessStat,
    txt: 'Implementing strategies that drive real growth',
    alt: 'Business stats icon',
  },
];

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

export const WORKS = [
  {
    projectName: 'Agribank Ph',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design', 'Video Editing'],
    description:
      'A financial institution dedicated to empowering Filipino farmers, entrepreneurs, and individuals through accessible banking solutions.',
    previewPhoto: AgribankPhPreview,
    href: 'https://www.behance.net/gallery/213195203/Banking-and-Finance',
  },
  {
    projectName: 'Ropa Market',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design', 'Video Editing'],
    description: 'A platform offering repossessed motorcycles at affordable prices with flexible financing options.',
    previewPhoto: RopaMarketPreview,
    href: 'https://www.behance.net/gallery/213690051/Automotive',
  },
  {
    projectName: 'Agripay',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design'],
    description: 'A digital payment platform providing innovative financial solutions for seamless transactions.',
    previewPhoto: AgripayPreview,
    href: 'https://www.behance.net/gallery/213693381/Social-Media-Post-Digital-Payment-Service',
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
