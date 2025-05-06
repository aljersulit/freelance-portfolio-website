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
    <section className='lg:py-[40px] xl:py-[20px]'>
      <div className='flex justify-end lg:gap-[50px] lg:pl-[30px] xl:gap-[62px] xl:pl-[96px] 3xl:gap-[112px]'>
        <header className='lg:w-1/4'>
          <h2
            className={`${robotoCondensed.className} w-fit border-b-2 border-primary uppercase xl:text-3xl 3xl:text-5xl`}
          >
            Results
          </h2>
          <div className='flex h-full flex-col justify-center lg:gap-[58px] lg:pb-[80px] xl:gap-[72px] 3xl:pb-[160px]'>
            <div className='ml-auto w-fit xl:w-[244px] 3xl:w-[325px]'>
              <Percentage value={990} />
              <p className='lg:max-w-[200px] xl:mt-[10px] xl:max-w-[238px] xl:pl-[46px] xl:text-2xl 3xl:max-w-[300px] 3xl:text-3xl'>
                <strong className={`${roboto.className} font-normal text-[#757575]`}>
                  increase in <span className='font-bold text-foreground'>social media reach</span>
                </strong>
              </p>
            </div>
            <div className='ml-auto w-fit xl:w-[244px] 3xl:w-[325px]'>
              <Percentage value={293} />
              <p className='lg:max-w-[200px] xl:mt-[10px] xl:max-w-[238px] xl:pl-[46px] xl:text-2xl 3xl:max-w-[300px] 3xl:text-3xl'>
                <strong className={`${roboto.className} font-normal text-[#757575]`}>
                  increase in <span className='font-bold text-foreground'>social media followers</span>
                </strong>
              </p>
            </div>
          </div>
        </header>
        <Image src={FBR} alt='Facebook Analytics Result' className='object-contain lg:w-8/12' />
      </div>

      <div className='relative flex justify-center lg:mt-[60px] lg:gap-[36px] xl:mt-[88px] xl:gap-[62px] 3xl:gap-[78px]'>
        <div className='lg:max-w-[440px] xl:max-w-[666px] 3xl:max-w-[850px]'>
          <div className='border-2 border-primary bg-secondary lg:rounded-lg lg:px-[40px] lg:py-[54px] xl:rounded-xl xl:px-[56px] xl:py-[68px] 3xl:rounded-2xl 3xl:py-[78px]'>
            <h3 className={`${playfairDisplay.className} text-center lg:text-3xl xl:text-[2.5rem]`}>
              Facebook Reels Result
            </h3>
            <Image src={FBReelsResult} alt='Facebook Reels Result' className='lg:mt-[22px] xl:mt-[30px]' />
          </div>
          <p className='text-muted-foreground lg:mt-[10px] lg:w-5/6 lg:text-xs xl:mt-[16px] xl:text-sm 3xl:text-xl'>
            Achieved consistent engagement growth, with notable spikes from viral reels that reached over 200k+ views
            and boosted audience interaction.
          </p>
        </div>

        <div className='border-2 border-primary bg-secondary lg:mt-[28px] lg:max-w-[400px] lg:rounded-lg lg:px-[16px] lg:py-[44px] xl:mt-[40px] xl:max-w-[592px] xl:rounded-xl xl:px-[18px] xl:py-[90px] 3xl:max-w-[718px] 3xl:rounded-2xl 3xl:pb-[50px]'>
          <h3 className={`${playfairDisplay.className} text-center lg:text-3xl xl:text-[2.5rem]`}>
            Facebook Content Result
          </h3>
          <Image src={FBContentResult} alt='Facebook Content Result' className='lg:mt-[30px] xl:mt-[48px]' />
        </div>
        <div
          className='absolute -top-[900px] right-0 -z-10 h-[1420px] w-1/2 bg-[url(/Yellow4.png)] bg-contain bg-right bg-no-repeat'
          aria-hidden
        />
      </div>

      <div className='justify-center lg:mt-[74px] lg:flex lg:gap-[58px] xl:gap-[74px] 3xl:mt-[160px]'>
        <div className='w-fit flex-col justify-center lg:flex lg:pb-[96px] xl:pb-[120px] 3xl:pb-[162px]'>
          <Percentage value={30} />
          <p
            className={`${roboto.className} font-normal text-[#757575] lg:max-w-[266px] lg:pl-[22px] lg:text-lg/tight xl:mt-[10px] xl:max-w-[360px] xl:pl-[30px] xl:text-2xl/none 3xl:text-3xl/tight`}
          >
            increase in <strong className='text-foreground'>motorcycle loan inquiries</strong> through targeted
            strategies that <strong className='text-foreground'>maximized reach and engagement</strong>.
          </p>
        </div>

        <div className='lg:max-w-[460px] xl:max-w-[578px] 3xl:max-w-[880px]'>
          <Image src={AdsPerformance} alt='Ads Performance' />
          <p className='text-pretty text-[#757575] lg:mt-[12px] lg:text-xs xl:mt-[20px] xl:text-sm 3xl:text-lg'>
            Managed seasonal paid advertising campaigns focused on lead generation. I utilized Facebook Ads Manager to
            set up and optimize lead generation campaigns, focusing on audience targeting, budget management, and
            performance analysis to improve conversions. My experience includes creating{' '}
            <strong className='font-medium text-foreground'>
              engaging ad creatives, A/B testing, and refining audience segmentation
            </strong>{' '}
            to maximize campaign effectiveness.
          </p>
        </div>
      </div>

      <div className='lg:mt-[58px] lg:flex lg:gap-[30px] 3xl:mt-[140px]'>
        <Image src={TiktokAnalyticResult} alt='Tiktok Analytic Result' className='object-contain lg:w-2/3' />
        <div className='flex flex-col justify-center lg:space-y-[30px] lg:pb-[54px] 3xl:space-y-[40px] 3xl:pb-[104px]'>
          <div className='text- w-fit lg:mt-[14px]'>
            <Percentage
              value={158.12}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] 3xl:text-5xl xl:top-[1rem]'
            />
            <p
              className={`${outfit.className} text-[#757575] lg:max-w-[160px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[202px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                increase in <span className='text-foreground'>audience reach</span>
              </strong>
            </p>
          </div>

          <div>
            <Percentage
              value={220.6}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] xl:top-[1rem] 3xl:text-5xl'
            />
            <p
              className={`${outfit.className} text-[#757575] lg:max-w-[170px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[212px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                growth in <span className='text-foreground'>Tiktok followers</span>
              </strong>
            </p>
          </div>

          <div>
            <Percentage
              value={145.45}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] xl:top-[1rem] 3xl:text-5xl'
            />
            <p
              className={`${outfit.className} text-[#757575] lg:max-w-[160px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[212px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                increase in <span className='text-foreground'>engagement</span>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className='items-end justify-center lg:mt-[90px] lg:flex lg:gap-[50px] xl:mt-[110px] xl:gap-[120px]'>
        <div className='border-2 border-primary bg-secondary lg:max-w-[450px] lg:rounded-lg lg:p-[26px] lg:pb-[8px] xl:max-w-[627px] xl:rounded-xl xl:p-[36px] xl:pb-[18px] 3xl:max-w-[880px] 3xl:p-[50px] 3xl:pb-[22px]'>
          <h3 className='text-center lg:text-2xl xl:text-4xl 3xl:text-5xl'>Tiktok Content Result</h3>
          <Image src={TiktokContentResult} alt='Tiktok content results' className='lg:mt-[18px] xl:mt-[24px]' />
        </div>
        <div className='border-l border-[#000000] lg:max-w-[340px] lg:py-[16px] lg:pl-[20px] xl:max-w-[420px] xl:py-[26px] xl:pl-[32px] 3xl:max-w-[580px]'>
          <p className={`${roboto.className} text-pretty tracking-tight lg:text-xs xl:text-sm 3xl:text-lg`}>
            {TESTIMONIALS[0].quote}
          </p>
          <div className='flex lg:mt-[8px] lg:gap-[10px] xl:mt-[12px] xl:gap-[18px]'>
            <Image
              src={TESTIMONIALS[0].src}
              alt={TESTIMONIALS[0].name}
              className='lg:max-w-[74px] xl:max-w-[90px] 3xl:max-w-[132px]'
            />
            <div
              className={`${robotoCondensed.className} flex flex-col justify-end lg:text-sm xl:text-base 3xl:text-2xl`}
            >
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
  const formattedValue = typeof value === 'number' && value % 1 !== 0 ? value.toFixed(2) : value;

  return (
    <div className={cn('flex items-center font-semibold leading-none text-analytics', className)}>
      <ArrowUp className={cn('inline lg:w-[24px] xl:w-[30px] 3xl:w-[46px]', arrowClassName)} />
      <p className={cn(outfit.className, 'lg:text-7xl xl:text-8xl 3xl:text-9xl', valueClassName)}>
        {formattedValue}
        <span
          className={cn(
            'relative align-top lg:top-[0.5rem] lg:text-5xl xl:text-6xl 3xl:top-[1.25rem] 3xl:text-7xl',
            percentClassName,
          )}
        >
          %
        </span>
      </p>
    </div>
  );
}
