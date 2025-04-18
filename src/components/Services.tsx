import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/svg/Arrow';
import { roboto, robotoFlex, outfit } from '@/app/font';
import { Vortex } from '@/components/ui/vortex';

export default function Services() {
  return (
    <section
      id='services'
      className='relative px-5 pb-[90px] pt-[88px] text-primary-foreground xl:pb-[178px] xl:pt-[176px]'
    >
      <Vortex
        backgroundColor='black'
        containerClassName='absolute inset-0'
        rangeY={700}
        baseHue={198}
        rangeSpeed={0.5}
        rangeRadius={1.2}
      >
        <div className='absolute inset-x-0 top-0 z-10 h-[390px] bg-[url(/purple_gradient_services.png)] bg-cover bg-center' />
        <div className='absolute inset-x-0 bottom-0 z-10 h-[390px] bg-[url(/purple_yellow.png)] bg-cover bg-center opacity-75' />
      </Vortex>
      <header className='relative z-20'>
        <h3
          className={`${roboto.className} mx-auto text-center text-xl/none font-medium lg:w-[1055px] lg:text-left xl:text-4xl`}
        >
          I help businesses cut through the noise with strategic marketing, engaging content, and proven growth
          strategies.
        </h3>
      </header>
      <article className='mt-[50px] flex flex-col justify-center gap-8 lg:flex-row'>
        <div className='flex flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.22)] backdrop-blur-[1.5px] xl:w-[415px]'>
          <div className='space-y-3 px-[22px] pt-[27px]'>
            <h4 className={`${outfit.className} text-xs uppercase text-[#bfbbbb]`}>Social Media Management</h4>
            <p className={`${roboto.className} text-xs/tight xl:text-[22px] xl:leading-6`}>
              I turn social media into a powerful tool for brand growth with compelling content and smart strategies.
            </p>
            <Link href='/works' className={`${robotoFlex.className} block text-sm xl:text-lg`}>
              How I help
              <span className='ml-2'>
                <Arrow className='inline w-5' />
              </span>
            </Link>
          </div>
          <div className='flex w-full justify-end'>
            <Image
              src='/phone_pc.png'
              alt='Phone and pc preview'
              width={513}
              height={388}
              className='w-10/12 object-contain'
            />
          </div>
        </div>

        <div className='flex flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.25)] backdrop-blur-[1.5px] xl:w-[415px]'>
          <div className='space-y-3 px-[22px] pt-[27px]'>
            <h4 className={`${outfit.className} text-xs uppercase text-[#bfbbbb]`}>Graphic Design/Video Edit</h4>
            <p className={`${roboto.className} text-xs/tight xl:text-[22px] xl:leading-6`}>
              I create visually compelling designs and high-quality video edits that bring ideas to life.
            </p>
            <a
              href='https://www.behance.net/alyssajoysulit'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit my works'
              className={`${robotoFlex.className} block text-sm xl:text-lg`}
            >
              See my work
              <span className='ml-2'>
                <Arrow className='inline w-5' />
              </span>
            </a>
          </div>
          <div className='flex w-full justify-end'>
            <Image src='/laptop.png' alt='Laptop preview' width={484} height={358} className='w-10/12 object-contain' />
          </div>
        </div>
      </article>
    </section>
  );
}
