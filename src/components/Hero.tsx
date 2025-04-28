import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { playfairDisplay, roboto } from '@/app/font';
import HeroProfile from '@/assets/hero_profile.png';

export default function Hero() {
  return (
    <section id='home' className='relative flex h-lvh'>
      <div className='@container relative flex w-full flex-col-reverse items-center justify-between gap-3 px-[21px] pt-[70px] md:px-[28px] md:pt-[90px] lg:mt-[75px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-0 lg:px-0 lg:pt-0 xl:mt-[96px] 2xl:mt-[125px]'>
        <div className='max-h-max min-h-[50px] flex-1 pb-[24px] md:max-h-[750px] lg:h-full lg:max-h-none lg:w-auto lg:flex-initial lg:pb-[45px] lg:pt-20 xl:pb-[60px]'>
          <Image
            src={HeroProfile}
            alt='My profile photo'
            placeholder='blur'
            priority
            className='relative z-10 h-full w-full rounded-sm object-contain md:-translate-x-3 md:object-cover lg:translate-x-0'
          />
        </div>

        <header className='flex flex-col justify-center lg:w-[500px] xl:w-[762px] 2xl:w-[1200px]'>
          <h2
            className={`${playfairDisplay.className} playfairDisplay mb-2 hidden text-3xl lg:block 2xl:mb-6 2xl:text-6xl`}
          >
            Hi, I&apos;m Aljoy!
          </h2>
          <h1
            className={`${roboto.className} mb-4 text-[1.7rem] font-bold leading-[1.1] min-[375px]:text-3xl min-[425px]:text-4xl md:mb-6 md:text-5xl lg:mb-8 lg:text-balance lg:text-6xl lg:font-semibold 2xl:mb-9 2xl:text-8xl`}
          >
            Your Brand&apos;s Growth Partner in Digital Marketing & Creative Design
          </h1>
          <p className='mb-4 text-[0.625rem] text-muted-foreground min-[375px]:text-sm md:mb-6 md:text-xl lg:mb-11 lg:text-xl 2xl:mb-8 2xl:text-4xl'>
            Elevating your brand with strategic marketing and stunning visuals.
          </p>
          <Link
            href='/#services'
            className='block w-max cursor-dot rounded-sm bg-primary px-7 py-[0.4rem] text-xs font-medium text-primary-foreground transition-colors hover:bg-accent min-[375px]:text-sm md:rounded-lg md:text-lg lg:rounded-xl lg:px-8 lg:py-2 lg:text-2xl lg:font-normal 2xl:rounded-2xl 2xl:px-16 2xl:py-4 2xl:text-4xl'
          >
            Learn More
          </Link>
        </header>
        <YellowGradient />
        <PurpleGradient />
        <OverlayBackgroundText />
        <OverlayBackgroundImg />
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

function OverlayBackgroundImg() {
  return (
    <div className='pointer-events-none absolute bottom-[24px] right-0 h-2/3 w-3/4 bg-[url(/hero_background_profile_flipped.png)] bg-cover bg-no-repeat opacity-20 sm:h-3/4 sm:w-4/6 lg:bottom-[45px] lg:left-0 lg:h-5/6 lg:w-auto lg:bg-[url(/hero_background_profile.png)] lg:bg-contain lg:bg-left-bottom lg:opacity-15 xl:bottom-[60px]' />
  );
}

function OverlayBackgroundText() {
  return (
    <div
      aria-hidden='true'
      className={`${playfairDisplay.className} absolute mb-[33cqh] w-full -rotate-3 overflow-hidden text-nowrap text-[2.5rem] text-secondary-foreground opacity-30 md:text-7xl lg:hidden`}
    >
      Aljoy Digital Aljoy Digital
    </div>
  );
}

function YellowGradient() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute left-0 top-0 h-full w-full bg-[url(/yellow_gradient_mobile.png)] bg-contain bg-no-repeat lg:w-3/4 lg:bg-[url(/yellow_gradient.png)] 2xl:w-5/6'
    />
  );
}

function PurpleGradient() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute bottom-0 right-0 h-full w-full bg-[url(/purple_gradient.png)] bg-contain bg-right-bottom bg-no-repeat lg:w-1/3 xl:w-1/2 2xl:w-3/4'
    />
  );
}
