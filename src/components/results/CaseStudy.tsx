import React from 'react';
import Image from 'next/image';
import { robotoCondensed, roboto } from '@/app/font';
import CaseStudyImg from '@/assets/case_study.png';
import ListArrowRight from '@/components/svg/ListArrowRight';
import ListCheckmark from '@/components/svg/ListCheckmark';

export default function CaseStudy() {
  return (
    <section className={`${roboto.className} justify-center lg:flex xl:gap-[96px] xl:py-[120px]`}>
      <div className='xl:w-[668px]'>
        <Image
          src={CaseStudyImg}
          alt='A collection of social media advertisements for Agribank.'
          className='h-auto xl:w-full'
        />
        <p className='mt-[8px] text-sm'>
          Agribank is a financial institution offering a wide range of banking and financial services. As the Social
          Media Manager & Graphic Artist, I managed Agribank&apos;s social media presence across multiple platforms,
          combining strategic content creation, graphic design, and video production to enhance engagement and promote
          financial services.
        </p>
      </div>
      <div className='text-sm xl:w-[474px]'>
        <div>
          <h2 className={`${robotoCondensed.className} uppercase xl:text-2xl`}>Goals</h2>
          <ul className='space-y-3 xl:mt-[22px]'>
            <li className='xl:pl-[48px] relative '>
              <ListArrowRight className='absolute left-0 w-[32px] text-primary' />
              <span>Develop tailored content for multiple platforms while maintaining a cohesive brand identity.</span>
            </li>
            <li className='xl:pl-[48px] relative '>
              <ListArrowRight className='absolute left-0 w-[32px] text-primary' />
              <span>Drive audience engagement and increase inquiries through strategic content creation.</span>
            </li>
            <li className='xl:pl-[48px] relative '>
              <ListArrowRight className='absolute left-0 w-[32px] text-primary' />
              <span>
                Strengthen brand awareness by showcasing financial spanroducts, services, and company milestones.
              </span>
            </li>
          </ul>
        </div>
        <div className='xl:mt-[40px]'>
          <h2 className={`${robotoCondensed.className} uppercase xl:text-2xl`}>Strategy</h2>
          <ul className='space-y-3 xl:mt-[22px]'>
            <li className='xl:pl-[48px] relative'>
              <ListCheckmark className='absolute left-0 w-[32px]' />
              <span>
                Developed and maintained a structured content calendar, delivering three pieces of content per week,
                including infographics, promotional videos, and educational posts.
              </span>
            </li>
            <li className='xl:pl-[48px] relative'>
            <ListCheckmark className='absolute left-0 w-[32px]' />
              <span>
                Balanced promotional content with engaging visuals, customer testimonials, and informative content
                featuring clear calls to action (CTAs).
              </span>
            </li>
            <li className='xl:pl-[48px] relative'>
            <ListCheckmark className='absolute left-0 w-[32px]' />
              <span>
                Collaborated closely with my supervisor to craft impactful captions that matched the tone of each post.
              </span>
            </li>
            <li className='xl:pl-[48px] relative'>
            <ListCheckmark className='absolute left-0 w-[32px]' />
              <span>
                Worked with internal teams to align content with ongoing promotions, internal events, and product
                updates.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
