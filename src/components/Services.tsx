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

export default function Services() {
  return (
    <section className='rounded-[3.3rem] bg-secondary px-20 py-24'>
      <header className='mb-6'>
        <h2 className={`${roboto.className} text-6xl uppercase text-secondary-foreground`}>Featured Works</h2>
      </header>
      {WORKS.map((work, i) => (
        <article key={i} className='flex border-t-2 border-t-stone-300 py-20'>
          <div className='flex-1'>
            <h3 className={`${playfairDisplay.className} mb-3 mt-10 text-[38px] uppercase`}>{work.projectName}</h3>
            <ul className='flex gap-[6px]'>
              {work.utilizedSkills.map((skill, i) => (
                <li
                  key={skill + i}
                  className={`${roboto.className} rounded-full bg-list px-[14px] py-[9px] text-xs text-primary-foreground`}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <p className='mt-9 w-[542px] text-wrap text-lg text-muted-foreground'>{work.description}</p>
            <a
              href={work.href}
              className='mt-9 block w-max rounded-xl bg-primary px-8 py-2 text-2xl text-primary-foreground'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit the ${work.href}`}
            >
              View More
            </a>
          </div>
          <div className='flex-1'>
            <Image src={work.previewPhoto} alt={`${work.projectName} sample preview`} placeholder='blur' />
          </div>
        </article>
      ))}
    </section>
  );
}
