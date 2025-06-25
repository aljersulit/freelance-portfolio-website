import React from 'react';
import Image from 'next/image';
import { roboto, playfairDisplay } from '@/app/(frontend)/font';
import { Work } from '@/payload-types';
import RevealingText from '@/components/ui/revealing-text';
import SkillsList from '@/components/SkillsList';
import ExpandingContainer from '@/components/ExpandingContainer';

import { getPayload } from 'payload';
import config from '@/payload.config';

export default async function Works() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  let WORKS: Work[] = [];
  try {
    const fetchedWorks = await payload.find({
      collection: 'works',
      depth: 1,
      limit: 5,
    });

    WORKS = fetchedWorks.docs;
  } catch (error) {
    console.error('Failed to fetch works:', error);
  }

  return (
    <section id='works' className='px-[20px] py-[26px] md:px-[35px] md:py-[50px] lg:px-[80px] lg:py-[96px]'>
      <header className='lg:mb-6'>
        <h2
          className={`${roboto.className} text-lg uppercase text-secondary-foreground md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:font-medium 3xl:text-8xl min-[2160px]:text-8xl`}
        >
          <RevealingText text='Featured' /> <RevealingText text='Works' />
        </h2>
      </header>
      {WORKS.map((work, i) => (
        <article
          key={i}
          className='flex justify-center gap-[50px] border-t border-t-stone-300 py-[29px] md:py-[60px] lg:border-t-2 lg:py-[80px] 2xl:gap-[70px] min-[1900px]:gap-[82px]'
        >
          <div className='w-full space-y-4 md:space-y-5 lg:flex-1 xl:space-y-6 2xl:space-y-7 min-[1900px]:space-y-12'>
            <ExpandingContainer className='w-full overflow-hidden rounded-sm md:rounded-md lg:hidden'>
              {work.photo && typeof work.photo !== 'number' && (
                <Image
                  src={work.photo.url || ''}
                  alt={`${work.projectName} sample preview`}
                  width={work.photo.width || 2520}
                  height={work.photo.height || 1802}
                  // placeholder='blur'
                />
              )}
            </ExpandingContainer>
            <h3
              className={`${playfairDisplay.className} text-sm uppercase md:text-3xl lg:text-[2.1875rem] 2xl:text-5xl min-[2160px]:text-6xl`}
            >
              {work.projectName}
            </h3>
            <SkillsList skills={work.skillsUsed} />
            <p className='w-full text-wrap text-sm/tight text-muted-foreground md:text-xl md:leading-snug lg:text-pretty lg:text-base/snug xl:text-2xl 2xl:text-3xl min-[2000px]:text-4xl'>
              {work.description}
            </p>
            <a
              href={work.href}
              className='block w-max cursor-dot rounded-md bg-primary px-8 py-[6px] text-xs text-primary-foreground transition-colors hover:bg-accent md:px-[55px] md:py-2 md:text-2xl lg:px-[35px] lg:py-1 lg:text-lg xl:rounded-md xl:px-[42px] xl:py-2 xl:text-2xl min-[1900px]:rounded-lg min-[1900px]:px-[65px] min-[1900px]:py-4 min-[1900px]:text-3xl'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit the ${work.href}`}
            >
              View More
            </a>
          </div>
          <ExpandingContainer className='hidden w-[630px] overflow-hidden lg:flex lg:flex-1 lg:justify-center lg:rounded-md 3xl:rounded-lg'>
            {work.photo && typeof work.photo !== 'number' && (
              <Image
                src={work.photo.url || ''}
                alt={`${work.projectName} sample preview`}
                width={work.photo.width || 2520}
                height={work.photo.height || 1802}
                className='object-cover transition-transform hover:rotate-3 hover:scale-105'
                // placeholder='blur'
              />
            )}
          </ExpandingContainer>
        </article>
      ))}
    </section>
  );
}
