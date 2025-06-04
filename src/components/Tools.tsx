import { robotoFlex } from '@/app/font';
import { WobbleCard } from '@/components/ui/wobble-card';
import { CARDS } from '@/lib/constants';
import ToolsScrollMarquee from '@/components/ToolsScrollMarquee';

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
                className='flex h-[118px] w-[128px] flex-col p-[10px] min-[375px]:h-[118px] min-[375px]:w-[155px] min-[375px]:py-[14px] md:h-[175px] md:w-[220px] md:p-[20px] xl:h-[259px] xl:w-[346px] xl:p-[34px] 3xl:h-[370px] 3xl:w-[475px] 3xl:p-[48px]'
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
      <ToolsScrollMarquee />
    </section>
  );
}
