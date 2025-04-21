import Image from 'next/image';
import Portrait from '../../public/portrait_about_section.png';
import img1list1 from '../../public/aboutme1_list1.png';
import img1list2 from '../../public/aboutme1_list2.png';
import { roboto } from '@/app/font';

export default function About() {
  return (
    <section
      id='about'
      className='px-[20px] py-[173px] lg:px-[65px] xl:px-[80px]'
      style={{
        backgroundImage: 'url(/purple_gradient_about.png), url(/yellow_gradient_about.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '619px auto',
        backgroundPosition: 'left top, right top',
      }}
    >
      <header>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-lg uppercase text-secondary-foreground xl:text-6xl`}
        >
          About me
        </h2>
        <div className='relative mt-[22px] flex justify-center gap-4 xl:mt-[78px]'>
          <div className='absolute right-0 top-[228px] w-[106px] lg:relative lg:top-0 lg:w-[460px]'>
            <Image src={Portrait} alt='My portrait corporate attire image' className='object-cover' />
          </div>
          <div className='flex flex-col justify-center lg:w-4/6 xl:w-[758px]'>
            <h3
              className={`${roboto.className} text-balance text-3xl font-semibold leading-[1.2] lg:text-4xl xl:text-5xl`}
            >
              Digital Marketing Strategist and Creative Designer
            </h3>
            <div className='mt-[15px] text-pretty text-[0.625rem] leading-[1.3] text-muted-foreground lg:text-sm xl:mt-[28px] xl:text-[1rem]'>
              <p>
                Hi I&apos;m Aljoy, passionate about helping brands grow through strategic marketing and compelling
                visuals, with over two years of experience in the industry. I specialize in social media management,
                branding and graphic design. I enjoy working on creative campaigns, digital strategies, and visually
                striking designs that drive impact. I love bringing ideas to life through design and storytelling,
                turning concepts into meaningful brand experiences.
              </p>
              <p className='mt-[15px] pr-[95px] leading-[1.3] xl:mt-[20px]'>
                I&apos;m always open to exciting opportunities, meaningful collaborations, and new connections. Whether
                you have a project in mind, want to exchange ideas, or simply say hello. Let&apos;s connect and bring
                creative visions to life!
              </p>
            </div>
          </div>
        </div>
      </header>
      <article className='flex-col justify-center gap-[15px] text-[0.625rem] text-muted-foreground lg:flex lg:flex-row lg:gap-[42px] lg:text-sm xl:gap-[76px]'>
        <div className='flex flex-col-reverse gap-[15px] pt-[28px] lg:w-[400px] lg:flex-col lg:gap-0 lg:pt-[56px] xl:w-[662px]'>
          <p>
            My career in digital marketing and graphic design started when i worked as a social media manager and
            graphic artist in the banking and finance industry where i honed my skills in branding, content strategy and
            audience engagement. I actively appeared in some of the content and marketing materials I previously
            created, bringing a more personal approach to the company&apos;s messaging.
          </p>
          <ul className='lg:mt-[38px]'>
            <li>
              <Image
                src={img1list1}
                alt='My image in the office wearing our uniform holding my laptop'
                className='rounded-md'
              />
            </li>
          </ul>
        </div>
        <div className='mt-[18px] lg:mt-[18px] lg:w-[400px] xl:w-[542px]'>
          <ul>
            <li>
              <Image
                src={img1list2}
                alt='My photo when I hosted our annual company company event'
                className='rounded-md'
              />
            </li>
          </ul>
          <p className='mt-[15px] xl:mt-[34px]'>
            Beyond digital marketing and creative design, I also had the opportunity to host company events and branch
            openings in my previous role, further strengthening my communication and public engagement skills.
          </p>
        </div>
      </article>
    </section>
  );
}
