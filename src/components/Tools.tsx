import { robotoFlex } from '@/app/font';
import { WobbleCard } from '@/components/ui/wobble-card';
import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

import { roboto } from '@/app/font';
import GlobalSearch from '@/components/svg/GlobalSearch';
import Audience from '@/components/svg/Audience';
import BusinessStat from '@/components/svg/BusinessStat';

import Meta from '@/components/svg/Meta';
import Buffer from '@/components/svg/Buffer';
import Asana from '@/components/svg/Asana';
import Airtable from '@/components/svg/Airtable';
import Mailchimp from '@/components/svg/Mailchimp';
import Microsoft from '@/components/svg/Microsoft';
import Google from '@/components/svg/Google';
import Capcut from '@/components/svg/Capcut';
import Canva from '@/components/svg/Canva';
import Behance from '@/components/svg/Behance';
import Photoshop from '@/components/svg/Photoshop';
import Illustrator from '@/components/svg/Illustrator';
import Figma from '@/components/svg/Figma';
import Pinterest from '@/components/svg/Pinterest';
import Wix from '@/components/svg/Wix';
import Wordpress from '@/components/svg/Wordpress';
import Notion from '@/components/svg/Notion';
import Loom from '@/components/svg/Loom';
import Slack from '@/components/svg/Slack';
import Shopify from '@/components/svg/Shopify';

const CARDS = [
  {
    Svg: GlobalSearch,
    txt: 'Building a strong digital presence',
    alt: 'Globe icon.',
  },
  {
    Svg: Audience,
    txt: 'Creating content that resonates with your audience',
    alt: 'Audience icon.',
  },
  {
    Svg: BusinessStat,
    txt: 'Implementing strategies that drive real growth',
    alt: 'Business stats icon',
  },
];

const TOOLS = [Meta, Buffer, Asana, Airtable, Mailchimp, Microsoft, Google];
const SOFTWARE = {
  firstList: [Capcut, Canva, Behance, Photoshop, Illustrator, Figma],
  secondList: [Pinterest, Wix, Wordpress, Notion, Loom, Slack, Shopify],
};

export default function Tools() {
  return (
    <section className='bg-muted py-[56px] lg:py-[180px]'>
      <header className='px-[20px] lg:px-0'>
        <h3
          className={`${robotoFlex.className} mx-auto text-sm font-semibold text-secondary-foreground lg:w-[1062px] lg:text-[2.5rem]`}
        >
          By combining storytelling, creativity, and strategy, I help businesses stand out, grow, and connect
          authentically by:
        </h3>
        <ul className='flex flex-wrap justify-center gap-[12px] pt-[26px] leading-[1.2] text-primary-foreground lg:gap-[18px] lg:pt-[69px]'>
          {CARDS.map((card, i) => (
            <li key={card.txt + i}>
              <WobbleCard
                containerClassName='bg-primary h-full rounded-md lg:rounded-2xl'
                className='flex h-[110px] w-[128px] flex-col p-[10px] lg:h-[259px] lg:w-[346px]'
              >
                {<card.Svg className='mx-auto h-6 w-6 lg:h-11 lg:w-11' />}

                <div className='flex flex-1 items-center'>
                  <p className='text-center text-xs lg:text-[1.75rem]'>{card.txt}</p>
                </div>
              </WobbleCard>
            </li>
          ))}
        </ul>
      </header>
      <div aria-roledescription='Tools list container' className='mt-[58px] lg:mt-[180px]'>
        <Marquee>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} px-[12px] text-base uppercase lg:px-[50px] lg:text-7xl`}>Tools</h4>
            <ul className='flex gap-[6px] lg:h-[128px]'>
              {TOOLS.map((Tool, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList lg:h-[128px] lg:w-[302px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Tool className='h-[8px]' />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
      <div aria-roledescription='Software list container' className='mt-[10px]'>
        <Marquee direction='right'>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} px-[12px] text-base uppercase lg:px-[50px] lg:text-7xl`}>Software</h4>
            <ul className='flex gap-[6px] lg:h-[128px]'>
              {SOFTWARE.firstList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList lg:h-[128px] lg:w-[302px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Software className='h-[8px]' />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
        <Marquee className='mt-[10px]'>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} hidden px-[12px] text-base uppercase lg:px-[50px] lg:text-7xl`}>
              Software second list
            </h4>
            <ul className='flex gap-[6px] lg:h-[128px]'>
              {SOFTWARE.secondList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList lg:h-[128px] lg:w-[302px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Software className='h-[8px]' />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
