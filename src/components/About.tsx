import Image from 'next/image';
import Portrait from '../../public/portrait_about_section.png';
import img1list1 from '../../public/aboutme1_list1.png';
import img1list2 from '../../public/aboutme1_list2.png';
import { roboto } from '@/app/font';

export default function About() {
  return (
    <section
      id='about'
      className='px-[80px] py-[173px]'
      style={{
        backgroundImage: 'url(/purple_gradient_about.png), url(/yellow_gradient_about.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '619px auto',
        backgroundPosition: 'left top, right top',
      }}
    >
      <header>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-6xl uppercase text-secondary-foreground`}
        >
          About me
        </h2>
        <div className='mt-[78px] flex justify-center gap-4'>
          <div className='w-[460px]'>
            <Image src={Portrait} alt='My portrait corporate attire image' className='object-cover' />
          </div>
          <div className='flex w-[758px] flex-col justify-center'>
            <h3 className={`${roboto.className} text-balance text-[50px] font-semibold leading-[1.2]`}>
              Digital Marketing Strategist and Creative Designer
            </h3>
            <div className='mt-[28px] text-pretty text-[1rem] leading-[1.3] text-muted-foreground'>
              <p>
                Hi I&apos;m Aljoy, passionate about helping brands grow through strategic marketing and compelling
                visuals, with over two years of experience in the industry. I specialize in social media management,
                branding and graphic design. I enjoy working on creative campaigns, digital strategies, and visually
                striking designs that drive impact. I love bringing ideas to life through design and storytelling,
                turning concepts into meaningful brand experiences.
              </p>
              <p className='mt-[20px] leading-[1.3]'>
                I&apos;m always open to exciting opportunities, meaningful collaborations, and new connections. Whether
                you have a project in mind, want to exchange ideas, or simply say hello. Let&apos;s connect and bring
                creative visions to life!
              </p>
            </div>
          </div>
        </div>
      </header>
      <article className='flex justify-center gap-[76px] text-sm text-muted-foreground'>
        <div className='w-[662px] pt-[56px]'>
          <p>
            My career in digital marketing and graphic design started when i worked as a social media manager and
            graphic artist in the banking and finance industry where i honed my skills in branding, content strategy and
            audience engagement. I actively appeared in some of the content and marketing materials I previously
            created, bringing a more personal approach to the company&apos;s messaging.
          </p>
          <ul className='mt-[38px]'>
            <li>
              <Image
                src={img1list1}
                alt='My image in the office wearing our uniform holding my laptop'
                className='rounded-md'
              />
            </li>
          </ul>
        </div>
        <div className='w-[542px]'>
          <ul>
            <li>
              <Image
                src={img1list2}
                alt='My photo when I hosted our annual company company event'
                className='rounded-md'
              />
            </li>
          </ul>
          <p className='mt-[34px]'>
            Beyond digital marketing and creative design, I also had the opportunity to host company events and branch
            openings in my previous role, further strengthening my communication and public engagement skills.
          </p>
        </div>
      </article>
    </section>
  );
}
