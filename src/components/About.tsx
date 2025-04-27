import Image from 'next/image';
import Portrait from '@/assets/portrait_about_section.png';
import { roboto } from '@/app/font';
import { CarouselPhotos } from '@/lib/constants';
import ImageCarousel from '@/components/ImageCarousel';

export default function About() {
  return (
    <section
      id='about'
      className='relative px-[20px] py-[88px] md:px-[45px] md:py-[120px] lg:px-[65px] lg:py-[173px] xl:px-[80px]'
    >
      <header className='relative z-10'>
        <h2
          className={`${roboto.className} border-b-2 border-b-stone-300 pb-4 text-lg uppercase text-secondary-foreground md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl 2xl:font-medium`}
        >
          About me
        </h2>
        <div className='relative mt-[22px] flex justify-center gap-4 md:mt-[54px] xl:mt-[78px]'>
          <div className='absolute hidden lg:relative lg:block lg:w-[460px] min-[1900px]:w-[550px]'>
            <Image src={Portrait} alt='My portrait corporate attire image' className='object-cover' />
          </div>
          <div className='flex flex-col justify-center lg:w-4/6 xl:w-[758px] min-[1900px]:w-[970px]'>
            <h3
              className={`${roboto.className} text-balance text-3xl font-semibold leading-[1.2] min-[375px]:text-4xl md:text-5xl lg:text-4xl xl:text-5xl min-[1900px]:text-7xl`}
            >
              Digital Marketing Strategist and Creative Designer
            </h3>
            <div className='mt-[15px] text-pretty text-[0.625rem] leading-[1.3] text-muted-foreground min-[375px]:text-xs min-[425px]:text-sm md:mt-[38px] md:text-lg lg:text-sm xl:mt-[28px] xl:text-[1rem] min-[1900px]:text-xl'>
              <p>
                Hi I&apos;m Aljoy, passionate about helping brands grow through strategic marketing and compelling
                visuals, with over two years of experience in the industry. I specialize in social media management,
                branding and graphic design. I enjoy working on creative campaigns, digital strategies, and visually
                striking designs that drive impact. I love bringing ideas to life through design and storytelling,
                turning concepts into meaningful brand experiences.
              </p>
              <p className='relative z-10 mt-[15px] leading-[1.3] xl:mt-[20px]'>
                I&apos;m always open to exciting opportunities, meaningful collaborations, and new connections. Whether
                you have a project in mind, want to exchange ideas, or simply say hello. Let&apos;s connect and bring
                creative visions to life!
              </p>
            </div>
          </div>
        </div>
      </header>
      <article className='relative z-10 mt-[18px] flex-col justify-center gap-[15px] text-[0.625rem] text-muted-foreground min-[375px]:text-xs min-[425px]:text-sm md:mt-[22px] md:text-lg lg:mt-0 lg:flex lg:flex-row lg:items-end lg:gap-[42px] lg:text-sm xl:gap-[76px] min-[1900px]:text-xl'>
        <div className='flex flex-col-reverse gap-[15px] lg:w-[400px] lg:flex-col lg:gap-0 xl:w-[662px] min-[1900px]:w-[780px]'>
          <p>
            My career in digital marketing and graphic design started when i worked as a social media manager and
            graphic artist in the banking and finance industry where i honed my skills in branding, content strategy and
            audience engagement. I actively appeared in some of the content and marketing materials I previously
            created, bringing a more personal approach to the company&apos;s messaging.
          </p>
          <ImageCarousel
            className='lg:mt-[20px] xl:mt-[38px]'
            imageList={CarouselPhotos.list1}
            delay={3200}
            opts={{ loop: true, duration: 75 }}
          />
        </div>
        <div className='mt-[18px] lg:mt-[0px] lg:w-[400px] xl:w-[542px] min-[1900px]:w-[630px]'>
          <ImageCarousel imageList={CarouselPhotos.list2} delay={4600} opts={{ loop: true, duration: 75 }} />
          <p className='mt-[18px] md:mt-[22px] xl:mt-[34px]'>
            Beyond digital marketing and creative design, I also had the opportunity to host company events and branch
            openings in my previous role, further strengthening my communication and public engagement skills.
          </p>
        </div>
      </article>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-[url(/purple_gradient_about.png)] bg-contain bg-no-repeat opacity-45 md:w-[619px] lg:opacity-100 2xl:w-2/3'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-0 top-0 z-0 h-full w-full bg-[url(/yellow_gradient_about.png)] bg-contain bg-right-bottom bg-no-repeat opacity-75 md:w-[619px] lg:bg-right-top lg:opacity-100 2xl:w-2/3'
      />
    </section>
  );
}
