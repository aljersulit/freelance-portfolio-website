import Image from 'next/image';
import Link from 'next/link';

import Marquee from 'react-fast-marquee';

import { playfairDisplay, roboto } from '@/app/font';

export default function Hero() {
  return (
    <section id='home' className='relative flex h-dvh'>
      <div
        style={{ backgroundPosition: 'left top, bottom right' }}
        className='relative flex w-full flex-col-reverse items-center justify-between gap-3 bg-[url(/yellow_gradient_mobile.png),url(/purple_gradient.png)] bg-no-repeat px-[21px] pt-[70px] lg:mt-[75px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-0 lg:bg-[url(/yellow_gradient.png),url(/purple_gradient.png)] lg:px-0 lg:pt-0 xl:mt-[96px]'
      >
        <div className='max-h-[550px] min-h-[200px] flex-1 pb-[24px] lg:h-full lg:max-h-none lg:w-auto lg:flex-initial lg:pb-[45px] lg:pt-20 xl:pb-[60px]'>
          <Image
            src='/hero_profile.png'
            alt='My profile photo'
            priority
            width={463}
            height={648}
            className='relative z-10 h-full w-full -translate-x-3 rounded-sm object-cover lg:translate-x-0'
          />
        </div>

        <header className='flex flex-col justify-center lg:w-[500px] xl:w-[762px]'>
          <h2 className={`${playfairDisplay.className} playfairDisplay mb-2 hidden text-3xl lg:block`}>
            Hi, I&apos;m Aljoy!
          </h2>
          <h1
            className={`${roboto.className} mb-[15px] text-[1.7rem] font-bold leading-[1.1] min-[375px]:text-3xl min-[425px]:text-4xl lg:mb-[36px] lg:text-balance lg:text-6xl lg:font-semibold`}
          >
            Your Brand&apos;s Growth Partner in Digital Marketing & Creative Design
          </h1>
          <p className='mb-[15px] text-[0.625rem] text-muted-foreground min-[375px]:text-sm lg:mb-[44px] lg:text-xl'>
            Elevating your brand with strategic marketing and stunning visuals.
          </p>
          <Link
            href='/#services'
            className='block w-max cursor-dot rounded-sm bg-primary px-7 py-[0.4rem] text-xs font-medium text-primary-foreground transition-colors hover:bg-accent min-[375px]:text-sm lg:rounded-xl lg:px-8 lg:py-2 lg:text-2xl lg:font-normal'
          >
            Learn More
          </Link>
        </header>
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
    <div className='absolute bottom-[24px] right-0 h-2/3 w-3/4 bg-[url(/hero_background_profile_flipped.png)] bg-cover bg-no-repeat opacity-20 lg:bottom-[45px] lg:left-0 lg:top-0 lg:h-auto lg:w-[471px] lg:bg-[url(/hero_background_profile.png)] lg:bg-contain lg:bg-left-bottom lg:opacity-15 xl:bottom-[60px]' />
  );
}

function OverlayBackgroundText() {
  return (
    <div
      aria-hidden='true'
      className={`${playfairDisplay.className} absolute bottom-[142px] w-full overflow-y-hidden text-nowrap text-[2.5rem] text-secondary-foreground opacity-30 lg:hidden`}
    >
      Aljoy Digital Aljoy Digital
    </div>
  );
}