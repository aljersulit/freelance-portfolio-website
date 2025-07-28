import { playfairDisplay } from '@/app/(frontend)/font';
import Image from 'next/image';
import backgroundLaptop from '@/assets/results_hero_background_laptop.png';
import HeroList from '@/components/pages/ResultsPage/Hero/HeroList';

export default function Hero() {
  return (
    <section className='relative h-lvh px-[10px] lg:px-0 lg:pt-[75px] xl:pt-[96px] 2xl:pt-[125px]'>
      <div className='flex h-full flex-col justify-center gap-[20px] pt-[40px] min-[375px]:gap-[35px] lg:relative lg:pt-0 xl:gap-[54px] 3xl:gap-[45px]'>
        <HeroList />
        <header className='relative z-10 mx-auto xl:w-[922px]'>
          <h1
            className={`${playfairDisplay.className} text-balance text-center text-base min-[375px]:text-xl sm:text-3xl lg:text-4xl xl:text-5xl xl:leading-[1.12]`}
          >
            Driving brand growth with creative content and platform management
          </h1>
        </header>
        <div className='absolute inset-y-0 right-0'>
          <Image
            src={backgroundLaptop}
            alt=''
            role='presentation'
            className='h-full w-full object-cover lg:object-contain'
            sizes='75vw'
          />
        </div>
      </div>
    </section>
  );
}
