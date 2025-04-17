import React from 'react';
import Image from 'next/image';
import AgribankPhPreview from '../../public/AgribankPH_Preview.png';
import RopaMarketPreview from '../../public/Ropa_Market_Preview.png';
import AgripayPreview from '../../public/Agripay_Preview.png';
import { roboto, playfairDisplay } from '@/app/font';

const WORKS = [
  {
    projectName: 'Agribank Ph',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design', 'Video Editing'],
    description:
      'A financial institution dedicated to empowering Filipino farmers, entrepreneurs, and individuals through accessible banking solutions.',
    previewPhoto: AgribankPhPreview,
    href: 'https://www.behance.net/gallery/213195203/Banking-and-Finance',
  },
  {
    projectName: 'Ropa Market',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design', 'Video Editing'],
    description: 'A platform offering repossessed motorcycles at affordable prices with flexible financing options.',
    previewPhoto: RopaMarketPreview,
    href: 'https://www.behance.net/gallery/213690051/Automotive',
  },
  {
    projectName: 'Agripay',
    utilizedSkills: ['Social Media Management', 'Content Creation', 'Graphic Design'],
    description: 'A digital payment platform providing innovative financial solutions for seamless transactions.',
    previewPhoto: AgripayPreview,
    href: 'https://www.behance.net/gallery/213693381/Social-Media-Post-Digital-Payment-Service',
  },
];

export default function Works() {
  return (
    <section id='works' className='px-[20px] py-[26px] md:px-[35px] md:py-[50px] lg:px-[80px] lg:py-[96px]'>
      <header className='lg:mb-6'>
        <h2 className={`${roboto.className} text-lg uppercase text-secondary-foreground md:text-4xl lg:text-6xl`}>
          Featured Works
        </h2>
      </header>
      {WORKS.map((work, i) => (
        <article
          key={i}
          className='flex justify-center gap-[70px] border-t border-t-stone-300 py-[29px] md:py-[60px] lg:border-t-2 lg:py-[80px]'
        >
          <div className='w-full lg:flex-1'>
            <div className='w-full lg:hidden'>
              <Image src={work.previewPhoto} alt={`${work.projectName} sample preview`} placeholder='blur' />
            </div>
            <h3
              className={`${playfairDisplay.className} my-[15px] text-sm uppercase md:my-[25px] md:text-3xl lg:mt-[40px] lg:text-[2.1875rem]`}
            >
              {work.projectName}
            </h3>
            <ul className='flex flex-wrap gap-[6px]'>
              {work.utilizedSkills.map((skill, i) => (
                <li
                  key={skill + i}
                  className={`${roboto.className} rounded-full bg-list px-[11px] py-[7px] text-[0.6rem] text-primary-foreground md:text-base lg:px-[14px] lg:py-[9px] lg:text-xs`}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <p className='mt-[15px] w-full text-wrap text-sm/tight text-muted-foreground md:mt-[25px] md:text-xl md:leading-snug lg:mt-[40px] lg:text-pretty lg:text-lg'>
              {work.description}
            </p>
            <a
              href={work.href}
              className='mt-[15px] block w-max cursor-dot rounded-md bg-primary px-8 py-[6px] text-xs text-primary-foreground transition-colors hover:bg-accent md:mt-[25px] md:px-[55px] md:py-2 md:text-2xl lg:mt-[40px] lg:rounded-xl lg:px-[35px]'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit the ${work.href}`}
            >
              View More
            </a>
          </div>
          <div className='hidden w-[630px] lg:flex lg:flex-1 lg:justify-center'>
            <Image
              src={work.previewPhoto}
              alt={`${work.projectName} sample preview`}
              className='object-cover'
              placeholder='blur'
            />
          </div>
        </article>
      ))}
    </section>
  );
}
