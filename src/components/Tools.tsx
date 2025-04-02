import { robotoFlex } from '@/app/font';
import { WobbleCard } from '@/components/ui/wobble-card';
import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

import { roboto } from '@/app/font';
import GlobalSearch from '@/components/svg/GlobalSearch';

const CARDS = [
  {
    Svg: GlobalSearch,
    txt: 'Building a strong digital presence',
    alt: 'Globe icon.',
  },
  {
    Svg: GlobalSearch,
    txt: 'Creating content that resonates with your audience',
    alt: 'Audience icon.',
  },
  {
    Svg: GlobalSearch,
    txt: 'Implementing strategies that drive real growth',
    alt: 'Business stats icon',
  },
];

const TOOLS = ['Meta', 'Buffer', 'Asana', 'Airtable', 'Mailchimp', 'Microsoft', 'Google'];
const SOFTWARE = {
  firstList: ['Capcut', 'Canva', 'Behance', 'Photoshop', 'Illustrator', 'Figma'],
  secondList: ['Pinterest', 'Wix', 'Wordpress', 'Notion', 'Loom', 'Slack', 'Shopify'],
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
              {TOOLS.map((tool, i) => (
                <li
                  key={tool + i}
                  className={cn(
                    'bg-marqueeList flex h-[128px] w-[302px] items-center justify-center',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <img src={`/${tool}.svg`} alt={`${tool} icon`} className='h-8' />
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
              {SOFTWARE.firstList.map((software, i) => (
                <li
                  key={software + i}
                  className={cn(
                    'bg-marqueeList flex h-[128px] w-[302px] items-center justify-center',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <img
                    src={`/${software}.svg`}
                    alt={`${software} icon`}
                    className={cn(
                      'h-8',
                      (software === 'Photoshop' || software === 'Illustrator' || software === 'Figma') && 'scale-125',
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
        <Marquee className='mt-[10px]'>
          <div className='flex items-center'>
            <h4 className={`${roboto.className} hidden px-[50px] text-7xl uppercase`}>Software second list</h4>
            <ul className='flex h-[128px] gap-[6px]'>
              {SOFTWARE.secondList.map((software, i) => (
                <li
                  key={software + i}
                  className={cn(
                    'bg-marqueeList flex h-[128px] w-[302px] items-center justify-center',
                    i % 2 === 0 && 'rounded-full',
                  )}
                >
                  <img
                    src={`/${software}.svg`}
                    alt={`${software} icon`}
                    className={cn(
                      'h-8',
                      (software === 'Notion' || software === 'Wordpress' || software === 'Shopify') && 'scale-125',
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
