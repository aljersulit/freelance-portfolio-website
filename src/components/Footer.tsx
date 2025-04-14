import FooterLogo from '@/components/svg/FooterLogo';
import { NAVLINKS, SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { outfit, playfairDisplay } from '@/app/font';
import { SOCIALS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='relative h-[407px] bg-footer bg-[url(/footer_gradient.png)] bg-[auto_400px] bg-left-bottom bg-no-repeat pt-[75px] text-background'>
      <div className='mx-auto flex w-[1200px] justify-between'>
        <div className='flex gap-[70px]'>
          <div>
            <Link href='/'>
              <FooterLogo />
            </Link>
            <ul className={`${outfit.className} mt-[30px] space-y-2 text-xl font-medium leading-8`}>
              {NAVLINKS.map((nav, i) => (
                <li key={nav.title + i}>
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
        <div className='flex flex-col justify-end'>
          <h3 className={`${playfairDisplay.className} text-[2.6875rem] uppercase`}>Connect</h3>
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

// type FooterLinkProps = Socials & {
//   className?: string;
// };

// function FooterLink({ Logo, link, textContent, className }: FooterLinkProps) {
//   return (
//     <div className={cn('flex gap-3', className)}>
//       <Logo className='w-7' />
//       <a href={link}>{textContent}</a>
//     </div>
//   );
// }
