import Link from 'next/link';
import { outfit, playfairDisplay, roboto } from '@/app/(frontend)/font';
import ExpandingContainer from '@/components/ui/expanding-container';

export default function Takeaways() {
  return (
    <section className='pb-[70px] pt-[50px] lg:pb-[74px] lg:pt-[100px] xl:pb-[82px] xl:pt-[136px] 3xl:pb-[112px]'>
      <ExpandingContainer
        animationTrigger='onScrollDown'
        className='mx-auto w-11/12 rounded-lg border-[2px] border-primary bg-accent-foreground px-[16px] py-[8px] sm:w-10/12 sm:rounded-xl sm:px-[24px] sm:py-[12px] lg:max-w-[850px] lg:rounded-2xl lg:border-[4px] lg:px-[44px] lg:py-[24px] xl:max-w-[1066px] xl:rounded-3xl xl:border-[6px] xl:px-[64px] xl:py-[44px] 3xl:max-w-[1350px]'
      >
        <h2
          className={`${playfairDisplay.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl`}
        >
          Key Takeaways
        </h2>
        <ul
          className={`${outfit.className} mt-[8px] list-disc pl-[16px] text-xs font-light sm:pl-[18px] sm:text-base md:pl-[20px] md:text-lg lg:mt-[22px] lg:pl-[22px] lg:text-xl xl:mt-[42px] xl:pl-[30px] xl:text-2xl 3xl:text-3xl`}
        >
          <li>Proven ability to manage multi-platform content strategies.</li>
          <li>Strong skills in graphic design, video editing, and paid campaign management.</li>
          <li>Experienced in creating engaging content that drives inquiries and strengthens brand presence.</li>
        </ul>
      </ExpandingContainer>

      <h2
        className={`${outfit.className} mt-[54px] text-center text-4xl font-medium md:text-5xl lg:mt-[110px] lg:text-4xl xl:mt-[140px] xl:text-5xl 3xl:text-6xl`}
      >
        Got a project?
      </h2>
      <p
        className={`${roboto.className} mt-[2px] text-center text-xs md:mt-[2px] md:text-sm lg:text-xs xl:mt-[4px] xl:text-sm 3xl:text-base`}
      >
        Discover how we can work together
      </p>

      <div
        className={`${outfit.className} mt-[34px] flex justify-center gap-[6px] text-center text-sm md:gap-[8px] md:text-xl lg:mt-[38px] xl:mt-[54px] xl:gap-[12px] xl:text-2xl 3xl:text-3xl`}
      >
        <Link
          href='/#contact'
          className='rounded-full bg-primary px-[12px] py-[5px] uppercase text-primary-foreground md:w-[260px] md:px-0 md:py-[8px] xl:w-[308px] xl:py-[10px] 3xl:w-[400px] 3xl:py-[18px]'
        >
          Get In Touch
        </Link>
        <a
          href='https://www.behance.net/alyssajoysulit'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-foreground px-[10px] py-[4px] uppercase md:w-[260px] md:border-2 md:px-0 md:py-[6px] xl:w-[308px] xl:py-[10px] 3xl:w-[400px] 3xl:py-[18px]'
        >
          Creative Portfolio
        </a>
      </div>
    </section>
  );
}
