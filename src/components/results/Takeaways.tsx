import Link from 'next/link';
import { outfit, playfairDisplay, roboto } from '@/app/font';

export default function Takeaways() {
  return (
    <section className='lg:pb-[74px] lg:pt-[100px] xl:pb-[82px] xl:pt-[136px]'>
      <div className='mx-auto border-primary bg-accent-foreground lg:max-w-[850px] lg:rounded-2xl lg:border-[4px] lg:px-[44px] lg:py-[24px] xl:max-w-[1066px] xl:rounded-3xl xl:border-[6px] xl:px-[64px] xl:py-[44px]'>
        <h2 className={`${playfairDisplay.className} lg:text-4xl xl:text-5xl`}>Key Takeaways</h2>
        <ul
          className={`${outfit.className} list-disc font-light lg:mt-[22px] lg:pl-[22px] lg:text-xl xl:mt-[42px] xl:pl-[30px] xl:text-2xl`}
        >
          <li>Proven ability to manage multi-platform content strategies.</li>
          <li>Strong skills in graphic design, video editing, and paid campaign management.</li>
          <li>Experienced in creating engaging content that drives inquiries and strengthens brand presence.</li>
        </ul>
      </div>

      <h2 className={`${outfit.className} text-center font-medium lg:mt-[110px] lg:text-4xl xl:mt-[140px] xl:text-5xl`}>
        Got a project?
      </h2>
      <p className={`${roboto.className} text-center lg:mt-[2px] lg:text-xs xl:mt-[4px] xl:text-sm`}>
        Discover how we can work together
      </p>

      <div
        className={`${outfit.className} flex justify-center text-center lg:mt-[38px] lg:gap-[8px] lg:text-xl xl:mt-[54px] xl:gap-[12px] xl:text-2xl`}
      >
        <Link
          href='/#contact'
          className='rounded-full bg-primary uppercase text-primary-foreground lg:w-[260px] lg:py-[6px] xl:w-[308px] xl:py-[10px]'
        >
          Get In Touch
        </Link>
        <a
          href='https://www.behance.net/alyssajoysulit'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border-2 border-foreground uppercase lg:w-[260px] lg:py-[6px] xl:w-[308px] xl:py-[10px]'
        >
          Creative Portfolio
        </a>
      </div>
    </section>
  );
}
