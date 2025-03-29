import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/svg/Arrow';
import { roboto, robotoFlex, outfit } from '@/app/font';
import { Vortex } from '@/components/ui/vortex';

export default function MyWorks() {
  return (
    <section id='my_work' className='relative text-primary-foreground'>
      <Vortex
        backgroundColor='black'
        containerClassName='pb-[178px] pt-44'
        rangeY={700}
        baseHue={198}
        rangeSpeed={0.5}
        rangeRadius={1.2}
      >
        <header>
          <h3 className={`${roboto.className} mx-auto w-[1055px] text-center text-4xl font-medium`}>
            I help businesses cut through the noise with strategic marketing, engaging content, and proven growth
            strategies.
          </h3>
        </header>
        <article className='mt-[50px] flex justify-center gap-8'>
          <div className='flex w-[415px] flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.22)] backdrop-blur-[1.5px]'>
            <div className='px-[22px] pt-[27px]'>
              <h4 className={`${outfit.className} uppercase text-[#bfbbbb]`}>Social Media Management</h4>
              <p className={`${roboto.className} mt-5 text-[22px] leading-6`}>
                I turn social media into a powerful tool for brand growth with compelling content and smart strategies.
              </p>
              <Link href='/works' className={`${robotoFlex.className} mt-5 block text-lg`}>
                How I help
                <span className='ml-2'>
                  <Arrow className='inline w-5' />
                </span>
              </Link>
            </div>
            <div className='flex w-full justify-end'>
              <Image
                src='/phone_pc.png'
                alt='Phone and pc preview'
                width={513}
                height={388}
                className='w-10/12 object-contain'
              />
            </div>
          </div>
          <div className='flex w-[415px] flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.25)] backdrop-blur-[1.5px]'>
            <div className='px-[22px] pt-[27px]'>
              <h4 className={`${outfit.className} uppercase text-[#bfbbbb]`}>Graphic Design/Video Edit</h4>
              <p className={`${roboto.className} mt-5 text-[22px] leading-6`}>
                I create visually compelling designs and high-quality video edits that bring ideas to life.
              </p>
              <a
                href='https://www.behance.net/alyssajoysulit'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my works'
                className={`${robotoFlex.className} mt-5 block text-lg`}
              >
                See my work
                <span className='ml-2'>
                  <Arrow className='inline w-5' />
                </span>
              </a>
            </div>
            <div className='flex w-full justify-end'>
              <Image
                src='/laptop.png'
                alt='Laptop preview'
                width={484}
                height={358}
                className='w-10/12 object-contain'
              />
            </div>
          </div>
        </article>
      </Vortex>
    </section>
  );
}
