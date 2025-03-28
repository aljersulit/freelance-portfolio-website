import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id='about' data-main className='bg-secondary py-20'>
      <div className='mx-auto w-3/4 space-y-10'>
        <h2 className='font-notoSerifDisplay text-7xl'>Hi, I&apos;m Aljoy!</h2>
        <p className='text-xl'>
          I&apos;m a freelance digital marketer and content designer passionate about helping brands thrive in the
          digital space. With a background in social media management, content creation, and graphic design, I bring a
          creative and strategic approach to online marketing.
        </p>
        <p className='text-xl'>
          Through Aljoy Digital, I provide expert social media management, content creation, and digital marketing
          solutions tailored to elevate brands online. Whether it's crafting engaging content, designing eye-catching
          visuals, or developing data-driven strategies, I&apos;m here to make digital marketing work for you.
        </p>
        <p className='text-xl'>Let&apos;s bring your brand to life and make an impact in the digital world!</p>
      </div>
      <div className='relative mx-auto mt-14 h-[670px] w-[452px]'>
        <div className='ml-auto h-[481px] w-[378px] bg-primary' />
        <div className='absolute bottom-0'>
          <Image
            src='/about_photo.jpg'
            alt='My sideview photo'
            width={600}
            height={800}
            className='h-[440px] w-[378px] object-cover'
          />
          <Link href='#' className='mx-auto mt-8 block w-max border-4 px-8 py-2 text-xl font-semibold'>
            Read more about me
          </Link>
        </div>
      </div>
    </section>
  );
}
