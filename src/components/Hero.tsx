import Image from 'next/image';
import Link from 'next/link';

import Marquee from 'react-fast-marquee';

export default function Hero() {
  return (
    <section id='home' className='relative flex h-dvh'>
      <div className='mt-24 flex w-full justify-center bg-[url(/yellow_gradient.png),url(/purple_gradient.png)] bg-[position:var(--hero-gradient-positions)] bg-no-repeat'>
        <div className='pb-[3.7rem] pt-20'>
          <Image
            src='/hero_profile.png'
            alt='My profile photo'
            priority
            width={463}
            height={648}
            className='relative z-10 h-full w-full rounded-sm object-cover'
          />
        </div>

        <header className='flex w-[762px] flex-col justify-center'>
          <h2 className='mb-2 font-playfairDisplay text-3xl'>Hi, I&apos;m Aljoy!</h2>
          <h1 className='mb-9 text-balance font-roboto text-6xl'>
            Your Brand&apos;s Growth Partner in Digital Marketing & Creative Design
          </h1>
          <p className='mb-11 pr-20 font-workSans text-xl text-muted-foreground'>
            Elevating your brand with strategic marketing and stunning visuals.
          </p>
          <Link
            href='/#services'
            className='block w-max rounded-xl bg-primary px-8 py-2 font-workSans text-2xl text-primary-foreground'
          >
            Learn More
          </Link>
        </header>
      </div>
      <OverlayBackgroundImg />
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
    <div className='absolute bottom-0 left-0 right-0 flex h-[3.7rem] items-center bg-foreground text-2xl text-accent-foreground'>
      <Marquee autoFill={true} className='overflow-y-hidden'>
        {SERVICES.map((service, i) => (
          <span key={i} className='flex items-center'>
            <Link
              className='uppercase transition-colors duration-300 ease-in-out hover:text-[#9696f6]'
              href={service.href}
            >
              {service.linkText}
            </Link>
            <span className='mx-8 text-5xl'>•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function OverlayBackgroundImg() {
  return (
    <div className='absolute inset-y-0 left-0 flex items-end pb-[3.7rem] opacity-15'>
      <Image
        src='/hero_background_profile.png'
        alt='My sideview photo'
        priority
        width={471}
        height={727}
        className='object-cover'
      />
    </div>
  );
}