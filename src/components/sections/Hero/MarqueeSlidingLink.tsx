import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { Hero } from '@/payload-types';

interface MarqueeSlidingLinkProps extends Pick<Hero, 'marqueeLinks'> {}

export default function MarqueeSlidingLink({ marqueeLinks }: MarqueeSlidingLinkProps) {
  return (
    <div className='absolute bottom-0 left-0 right-0 flex items-center bg-foreground text-accent-foreground lg:h-[45px] lg:text-base xl:h-[60px] xl:text-2xl'>
      <Marquee autoFill={true} className='overflow-y-hidden'>
        {marqueeLinks.map((service) => (
          <span key={service.id} className='flex items-center'>
            <Link
              className='uppercase transition-colors duration-300 ease-in-out hover:text-[#9696f6]'
              href={service.href || '#'}
            >
              {service.text}
            </Link>
            <span className='mx-8 lg:text-3xl xl:text-5xl'>•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
