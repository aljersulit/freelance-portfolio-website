import { robotoFlex } from "@/app/font"
import { WobbleCard } from "@/components/ui/wobble-card"
import Marquee from 'react-fast-marquee';
import Asana from "@/components/svg/Asana";
import Buffer from "@/components/svg/Buffer";
import Meta from "@/components/svg/Meta";

import GlobalSearch from "@/components/svg/GlobalSearch";


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

const TOOLS = [
  {
    Svg: Meta,
    toolName: 'Meta',
  },
  {
    Svg: Buffer,
    toolName: 'Buffer',
  },
  {
    Svg: Asana,
    toolName: 'Asana',
  },
];

export default function Tools() {
  return (
    <section className='py-[180px]'>
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
      {/* <div aria-roledescription='Tools and software list'>
        <Marquee>
          <div className='flex'>
            <h4 className='uppercase'>Tools</h4>
            <ul>
              {TOOLS.map((tool, i) => (
                <li key={tool.toolName + i}>
                  <span>{<tool.Svg />}</span>
                  {tool.toolName}
                </li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div> */}
    </section>
  );
}
