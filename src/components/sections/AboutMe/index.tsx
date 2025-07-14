import Image from 'next/image';
import { roboto } from '@/app/(frontend)/font';

import Portrait from '@/assets/portrait_about_section.png';
import { getAboutSectionData } from '@/lib/payloadData';
import { robotoFlex } from '@/app/(frontend)/font';

import RevealingText from '@/components/ui/revealing-text';
import { WobbleCard } from '@/components/ui/wobble-card';
import IKImage from '@/components/IKImage';
import InlineSvg from '@/components/InlineSvg';
import IconsScrollMarquee from '@/components/sections/AboutMe/IconsScrollMarquee';
import ImageCarousel from '@/components/ImageCarousel';

export default async function About() {
  const [ABOUT] = await getAboutSectionData();
  return (
    <section id='about' className=''>
      <div className='relative rounded-b-3xl bg-secondary px-[20px] py-[88px] md:rounded-b-[3.3rem] md:px-[45px] md:py-[120px] lg:px-[65px] lg:py-[173px] xl:px-[80px]'>
        <header className='relative z-10'>
          <h2
            className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-lg uppercase text-secondary-foreground md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:font-medium 3xl:text-8xl`}
          >
            <RevealingText text='About Me' />
          </h2>
          <div className='relative mt-[22px] flex justify-center gap-4 md:mt-[54px] xl:mt-[78px]'>
            <div className='absolute hidden lg:relative lg:block lg:w-[460px] min-[1900px]:w-[550px]'>
              <Image src={Portrait} alt='My portrait corporate attire image' className='object-cover' />
            </div>
            <div className='flex flex-col justify-center lg:w-4/6 xl:w-[758px] min-[1900px]:w-[970px]'>
              <h3
                className={`${roboto.className} text-balance text-3xl font-semibold leading-[1.2] min-[375px]:text-4xl md:text-5xl lg:text-4xl xl:text-5xl min-[1900px]:text-7xl`}
              >
                {ABOUT.title}
              </h3>
              <div className='mt-[15px] space-y-[15px] text-pretty text-[0.625rem] leading-[1.3] text-muted-foreground min-[375px]:text-xs min-[425px]:text-sm md:mt-[38px] md:text-lg lg:text-sm xl:mt-[28px] xl:space-y-[20px] xl:text-[1rem] min-[1900px]:text-xl'>
                {ABOUT.textGroup1?.map((p) => <p key={p.id}>{p.paragraph}</p>)}
              </div>
            </div>
          </div>
        </header>
        <article className='relative z-10 mt-[18px] flex-col justify-center gap-[15px] text-[0.625rem] text-muted-foreground min-[375px]:text-xs min-[425px]:text-sm md:mt-[22px] md:text-lg lg:mt-0 lg:flex lg:flex-row lg:items-end lg:gap-[42px] lg:text-sm xl:gap-[76px] min-[1900px]:text-xl'>
          <div className='flex flex-col-reverse gap-[15px] lg:w-[400px] lg:flex-col lg:gap-0 xl:w-[662px] min-[1900px]:w-[780px]'>
            <p>{ABOUT.textGroup2}</p>
            <ImageCarousel
              className='lg:mt-[20px] xl:mt-[38px]'
              imageList={ABOUT.slidingImages1}
              delay={3200}
              opts={{ loop: true, duration: 75 }}
            />
          </div>
          <div className='mt-[18px] lg:mt-[0px] lg:w-[400px] xl:w-[542px] min-[1900px]:w-[630px]'>
            <ImageCarousel imageList={ABOUT.slidingImages2} delay={4600} opts={{ loop: true, duration: 75 }} />
            <p className='mt-[18px] md:mt-[22px] xl:mt-[34px]'>{ABOUT.textGroup3}</p>
          </div>
        </article>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full opacity-45 md:w-[619px] lg:opacity-100 2xl:w-2/3'
        >
          <IKImage
            src='/purple_gradient_about.webp'
            width={1183}
            height={2449}
            alt=''
            role='presentation'
            className='object-contain 2xl:object-cover'
          />
        </div>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-0 top-0 z-0 h-full w-full bg-no-repeat opacity-75 md:w-[619px] lg:opacity-100 2xl:w-2/3'
        >
          <IKImage
            src='/yellow_gradient_about.png'
            width={1015}
            height={1747}
            alt=''
            role='presentation'
            className='absolute bottom-0 right-0 object-contain lg:right-0 lg:top-0'
          />
        </div>
      </div>

      <div className='bg-muted py-[56px] md:py-[82px] lg:py-[180px]'>
        <header className='px-[20px] md:px-[108px] lg:px-0'>
          <h3
            className={`${robotoFlex.className} mx-auto text-sm font-semibold text-secondary-foreground md:text-2xl lg:w-[640px] lg:font-normal lg:leading-[1.2] xl:w-[1028px] xl:text-[2.5rem] 3xl:w-[1540px] 3xl:text-6xl`}
          >
            {ABOUT.toolsHeader}
          </h3>
          <ul className='flex flex-wrap justify-center gap-[12px] pt-[26px] leading-[1.2] text-primary-foreground md:gap-[24px] lg:flex-nowrap lg:gap-[18px] lg:pt-[40px] xl:pt-[69px] 3xl:gap-[32px]'>
            {ABOUT.cards.map((card) => (
              <li key={card.id}>
                <WobbleCard
                  containerClassName='bg-primary h-full rounded-md md:rounded-xl lg:rounded-2xl 3xl:rounded-3xl'
                  className='flex h-[118px] w-[128px] flex-col items-center p-[10px] min-[375px]:h-[118px] min-[375px]:w-[155px] min-[375px]:py-[14px] md:h-[175px] md:w-[220px] md:p-[20px] xl:h-[259px] xl:w-[346px] xl:p-[34px] 3xl:h-[370px] 3xl:w-[475px] 3xl:p-[48px]'
                >
                  {typeof card.cardIcon !== 'number' && card.cardIcon.url && (
                    <InlineSvg
                      src={card.cardIcon.url}
                      alt={card.cardIcon.alt}
                      className='h-6 w-6 md:h-8 md:w-8 xl:h-11 xl:w-11 3xl:h-16 3xl:w-16'
                    />
                  )}

                  <div className='flex flex-1 items-center'>
                    <p className='text-center text-xs md:text-lg xl:text-[1.75rem] 3xl:text-4xl'>{card.textContent}</p>
                  </div>
                </WobbleCard>
              </li>
            ))}
          </ul>
        </header>
        <IconsScrollMarquee tools={ABOUT.tools} softwares={ABOUT.softwares} />
      </div>
    </section>
  );
}
