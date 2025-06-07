import React from 'react';
import Image from 'next/image';
import { robotoCondensed, roboto } from '@/app/font';
import CaseStudyImg from '@/assets/case_study.png';
import StaggeredList from '@/components/results/StaggeredList';
import ExpandingImage from '@/components/ExpandingImage';

const GOALS = [
  'Develop tailored content for multiple platforms while maintaining a cohesive brand identity.',
  'Drive audience engagement and increase inquiries through strategic content creation.',
  'Strengthen brand awareness by showcasing financial spanroducts, services, and company milestones.',
];

const STRATEGIES = [
  'Developed and maintained a structured content calendar, delivering three pieces of content per week, including infographics, promotional videos, and educational posts.',
  'Balanced promotional content with engaging visuals, customer testimonials, and informative content featuring clear calls to action (CTAs).',
  'Collaborated closely with my supervisor to craft impactful captions that matched the tone of each post.',
  'Worked with internal teams to align content with ongoing promotions, internal events, and product updates.',
];

export default function CaseStudy() {
  return (
    <section
      className={`${roboto.className} justify-center px-[18px] pb-[30px] pt-[10px] min-[375px]:px-[22px] min-[375px]:pt-[20px] min-[425px]:px-[32px] sm:py-[45px] md:px-[42px] lg:flex lg:gap-[50px] lg:px-[20px] xl:gap-[96px] xl:pb-[120px] 2xl:pb-[140px] 3xl:pt-[140px]`}
    >
      <div className='lg:w-[470px] xl:w-[668px] 3xl:w-[894px]'>
        <ExpandingImage
          src={CaseStudyImg}
          alt='A collection of social media advertisements for Agribank.'
          className='h-auto overflow-hidden xl:w-full'
          hasHoverAnimation={false}
        />
        <p className='mt-[8px] text-pretty text-xs min-[425px]:text-sm sm:text-xl lg:mt-[12px] lg:text-sm 3xl:mt-[18px] 3xl:text-lg/tight'>
          Agribank is a financial institution offering a wide range of banking and financial services. As the Social
          Media Manager & Graphic Artist, I managed Agribank&apos;s social media presence across multiple platforms,
          combining strategic content creation, graphic design, and video production to enhance engagement and promote
          financial services.
        </p>
      </div>

      <div className='mt-[26px] text-xs min-[425px]:text-sm sm:mt-[36px] sm:text-lg lg:mt-0 lg:w-[390px] lg:text-xs xl:w-[474px] xl:text-sm 3xl:w-[644px] 3xl:text-xl'>
        <div>
          <h2
            className={`${robotoCondensed.className} text-xl uppercase min-[425px]:text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 3xl:text-4xl`}
          >
            Goals
          </h2>
          <StaggeredList
            icon='arrowright'
            className='relative pl-[28px] min-[425px]:pl-[34px] sm:pl-[44px] xl:pl-[48px]'
            containerClassName='mt-[10px] space-y-3 sm:mt-[20px] md:mt-[16px] xl:mt-[22px]'
            iconClassName='absolute left-0 w-[20px] text-primary sm:w-[26px] xl:w-[32px]'
            list={GOALS}
          />
        </div>
        <div className='mt-[20px] md:mt-[40px]'>
          <h2
            className={`${robotoCondensed.className} xl:text- text-xl uppercase min-[425px]:text-2xl sm:text-4xl lg:text-2xl 3xl:text-4xl`}
          >
            Strategy
          </h2>
          <StaggeredList
            icon='checkmark'
            className='relative pl-[28px] min-[425px]:pl-[34px] sm:pl-[44px] xl:pl-[48px]'
            containerClassName='mt-[10px] space-y-3 sm:mt-[20px] md:mt-[16px] xl:mt-[22px]'
            iconClassName='absolute left-0 w-[20px] sm:w-[26px] xl:w-[32px]'
            list={STRATEGIES}
          />
        </div>
      </div>
    </section>
  );
}
