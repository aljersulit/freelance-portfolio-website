import React from 'react';
import Image from 'next/image';
import Linkedin from './svg/Linkedin';
import Mail from './svg/Mail';
import Instagram from './svg/Instagram';
import Facebook from './svg/Facebook';

import { cn } from '@/lib/utils';

type Logo = typeof Linkedin | typeof Mail | typeof Instagram | typeof Facebook;

type Socials = {
  Logo: Logo;
  textContent: string;
  link: string;
};

const SOCIALS: Socials[] = [
  {
    Logo: Mail,
    textContent: 'aljoysulit@gmail.com',
    link: 'mailto:aljoysulit@gmail.com',
  },
  {
    Logo: Linkedin,
    textContent: 'Aljoy Alfaro Sulit',
    link: 'https://www.linkedin.com/in/aljoysulit',
  },
  {
    Logo: Instagram,
    textContent: '@aljoyalfs',
    link: 'https://www.instagram.com/aljoyalfs',
  },
  {
    Logo: Facebook,
    textContent: 'Aljoy Alfaro Sulit',
    link: 'https://www.facebook.com/aljoyalfarosulit',
  },
];

export default function Footer() {
  return (
    <footer className='h-[350px] bg-primary px-28 pt-10 text-background'>
      <Image
        src='/footer_logo.png'
        alt='Aljoydigital footer logo'
        width={374}
        height={110}
        className='mb-10 w-[255px]'
      />
      <div className='space-y-2'>
        {SOCIALS.map((social, i) => {
          return <FooterLink key={social.textContent + i} {...social} />;
        })}
      </div>
    </footer>
  );
}

type FooterLinkProps = Socials & {
  className?: string;
};

function FooterLink({ Logo, link, textContent, className }: FooterLinkProps) {
  return (
    <div className={cn('flex gap-3', className)}>
      <Logo className='w-7' />
      <a href={link}>{textContent}</a>
    </div>
  );
}
