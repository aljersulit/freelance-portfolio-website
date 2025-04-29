import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/svg/Arrow';
import { roboto, robotoFlex, outfit } from '@/app/font';
import { Vortex } from '@/components/ui/vortex';
import PhonePC from '@/assets/phone_pc.png';
import Laptop from '@/assets/laptop.png';

export default function Services() {
  return (
    <section
      id='services'
      className='relative px-5 pb-[90px] pt-[88px] text-primary-foreground md:px-10 md:pt-[214px] xl:pb-[178px] xl:pt-[176px]'
    >
      <Vortex
        backgroundColor='black'
        containerClassName='absolute inset-0'
        rangeY={700}
        baseHue={198}
        rangeSpeed={0.5}
        rangeRadius={1.2}
        className='pointer-events-none'
      >
        <div className='absolute inset-x-0 top-0 z-10 h-[390px] bg-[url(/purple_gradient_services.png)] bg-cover bg-center lg:hidden' />
        <div className='absolute inset-x-0 bottom-0 z-10 h-[390px] bg-[url(/purple_yellow.png)] bg-cover bg-center opacity-75' />
      </Vortex>
      <header className='relative z-20'>
        <h3
          className={`${roboto.className} mx-auto text-center text-xl/none font-medium md:text-4xl lg:text-center lg:text-3xl xl:px-[140px] xl:text-4xl 2xl:px-[120px] 2xl:text-5xl 3xl:max-w-[1780px]`}
        >
          I help businesses cut through the noise with strategic marketing, engaging content, and proven growth
          strategies.
        </h3>
      </header>
      <article className='mt-[50px] flex flex-col justify-center gap-8 md:mt-[70px] md:gap-12 md:px-10 lg:flex-row lg:gap-8 lg:px-0 min-[1900px]:gap-14'>
        <Link
          href='/results'
          className='flex flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.22)] backdrop-blur-[1.5px] md:border-2 lg:w-[415px] lg:flex-initial min-[1900px]:w-[550px]'
        >
          <div className='space-y-3 px-[22px] pt-[27px] md:space-y-5'>
            <h4
              className={`${outfit.className} text-xs uppercase text-[#bfbbbb] md:text-3xl lg:text-xl xl:text-base min-[1900px]:text-2xl`}
            >
              Social Media Management
            </h4>
            <p
              className={`${roboto.className} text-xs/tight md:text-xl lg:text-2xl xl:text-[1.375rem] xl:leading-6 min-[1900px]:text-3xl`}
            >
              I turn social media into a powerful tool for brand growth with compelling content and smart strategies.
            </p>
            <p
              className={`${robotoFlex.className} block text-sm text-primary md:text-2xl lg:text-xl min-[1900px]:text-3xl`}
            >
              How I help
              <span className='ml-2'>
                <Arrow className='inline w-5' />
              </span>
            </p>
          </div>
          <div className='flex w-full justify-end'>
            <Image src={PhonePC} alt='Phone and pc preview' className='w-10/12 object-contain' />
          </div>
        </Link>

        <a
          href='https://www.behance.net/alyssajoysulit'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit my works'
          className='flex flex-col justify-between gap-4 rounded-3xl border border-solid border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.25)] backdrop-blur-[1.5px] md:border-2 lg:w-[415px] lg:flex-initial min-[1900px]:w-[570px]'
        >
          <div className='space-y-3 px-[22px] pt-[27px] md:space-y-5'>
            <h4
              className={`${outfit.className} text-xs uppercase text-[#bfbbbb] md:text-3xl lg:text-xl xl:text-base min-[1900px]:text-2xl`}
            >
              Graphic Design/Video Edit
            </h4>
            <p
              className={`${roboto.className} text-xs/tight md:text-xl lg:text-2xl xl:text-[1.375rem] xl:leading-6 min-[1900px]:text-3xl`}
            >
              I create visually compelling designs and high-quality video edits that bring ideas to life.
            </p>
            <p
              className={`${robotoFlex.className} block text-sm text-primary md:text-2xl lg:text-xl min-[1900px]:text-3xl`}
            >
              See my work
              <span className='ml-2'>
                <Arrow className='inline w-5' />
              </span>
            </p>
          </div>
          <div className='flex w-full justify-end'>
            <Image src={Laptop} alt='Laptop preview' className='w-10/12 object-contain' />
          </div>
        </a>
      </article>
    </section>
  );
}
