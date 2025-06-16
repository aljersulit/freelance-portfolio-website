import FooterLogo from '@/components/svg/FooterLogo';
import AljoyDigitalLogo from '@/components/svg/AljoyDigitalLogo';
import { NAVLINKS, SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { outfit, playfairDisplay } from '@/app/font';
import { SOCIALS } from '@/lib/constants';
import IKImage from '@/components/IKImage';

export default function Footer() {
  return (
    <footer className='relative h-[290px] bg-footer px-[16px] pt-[20px] text-background md:h-[407px] md:pt-[75px] lg:px-[32px]'>
      <div className='flex h-full flex-col justify-between md:mx-auto md:flex-row xl:w-[1200px] 3xl:w-[1500px]'>
        <div className='border-neutral-600 max-md:border-b md:flex md:gap-[25px] lg:gap-[70px]'>
          <div>
            <Link href='/' className='inline-block pr-2 md:block'>
              <FooterLogo className='hidden md:block md:w-[160px] lg:w-[186px]' />
              <AljoyDigitalLogo className='relative left-[6px] md:hidden' />
            </Link>
            <ul
              className={`${outfit.className} mt-[10px] flex w-full justify-between text-xs font-medium min-[375px]:text-sm sm:text-lg md:mt-[30px] md:flex-col md:gap-4 lg:text-lg xl:text-xl`}
            >
              {NAVLINKS.map((nav, i) => (
                <li key={nav.title + i}>
                  <Link href={nav.link} className='block max-sm:px-2 max-sm:py-2'>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden md:pt-[2px] lg:block'>
            <h4 className={`${outfit.className} font-bold uppercase md:text-lg lg:text-xl xl:text-xl`}>Services</h4>
            <ul
              className={`${outfit.className} mt-[30px] flex font-medium leading-8 md:flex-col md:gap-4 md:text-sm lg:text-lg xl:text-xl`}
            >
              {SERVICES.map((service, i) => (
                <li key={service.name + i}>
                  <Link href='#'>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col pb-[18px] md:justify-end lg:pb-[46px]'>
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
      <div className='absolute bottom-0 left-0 top-0 sm:w-[400px] lg:w-[480px] xl:w-[510px] 2xl:w-[580px]'>
        <IKImage
          alt=''
          src='/footer_gradient.webp'
          width={1281}
          height={912}
          role='presentation'
          className='h-full w-full object-contain object-bottom'
        />
      </div>
      <div className='absolute inset-x-0 bottom-0 z-50 h-[6px] bg-gradient-to-r from-primary to-accent-foreground' />
    </footer>
  );
}
