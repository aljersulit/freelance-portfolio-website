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
    alt: 'Globe icon.'
  },
  {
    Svg: "",
    txt: 'Creating content that resonates with your audience',
    alt: 'Audience icon.'
  },
  {
    Svg: "",
    txt: 'Implementing strategies that drive real growth',
    alt: 'Business stats icon'
  }
]

const TOOLS = [
  {
    Svg: Meta,
    toolName: "Meta",
  },
  {
    Svg: Buffer,
    toolName: "Buffer"
  },
  {
    Svg: Asana,
    toolName: "Asana"
  }
]

export default function Tools() {
  return (
    <section className='py-[180px]'>
      <header>
      <h3 className={`${robotoFlex.className} w-[1062px] mx-auto`}>By combining storytelling, creativity, and strategy, 
        I help businesses stand out, grow, and connect authentically by:</h3>
        <ul>
          {
            CARDS.map((card, i) => (
              <li key={card.txt + i}>
                <WobbleCard>
                  <GlobalSearch />
                  <p>
                    {card.txt}
                  </p>
                </WobbleCard>
              </li>
            ))
          }
        </ul>
      </header>
      <div aria-roledescription="Tools and software list">
          <Marquee>
            <div className="flex">
              <h4 className="uppercase">Tools</h4>
              <ul>
                {
                  TOOLS.map((tool, i) => (
                    <li key={tool.toolName + i}>
                      <span>{<tool.Svg />}</span>
                      {tool.toolName}
                    </li>
                  ))
                }
              </ul>
            </div>
          </Marquee>
      </div>
    </section>
  )
}
