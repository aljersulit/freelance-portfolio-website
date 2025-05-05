import { robotoCondensed, outfit, roboto, playfairDisplay } from '@/app/font';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ArrowUp from '@/components/svg/ArrowUp';
import FBR from '@/assets/FacebookAnalyticsResult.png';
import FBReelsResult from '@/assets/FBReelsResult.png';
import FBContentResult from '@/assets/FBContentResults.png';
import AdsPerformance from '@/assets/AdsPerformance.png';
import TiktokAnalyticResult from '@/assets/TiktokAnalyticResult.png';
import TiktokContentResult from '@/assets/Group12.png'
import { TESTIMONIALS } from '@/lib/constants';

export default function Results() {
  return (
    <section className='xl:py-[20px]'>
      <div className='flex justify-between xl:gap-[62px] xl:pl-[96px]'>
        <header className='xl:w-[454px]'>
          <h2 className={`${robotoCondensed.className} border-b-2 border-primary uppercase xl:w-fit xl:text-3xl`}>
            Results
          </h2>
          <div className='ml-auto w-fit xl:mt-[47px]'>
            <Percentage value={990} />
            <p className='xl:mt-[10px] xl:w-[238px] xl:pl-[46px] xl:text-2xl'>
              <strong className={`${roboto.className} font-normal text-[#757575]`}>
                increase in <span className='font-bold text-foreground'>social media reach</span>
              </strong>
            </p>
          </div>

          <div className='ml-auto w-fit xl:mt-[73px]'>
            <Percentage value={293} />
            <p className='xl:mt-[10px] xl:w-[238px] xl:pl-[46px] xl:text-2xl'>
              <strong className={`${roboto.className} font-normal text-[#757575]`}>
                increase in <span className='font-bold text-foreground'>social media followers</span>
              </strong>
            </p>
          </div>
        </header>
        <Image src={FBR} alt='Facebook Analytics Result' className='object-contain xl:max-w-[925px]' />
      </div>

      <div className='relative flex justify-center xl:mt-[88px] xl:gap-[62px]'>
        <div className='xl:w-[666px]'>
          <div className='border-2 border-primary bg-secondary xl:rounded-xl xl:px-[56px] xl:py-[68px]'>
            <h3 className={`${playfairDisplay.className} text-center xl:text-[2.5rem]`}>Facebook Reels Result</h3>
            <Image src={FBReelsResult} alt='Facebook Reels Result' className='mt-[30px]' />
          </div>
          <p className='pt-[16px] text-sm text-muted-foreground xl:w-[496px]'>
            Achieved consistent engagement growth, with notable spikes from viral reels that reached over 200k+ views
            and boosted audience interaction.
          </p>
        </div>
        <div className='mt-[40px] border-2 border-primary bg-secondary xl:w-[592px] xl:rounded-xl xl:px-[18px] xl:py-[90px]'>
          <h3 className={`${playfairDisplay.className} text-center xl:text-[2.5rem]`}>Facebook Content Result</h3>
          <Image src={FBContentResult} alt='Facebook Content Result' className='xl:mt-[48px]' />
        </div>
        <div className='absolute bg-[url(/Yellow4.png)] bg-right bg-no-repeat bg-contain w-1/2 h-[1420px] -top-[900px] right-0 -z-10' aria-hidden />
      </div>

      <div className='justify-center lg:flex xl:mt-[74px] xl:gap-[74px]'>
        <div className='w-fit xl:mt-[120px]'>
          <Percentage value={30} />
          <p className='font-normal text-[#757575] xl:mt-[10px] xl:w-[360px] xl:pl-[30px] xl:text-2xl/none'>
            increase in <strong className='text-foreground'>motorcycle loan inquiries</strong> through targeted
            strategies that
            <strong className='text-foreground'>maximized reach and engagement</strong>.
          </p>
        </div>
        <div className='xl:max-w-[578px]'>
          <Image src={AdsPerformance} alt='Ads Performance' />
          <p className='text-[#757575] xl:mt-[20px] xl:text-sm'>
            Managed seasonal paid advertising campaigns focused on lead generation. I utilized Facebook Ads Manager to
            set up and optimize lead generation campaigns, focusing on audience targeting, budget management, and
            performance analysis to improve conversions. My experience includes creating{' '}
            <strong className='text-foreground'>
              engaging ad creatives, A/B testing, and refining audience segmentation
            </strong>{' '}
            to maximize campaign effectiveness.
          </p>
        </div>
      </div>

      <div className='lg:flex xl:mt-[58px] xl:gap-[30px]'>
        <Image src={TiktokAnalyticResult} alt='Tiktok Analytic Result' className='object-contain xl:max-w-[894px]' />
        <div>
          <div className='w-fit xl:mt-[24px]'>
            <Percentage
              value={158.12}
              arrowClassName='w-[30px]'
              valueClassName='xl:text-[5rem]'
              percentClassName='xl:text-[2.825rem] xl:top-[1rem]'
            />
            <p className={`${outfit.className} text-[#757575] xl:mt-[6px] xl:w-[202px] xl:pl-[36px] xl:text-2xl/none`}>
              <strong className='font-normal'>
                increase in <span className='text-foreground'>audience reach</span>
              </strong>
            </p>
          </div>

          <div className='xl:mt-[54px]'>
            <Percentage
              value={220.60}
              arrowClassName='w-[30px]'
              valueClassName='xl:text-[5rem]'
              percentClassName='xl:text-[2.825rem] xl:top-[1rem]'
            />
            <p className={`${outfit.className} text-[#757575] xl:mt-[6px] xl:w-[212px] xl:pl-[36px] xl:text-2xl/none`}>
              <strong className='font-normal'>
                growth in <span className='text-foreground'>Tiktok followers</span>
              </strong>
            </p>
          </div>

          <div className='xl:mt-[54px]'>
            <Percentage
              value={145.45}
              arrowClassName='w-[30px]'
              valueClassName='xl:text-[5rem]'
              percentClassName='xl:text-[2.825rem] xl:top-[1rem]'
            />
            <p className={`${outfit.className} text-[#757575] xl:mt-[6px] xl:w-[212px] xl:pl-[36px] xl:text-2xl/none`}>
              <strong className='font-normal'>
                increase in <span className='text-foreground'>engagement</span>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className='xl:mt-[110px] lg:flex justify-center xl:gap-[120px] items-end'>
        <div className='xl:w-[627px] border-2 border-primary bg-secondary xl:rounded-xl xl:p-[36px] xl:pb-[18px]'>
          <h3 className='xl:text-4xl text-center'>Tiktok Content Result</h3>
          <Image src={TiktokContentResult} alt='Tiktok content results' className='xl:mt-[24px]' />
        </div>
        <div className='xl:max-w-[420px] xl:pl-[32px] border-l border-[#000000] xl:py-[26px]'>
          <p className={`${roboto.className} xl:text-sm tracking-tight text-pretty`}>
            {TESTIMONIALS[0].quote}
          </p>
          <div className='flex xl:mt-[12px] xl:gap-[18px]'>
            <Image src={TESTIMONIALS[0].src} alt={TESTIMONIALS[0].name} className='xl:max-w-[90px]' />
            <div className={`${robotoCondensed.className} flex flex-col justify-end text-base`}>
              <h5 className='uppercase'>{TESTIMONIALS[0].name}</h5>
              <p>{TESTIMONIALS[0].designation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Percentage({
  value,
  className,
  valueClassName,
  arrowClassName,
  percentClassName,
}: {
  value: number;
  className?: string;
  valueClassName?: string;
  arrowClassName?: string;
  percentClassName?: string;
}) {
  const formattedValue =
    typeof value === 'number' && value % 1 !== 0 ? value.toFixed(2) : value;

  return (
    <div className={cn('flex items-center font-semibold leading-none text-analytics', className)}>
      <ArrowUp className={cn('inline w-[30px]', arrowClassName)} />
      <p className={cn(outfit.className, 'xl:text-8xl', valueClassName)}>
        {formattedValue}
        <span className={cn('relative align-top xl:top-[0.5rem] xl:text-6xl', percentClassName)}>%</span>
      </p>
    </div>
  );
}
