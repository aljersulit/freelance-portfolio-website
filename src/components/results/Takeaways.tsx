import Link from 'next/link';
import { outfit, playfairDisplay, roboto } from '@/app/font';

export default function Takeaways() {
  return (
    <section className='xl:pb-[82px]'>
      <div className='mx-auto border-primary bg-accent-foreground lg:border-[6px] xl:mt-[136px] xl:max-w-[1066px] xl:rounded-3xl xl:px-[64px] xl:py-[44px]'>
        <h2 className={`${playfairDisplay.className} xl:text-5xl`}>Key Takeaways</h2>
        <ul className={`${outfit.className} list-disc xl:mt-[42px] xl:pl-[30px] xl:text-2xl`}>
          <li>Proven ability to manage multi-platform content strategies.</li>
          <li>Strong skills in graphic design, video editing, and paid campaign management.</li>
          <li>Experienced in creating engaging content that drives inquiries and strengthens brand presence.</li>
        </ul>
      </div>

      <h2 className={`${outfit.className} text-center font-medium xl:mt-[140px] xl:text-5xl`}>Got a project?</h2>
      <p className={`${roboto.className} mt-[4px] text-center text-sm`}>Discover how we can work together</p>

      <div className={`${outfit.className} xl:text-2xl text-center flex justify-center gap-[12px] xl:mt-[54px]`}>
        <Link
          href='/#contact'
          className='rounded-full bg-primary  py-[10px] uppercase text-primary-foreground w-[308px]'
        >
          Get In Touch
        </Link>
        <a
          href='https://www.behance.net/alyssajoysulit'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border-2 border-foreground py-[10px] uppercase w-[308px]'
        >
          Creative Portfolio
        </a>
      </div>
    </section>
  );
}
