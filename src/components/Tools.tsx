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
    <section className='bg-muted py-[180px]'>
      <header>
        <h3 className={`${robotoFlex.className} mx-auto w-[1062px] text-[2.5rem] text-secondary-foreground`}>
          By combining storytelling, creativity, and strategy, I help businesses stand out, grow, and connect
          authentically by:
        </h3>
        <ul className='flex justify-center gap-[1.125rem] pt-[69px] leading-[1.2] text-primary-foreground'>
          {CARDS.map((card, i) => (
            <li key={card.txt + i}>
              <WobbleCard containerClassName='h-[259px] w-[346px] bg-primary' className='flex flex-col'>
                {<card.Svg className='mx-auto h-11 w-11' />}

                <div className='flex flex-1 items-center'>
                  <p className='text-center text-[1.75rem]'>{card.txt}</p>
                </div>
              </WobbleCard>
            </li>
          ))}
        </ul>
      </header>
      <div aria-roledescription='Tools list container' className='mt-[180px]'>
        <Marquee>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} px-[50px] text-7xl uppercase`}>Tools</h4>
            <ul className='flex h-[128px] gap-[6px]'>
              {TOOLS.map((Tool, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[128px] w-[302px] items-center justify-center bg-marqueeList',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Tool />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
      <div aria-roledescription='Software list container' className='mt-[10px]'>
        <Marquee direction='right'>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} px-[50px] text-7xl uppercase`}>Software</h4>
            <ul className='flex h-[128px] gap-[6px]'>
              {SOFTWARE.firstList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[128px] w-[302px] items-center justify-center bg-marqueeList',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Software />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
        <Marquee className='mt-[10px]'>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} hidden px-[50px] text-7xl uppercase`}>Software second list</h4>
            <ul className='flex h-[128px] gap-[6px]'>
              {SOFTWARE.secondList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[128px] w-[302px] items-center justify-center bg-marqueeList',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <div>{<Software />}</div>
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
