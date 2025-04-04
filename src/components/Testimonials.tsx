import { roboto } from '@/app/font';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id='testimonials' className='rounded-[3.3rem] bg-secondary px-[78px] py-[98px]'>
      <header>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-6xl uppercase text-secondary-foreground`}
        >
          Testimonial
        </h2>
      </header>
      <div className='mx-auto mt-[100px] w-[918px]'>
        <p className='text-center text-lg font-normal leading-[1.43] text-muted-foreground'>
          “Collaborating with Aljoy was an incredible experience. I admire how she consistently went the extra mile in
          creating engaging and impactful content, ensuring every design and post was thoughtfully crafted. She often
          took the initiative to suggest new ideas and improvements, demonstrating her proactive approach to enhance our
          campaigns. Whenever I assigned her a task, she made sure to complete it promptly without compromising quality.
          Her dedication, creativity, and strong work ethic always stood out, making a significant difference in our
          campaigns.”
        </p>
        <Image src='/Ricxzy.png' alt='Ricxzy Jane Nadala' width={182} height={182} className='mx-auto mt-[47px]' />
        <h4 className='mt-[25px] text-center text-xl uppercase text-secondary-foreground'>Ricxzy Jane Nadala</h4>
        <p className='text-center text-xs'>Sales Unit Head at Agribank</p>
      </div>
    </section>
  );
}
