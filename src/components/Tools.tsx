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
    <section className='bg-muted py-[56px] md:py-[82px] lg:py-[180px]'>
      <header className='px-[20px] md:px-[108px] lg:px-0'>
        <h3
          className={`${robotoFlex.className} mx-auto text-sm font-semibold text-secondary-foreground md:text-2xl lg:w-[640px] lg:font-normal lg:leading-[1.2] xl:w-[1028px] xl:text-[2.5rem] 3xl:w-[1540px] 3xl:text-6xl`}
        >
          By combining storytelling, creativity, and strategy, I help businesses stand out, grow, and connect
          authentically by:
        </h3>
        <ul className='flex flex-wrap justify-center gap-[12px] pt-[26px] leading-[1.2] text-primary-foreground md:gap-[24px] lg:flex-nowrap lg:gap-[18px] lg:pt-[40px] xl:pt-[69px] 3xl:gap-[32px]'>
          {CARDS.map((card, i) => (
            <li key={card.txt + i}>
              <WobbleCard
                containerClassName='bg-primary h-full rounded-md md:rounded-xl lg:rounded-2xl 3xl:rounded-3xl'
                className='flex h-[110px] w-[128px] flex-col p-[10px] min-[375px]:h-[118px] min-[375px]:w-[155px] md:h-[175px] md:w-[220px] md:p-[20px] xl:h-[259px] xl:w-[346px] 3xl:h-[370px] 3xl:w-[475px] 3xl:p-[48px]'
              >
                {<card.Svg className='mx-auto h-6 w-6 md:h-8 md:w-8 xl:h-11 xl:w-11 3xl:h-16 3xl:w-16' />}

                <div className='flex flex-1 items-center'>
                  <p className='text-center text-xs md:text-lg xl:text-[1.75rem] 3xl:text-4xl'>{card.txt}</p>
                </div>
              </WobbleCard>
            </li>
          ))}
        </ul>
      </header>
      <div aria-roledescription='Tools list container' className='mt-[58px] md:mt-[72px] lg:mt-[122px] xl:mt-[180px]'>
        <Marquee>
          <div className='flex items-center'>
            <h4
              className={`${roboto.className} px-[12px] text-base uppercase md:px-[40px] md:text-4xl lg:px-[50px] lg:text-5xl xl:text-7xl`}
            >
              Tools
            </h4>
            <ul className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px]'>
              {TOOLS.map((Tool, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  {<Tool className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
      <div aria-roledescription='Software list container' className='mt-[4px] md:mt-[10px] min-[2100px]:mt-[18px]'>
        <Marquee direction='right'>
          <div className='flex items-center'>
            <h4
              className={`${roboto.className} px-[12px] text-base uppercase md:px-[40px] md:text-4xl lg:px-[50px] lg:text-5xl xl:text-7xl`}
            >
              Software
            </h4>
            <ul className='flex gap-[4px] md:gap-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'>
              {SOFTWARE.firstList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
        <Marquee className='mt-[4px] md:mt-[10px] min-[2100px]:mt-[18px]'>
          <div className='flex items-center'>
            <ul className='flex gap-[4px] pl-[4px] md:gap-[6px] md:pl-[6px] 2xl:gap-[14px] 2xl:pl-[14px]'>
              {SOFTWARE.secondList.map((Software, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-[30px] w-[70px] items-center justify-center bg-marqueeList md:h-[65px] md:w-[150px] lg:h-[100px] lg:w-[240px] xl:h-[128px] xl:w-[302px] 2xl:h-[148px] 2xl:w-[334px] min-[2100px]:w-[354px]',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  {<Software className='h-[8px] w-full md:h-[14px] lg:h-[30px] xl:h-[34px] 2xl:h-[46px]' />}
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
