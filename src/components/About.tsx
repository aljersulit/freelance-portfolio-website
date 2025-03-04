import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id='#about' className='bg-secondary py-20'>
      <div className='w-3/4 mx-auto space-y-10'>
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
      <div className='w-[452px] h-[670px] mx-auto mt-14 relative'>
        <div className='w-[378px] h-[481px] bg-primary ml-auto'/>
        <div className='absolute bottom-0'>
          <Image src='/about_photo.jpg' alt='My sideview photo' width={600} height={800} className='w-[378px] h-[440px] object-cover' />
          <Link href="#" className='px-8 py-2 mt-8 mx-auto border-4 text-xl font-semibold block w-max'>Read more about me</Link>
        </div>
      </div>
    </section>
  );
}
