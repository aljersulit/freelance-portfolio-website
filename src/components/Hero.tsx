import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { playfairDisplay } from '@/app/font';
import IKImage from '@/components/IKImage';
import HeroProfile from '@/assets/hero_profile.png';
import HeroHeader from '@/components/HeroHeader';

export default function Hero() {
  return (
    <section id='home' className='relative flex h-lvh'>
      <div className='@container relative flex w-full flex-col-reverse items-center justify-between gap-3 px-[21px] pt-[70px] sm:pt-[90px] md:px-[28px] lg:mt-[75px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-0 lg:px-0 lg:pt-0 xl:mt-[96px] 2xl:mt-[125px]'>
        <div className='max-h-max min-h-[50px] flex-1 pb-[24px] md:max-h-[750px] lg:h-full lg:max-h-none lg:w-auto lg:flex-initial lg:pb-[45px] lg:pt-20 xl:pb-[60px]'>
          <Image
            src={HeroProfile}
            alt='My profile photo'
            priority
            className='relative z-10 h-full w-full rounded-sm object-contain md:-translate-x-3 md:object-cover lg:translate-x-0'
          />
        </div>
        <HeroHeader />
        <YellowGradient />
        <PurpleGradient />
        <OverlayBackgroundText />
        <HeroOverlayBackgroundImg />
      </div>
      <MarqueeSlidingLink />
    </section>
  );
}

function MarqueeSlidingLink() {
  const SERVICES = [
    { linkText: 'Content Creation', href: '#' },
    { linkText: 'Graphic Design', href: '#' },
    { linkText: 'Video Editing', href: '#' },
    { linkText: 'Social Media Management', href: '#' },
  ];

  return (
    <div className='absolute bottom-0 left-0 right-0 flex items-center bg-foreground text-accent-foreground lg:h-[45px] lg:text-base xl:h-[60px] xl:text-2xl'>
      <Marquee autoFill={true} className='overflow-y-hidden'>
        {SERVICES.map((service, i) => (
          <span key={i} className='flex items-center'>
            <Link
              className='uppercase transition-colors duration-300 ease-in-out hover:text-[#9696f6]'
              href={service.href}
            >
              {service.linkText}
            </Link>
            <span className='mx-8 lg:text-3xl xl:text-5xl'>•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function OverlayBackgroundText() {
  return (
    <div
      aria-hidden='true'
      className={`${playfairDisplay.className} absolute mb-[33cqh] w-full -rotate-3 overflow-hidden text-nowrap text-[2.5rem] text-secondary-foreground opacity-30 sm:text-6xl md:text-7xl lg:hidden`}
    >
      Aljoy Digital Aljoy Digital
    </div>
  );
}

function PurpleGradient() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute bottom-0 right-0 h-full w-full lg:w-1/3 xl:w-1/2 2xl:w-3/4'
    >
      <IKImage
        alt=''
        src='/purple_gradient.webp'
        width={488}
        height={658}
        role='presentation'
        className='absolute bottom-0 right-0 object-contain'
        priority
      />
    </div>
  );
}

function YellowGradient() {
  return (
    <div aria-hidden='true' className='pointer-events-none absolute left-0 top-0 h-full w-full lg:w-3/4 2xl:w-5/6'>
      <IKImage
        alt=''
        src='/yellow_gradient_mobile.png'
        width={480}
        height={534}
        role='presentation'
        className='object-contain lg:hidden'
        priority
      />

      <IKImage
        alt=''
        src='/yellow_gradient.png'
        width={982}
        height={346}
        role='presentation'
        className='hidden object-contain lg:block'
        priority
      />
    </div>
  );
}

function HeroOverlayBackgroundImg() {
  return (
    <div className='pointer-events-none absolute bottom-[24px] right-0 h-2/3 w-3/4 bg-cover bg-no-repeat opacity-20 sm:h-3/4 sm:w-4/6 lg:bottom-[45px] lg:left-0 lg:h-5/6 lg:w-auto lg:bg-contain lg:bg-left-bottom lg:opacity-15 xl:bottom-[60px]'>
      <IKImage
        alt=''
        src='/hero_background_profile_flipped.png'
        width={456}
        height={666}
        role='presentation'
        className='absolute bottom-0 right-0 h-full w-auto object-cover object-right-bottom lg:hidden'
        priority
      />

      <IKImage
        alt=''
        src='/hero_background_profile.png'
        width={471}
        height={727}
        role='presentation'
        className='absolute bottom-0 left-0 hidden h-full w-auto object-contain object-left-bottom lg:block'
        priority
      />
    </div>
  );
}