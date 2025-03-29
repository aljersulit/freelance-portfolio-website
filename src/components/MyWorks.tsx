import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/svg/Arrow';
import { roboto, robotoFlex, outfit } from '@/app/font';

export default function MyWorks() {
  return (
    <section id='my_work' className='bg-[url(/galaxy.png)] bg-cover bg-no-repeat pt-44 pb-[178px] text-primary-foreground'>
      <header>
        <h3 className={`${roboto.className} mx-auto w-[1055px] text-center text-4xl font-medium`}>
          I help businesses cut through the noise with strategic marketing, engaging content, and proven growth
          strategies.
        </h3>
      </header>
      <article className='mt-[50px] flex justify-center gap-8'>
        <div className='flex flex-col justify-between gap-4 w-[415px] bg-[rgba(255,255,255,0.22)] backdrop-blur-[1.5px] border border-solid border-[rgba(255,255,255,0.2)] rounded-3xl'>
          <div className='pt-[27px] px-[22px]'>
            <h4 className={`${outfit.className} uppercase text-[#bfbbbb]`}>Social Media Management</h4>
            <p className={`${roboto.className} text-[22px] leading-6 mt-5`}>
              I turn social media into a powerful tool for brand growth with compelling content and smart strategies.
            </p>
            <Link href='/works' className={`${robotoFlex.className} text-lg mt-5 block`}>
              How I help
              <span className='ml-2'>
                <Arrow className='w-5 inline' />
              </span>
            </Link>
          </div>
          <div className='w-full flex justify-end'>
            <Image src='/phone_pc.png' alt='Phone and pc preview' width={513} height={388} className='object-contain w-10/12' />
          </div>
        </div>
        <div className='flex flex-col justify-between gap-4 w-[415px] bg-[rgba(255,255,255,0.25)] backdrop-blur-[1.5px] border border-solid border-[rgba(255,255,255,0.2)] rounded-3xl'>
          <div className='pt-[27px] px-[22px]'>
            <h4 className={`${outfit.className} uppercase text-[#bfbbbb]`}>Graphic Design/Video Edit</h4>
            <p className={`${roboto.className} text-[22px] leading-6 mt-5`}>
              I create visually compelling designs and high-quality video edits that bring ideas to life.
            </p>
            <a
              href='https://www.behance.net/alyssajoysulit'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit my works'
              className={`${robotoFlex.className} text-lg mt-5 block`}
            >
              See my work
              <span className='ml-2'>
                <Arrow className='w-5 inline' />
              </span>
            </a>
          </div>
          <div className='w-full flex justify-end'>
            <Image src='/laptop.png' alt='Laptop preview' width={484} height={358} className='object-contain w-10/12' />
          </div>
        </div>
      </article>
    </section>
  );
}
