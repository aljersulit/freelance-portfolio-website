import Image from 'next/image';
import Link from 'next/link';

import Marquee from "react-fast-marquee";

import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section id='home' className='relative h-dvh'>
      <div className='flex h-full justify-center pt-24'>
        <div className='pt-20'>
            <Image
              src='/hero_profile.png'
              alt='My profile photo'
              width={463}
              height={648}
              className='relative z-10 h-full w-full rounded-sm object-cover'
            />
        </div>

        <header className='flex w-[762px] flex-col justify-center'>
          <h2 className='font-playfairDisplay mb-2 text-3xl'>Hi, I&apos;m Aljoy!</h2>
          <h1 className='font-roboto mb-9 text-balance text-6xl'>
            Your Brand&apos;s Growth Partner in Digital Marketing & Creative Design
          </h1>
          <p className='font-workSans mb-11 pr-20 text-xl text-muted-foreground'>
            Elevating your brand with strategic marketing and stunning visuals.
          </p>
          <Link
            href='/#services'
            className='font-workSans block w-max rounded-xl bg-primary px-8 py-2 text-2xl text-primary-foreground'
          >
            Learn More
          </Link>
        </header>
      </div>
      <div className='absolute bottom-0'>
        <Marquee>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </section>
  );
}