import Image from 'next/image';

import { cn } from '@/lib/utils';

import Navbar from '@/components/Navbar';
import Wavy from '@/components/svg/Wavy';

type TSocialLinks = {
  title: string;
  href: string;
  svg: string;
}

const SOCIAL_LINKS: TSocialLinks[] = [
  {
    title: "Gmail",
    href: "mailto:aljoysulit@gmail.com",
    svg: "/mail-alt-svgrepo-com.svg",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/aljoysulit",
    svg: "/linkedin-161-svgrepo-com.svg",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/aljoyalfarosulit",
    svg: "/facebook-176-svgrepo-com.svg",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/aljoyalfs",
    svg: "/instagram-svgrepo-com.svg",
  }
]

export default function Hero() {
  return (
    <section className='relative'>
      <Navbar />
      <div className='flex justify-center items-center gap-10'>
        <div className='w-[425px]'>
          <Image src='/hero_profile_photo.jpg' alt='My profile photo'width={800} height={800} className='h-full w-full rounded-sm object-cover relative z-10'/>
        </div>
        
        <header className='w-[480px]'>
          <h1 className='uppercase font-notoSerifDisplay text-4xl mb-8'>Stand out. Get noticed. Grow your brand.</h1>
          <p className='pr-20 text-sm'>
            Welcome to Aljoy Digital! Your go-to partner for expert digital marketing and creative content. I help
            brands grow, connect, and thrive with tailored strategies that drive real results. Let&apos;s elevate your
            digital presence!
          </p>
        </header>
      </div>
      <Wavy className='absolute w-full bottom-0 z-0' />
      <SocialLogoLinks socialLinks={SOCIAL_LINKS} className='absolute bottom-2 right-6' />
    </section>
  );
}

type SocialLogoLinksProps = {
  className?: string;
  socialLinks: TSocialLinks[];
}

function SocialLogoLinks({className, socialLinks}: SocialLogoLinksProps) {
  

  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {
        socialLinks.map((social, i) => (
          <li key={social.title + i} className='w-7 h-7 border border-border'>
            <a href={social.href} title={social.title} className='h-full flex justify-center items-center'>
              <Image src={social.svg} alt={`${social.title} logo`} width={25} height={25} className='w-3 h-3' />
            </a>
          </li>
        ))
      }
    </ul>
  )
}