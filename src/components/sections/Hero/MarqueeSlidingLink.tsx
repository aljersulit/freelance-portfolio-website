import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function MarqueeSlidingLink() {
  const SERVICES = [
    { linkText: 'Content Creation', href: '#' },
    { linkText: 'Graphic Design', href: '#' },
    { linkText: 'Video Editing', href: '#' },
    { linkText: 'Social Media Management', href: '#' },
  ];

  return (
    <div className='absolute bottom-0 left-0 right-0 flex items-center bg-foreground text-accent-foreground lg:h-[45px] lg:text-base xl:h-[60px] xl:text-2xl'>
      <Marquee autoFill={true} className='overflow-y-hidden'>
        {SERVICES.map((service, i) => (
          <span key={i} className='flex items-center'>
            <Link
              className='uppercase transition-colors duration-300 ease-in-out hover:text-[#9696f6]'
              href={service.href}
            >
              {service.linkText}
            </Link>
            <span className='mx-8 lg:text-3xl xl:text-5xl'>•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}