import FooterLogo from '@/components/svg/FooterLogo';
import AljoyDigitalLogo from '@/components/svg/AljoyDigitalLogo';
import { NAVLINKS, SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { outfit, playfairDisplay } from '@/app/font';
import { SOCIALS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='relative h-[290px] bg-footer bg-[url(/footer_gradient.png)] bg-[auto_400px] bg-left-bottom bg-no-repeat px-[16px] pt-[20px] text-background md:h-[407px] md:pt-[75px]'>
      <div className='flex flex-col justify-between max-md:h-full md:mx-auto xl:w-[1200px]'>
        <div className='gap-[70px] border-neutral-600 max-md:border-b lg:flex'>
          <div>
            <Link href='/' className='inline-block pr-2'>
              <FooterLogo className='hidden md:block' />
              <AljoyDigitalLogo className='relative left-[6px] md:hidden' />
            </Link>
            <ul
              className={`${outfit.className} mt-[10px] flex w-full justify-between text-xs font-medium min-[375px]:text-sm md:mt-[30px] md:flex-col md:space-y-2 xl:text-xl`}
            >
              {NAVLINKS.map((nav, i) => (
                <li key={nav.title + i}>
                  <Link href={nav.link} className='block px-2 py-2'>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='max-sm:hidden'>
            <h4 className={`${outfit.className} text-xl font-bold uppercase`}>Services</h4>
            <ul className={`${outfit.className} mt-[30px] space-y-2 text-xl font-medium leading-8`}>
              {SERVICES.map((service, i) => (
                <li key={service.name + i}>
                  <Link href='#'>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col pb-[18px] md:justify-end'>
          <h3 className={`${playfairDisplay.className} text-right text-[2.6875rem] uppercase`}>Connect</h3>
          <ul className='flex flex-row justify-end gap-4'>
            {SOCIALS.map((social, i) => (
              <li key={social.link + i}>
                <Link href={social.link}>{<social.Logo className='h-6' />}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 z-50 h-[6px] bg-gradient-to-r from-primary to-accent-foreground' />
    </footer>
  );
}
