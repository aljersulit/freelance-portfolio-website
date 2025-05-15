import { robotoCondensed, outfit, roboto, playfairDisplay } from '@/app/font';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ArrowUp from '@/components/svg/ArrowUp';
import FBR from '@/assets/FacebookAnalyticsResult.png';
import FBReelsResult from '@/assets/FBReelsResult.png';
import FBContentResult from '@/assets/FBContentResults.png';
import AdsPerformance from '@/assets/AdsPerformance.png';
import TiktokAnalyticResult from '@/assets/TiktokAnalyticResult.png';
import TiktokContentResult from '@/assets/Group12.png';
import { TESTIMONIALS } from '@/lib/constants';

export default function Stats() {
  return (
    <section className='py-[24px] lg:py-[40px] xl:py-[20px] 3xl:py-[60px]'>
      <div className='justify-end lg:flex lg:gap-[50px] lg:pl-[30px] xl:gap-[62px] xl:pl-[96px] 3xl:gap-[112px] min-[2100px]:gap-[148px]'>
        <header className='px-[22px] lg:w-1/3 xl:w-1/4 3xl:max-w-[470px]'>
          <h2
            className={`${robotoCondensed.className} w-fit border-b-2 border-primary text-xl uppercase min-[425px]:text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 3xl:text-5xl`}
          >
            Results
          </h2>
          <div className='ml-auto mt-[24px] flex h-full w-11/12 flex-col justify-center gap-[20px] pl-[26px] sm:w-10/12 sm:pl-0 md:mt-[54px] lg:ml-0 lg:mt-0 lg:w-full lg:items-end lg:gap-[58px] lg:pb-[80px] xl:gap-[72px] 3xl:pb-[160px]'>
            <div className='w-fit xl:w-[244px] 3xl:w-[325px]'>
              <Percentage value={990} />
              <p className='text-sm sm:text-base md:text-xl lg:max-w-[200px] xl:mt-[10px] xl:max-w-[238px] xl:pl-[46px] xl:text-2xl 3xl:max-w-[300px] 3xl:text-3xl'>
                <strong className={`${roboto.className} font-normal text-[#757575]`}>
                  increase in <span className='font-bold text-foreground'>social media reach</span>
                </strong>
              </p>
            </div>
            <div className='w-fit xl:w-[244px] 3xl:w-[325px]'>
              <Percentage value={293} />
              <p className='text-sm sm:text-base md:text-xl lg:max-w-[200px] xl:mt-[10px] xl:max-w-[238px] xl:pl-[46px] xl:text-2xl 3xl:max-w-[300px] 3xl:text-3xl'>
                <strong className={`${roboto.className} font-normal text-[#757575]`}>
                  increase in <span className='font-bold text-foreground'>social media followers</span>
                </strong>
              </p>
            </div>
          </div>
        </header>
        <Image
          src={FBR}
          alt='Facebook Analytics Result'
          className='ml-auto mt-[24px] w-11/12 object-contain md:mt-[44px] lg:mt-0 lg:w-8/12'
        />
      </div>

      <div className='relative mt-[34px] justify-center px-[22px] md:mt-[54px] lg:mt-[60px] lg:flex lg:gap-[36px] lg:px-0 xl:mt-[88px] xl:gap-[62px] 3xl:gap-[78px] min-[2100px]:mt-[128px] min-[2100px]:gap-[118px]'>
        <div className='lg:max-w-[440px] xl:max-w-[666px] 3xl:max-w-[850px]'>
          <div className='rounded-md border-2 border-primary bg-secondary px-[10px] py-[18px] sm:rounded-lg sm:px-[20px] sm:py-[30px] lg:rounded-lg lg:px-[40px] lg:py-[54px] xl:rounded-xl xl:px-[56px] xl:py-[68px] 3xl:rounded-2xl 3xl:py-[78px]'>
            <h3 className={`${playfairDisplay.className} text-center sm:text-xl lg:text-3xl xl:text-[2.5rem]`}>
              Facebook Reels Result
            </h3>
            <Image
              src={FBReelsResult}
              alt='Facebook Reels Result'
              className='mt-[10px] sm:mt-[20px] lg:mt-[22px] xl:mt-[30px]'
            />
          </div>
          <p className='mt-[6px] text-xs text-muted-foreground md:text-base lg:mt-[10px] lg:w-5/6 lg:text-xs xl:mt-[16px] xl:text-sm 3xl:text-xl'>
            Achieved consistent engagement growth, with notable spikes from viral reels that reached over 200k+ views
            and boosted audience interaction.
          </p>
        </div>

        <div className='mt-[14px] rounded-md border-2 border-primary bg-secondary px-[10px] py-[18px] sm:rounded-lg sm:px-[20px] sm:py-[30px] md:mt-[28px] lg:max-w-[400px] lg:rounded-lg lg:px-[16px] lg:py-[44px] xl:mt-[40px] xl:max-w-[592px] xl:rounded-xl xl:px-[18px] xl:py-[90px] 3xl:max-w-[718px] 3xl:rounded-2xl 3xl:pb-[50px]'>
          <h3 className={`${playfairDisplay.className} text-center sm:text-xl lg:text-3xl xl:text-[2.5rem]`}>
            Facebook Content Result
          </h3>
          <Image
            src={FBContentResult}
            alt='Facebook Content Result'
            className='mt-[8px] sm:mt-[20px] lg:mt-[30px] xl:mt-[48px]'
          />
        </div>
        <div
          className='absolute -top-[150px] right-0 -z-10 h-[400px] w-3/4 bg-[url(/Yellow4.png)] bg-contain bg-right bg-no-repeat lg:-top-[900px] lg:h-[1420px] lg:w-1/2'
          aria-hidden
        />
      </div>

      <div className='mt-[50px] justify-center px-[22px] lg:mt-[74px] lg:flex lg:gap-[58px] lg:px-0 xl:gap-[74px] 3xl:mt-[160px] min-[2100px]:mt-[200px] min-[2100px]:gap-[94px]'>
        <div className='w-fit flex-col justify-center sm:px-[30px] lg:flex lg:pb-[96px] xl:pb-[120px] 3xl:pb-[162px]'>
          <Percentage value={30} />
          <p
            className={`${roboto.className} text-sm font-normal text-[#757575] sm:text-balance sm:text-base md:text-xl lg:max-w-[266px] lg:pl-[22px] lg:text-lg/tight xl:mt-[10px] xl:max-w-[360px] xl:pl-[30px] xl:text-2xl/none 3xl:text-3xl/tight`}
          >
            increase in <strong className='text-foreground'>motorcycle loan inquiries</strong> through targeted
            strategies that <strong className='text-foreground'>maximized reach and engagement</strong>.
          </p>
        </div>

        <div className='mt-[10px] lg:mt-0 lg:max-w-[460px] xl:max-w-[578px] 3xl:max-w-[880px]'>
          <Image src={AdsPerformance} alt='Ads Performance' />
          <p className='mt-[8px] text-pretty text-[0.65rem] text-[#757575] sm:px-[20px] sm:text-xs md:text-base lg:mt-[12px] lg:text-xs xl:mt-[20px] xl:text-sm 3xl:text-lg'>
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

      <div className='mt-[50px] flex-row-reverse justify-end lg:mt-[58px] lg:flex lg:gap-[30px] 3xl:mt-[140px]'>
        <div className='flex flex-col justify-center px-[22px] sm:px-[54px] lg:space-y-[30px] lg:px-0 lg:pb-[54px] 3xl:space-y-[40px] 3xl:pb-[104px]'>
          <div className='lg:mt-[14px]'>
            <Percentage
              value={158.12}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] 3xl:text-5xl xl:top-[1rem]'
            />
            <p
              className={`${outfit.className} text-[#757575] sm:text-base md:text-xl lg:max-w-[160px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[202px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                increase in <span className='text-foreground'>audience reach</span>
              </strong>
            </p>
          </div>

          <div className='mt-[10px] md:mt-[20px] lg:mt-0'>
            <Percentage
              value={220.6}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] xl:top-[1rem] 3xl:text-5xl'
            />
            <p
              className={`${outfit.className} text-[#757575] sm:text-base md:text-xl lg:max-w-[170px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[212px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                growth in <span className='text-foreground'>Tiktok followers</span>
              </strong>
            </p>
          </div>

          <div className='mt-[10px] md:mt-[20px] lg:mt-0'>
            <Percentage
              value={145.45}
              arrowClassName='lg:w-[20px] xl:w-[24px]'
              valueClassName='lg:text-6xl xl:text-[5rem] 3xl:text-8xl'
              percentClassName='lg:text-4xl xl:text-[2.825rem] xl:top-[1rem] 3xl:text-5xl'
            />
            <p
              className={`${outfit.className} text-[#757575] sm:text-base md:text-xl lg:max-w-[160px] lg:pl-[24px] lg:text-xl/none xl:mt-[6px] xl:max-w-[212px] xl:pl-[36px] xl:text-2xl/none 3xl:max-w-[280px] 3xl:pl-[52px] 3xl:text-3xl/none`}
            >
              <strong className='font-normal'>
                increase in <span className='text-foreground'>engagement</span>
              </strong>
            </p>
          </div>
        </div>
        <Image
          src={TiktokAnalyticResult}
          alt='Tiktok Analytic Result'
          className='mt-[18px] w-11/12 object-contain md:mt-[28px] lg:mt-0 lg:w-2/3'
        />
      </div>

      <div className='mt-[40px] items-end justify-center px-[22px] md:mt-[90px] lg:flex lg:gap-[50px] xl:mt-[110px] xl:gap-[120px]'>
        <div className='rounded-md border-2 border-primary bg-secondary px-[10px] py-[18px] sm:rounded-lg sm:p-[20px] lg:max-w-[450px] lg:rounded-lg lg:p-[26px] lg:pb-[8px] xl:max-w-[627px] xl:rounded-xl xl:p-[36px] xl:pb-[18px] 3xl:max-w-[880px] 3xl:p-[50px] 3xl:pb-[22px]'>
          <h3 className='text-center sm:text-xl lg:text-2xl xl:text-4xl 3xl:text-5xl'>Tiktok Content Result</h3>
          <Image
            src={TiktokContentResult}
            alt='Tiktok content results'
            className='sm:mt-[10px] lg:mt-[18px] xl:mt-[24px]'
          />
        </div>
        <div className='mt-[20px] border-t border-[#000000] px-[4px] pt-[14px] sm:flex sm:items-end sm:gap-[18px] md:mt-[40px] lg:mt-0 lg:block lg:max-w-[340px] lg:border-l lg:border-t-0 lg:px-0 lg:py-[16px] lg:pl-[20px] lg:pt-0 xl:max-w-[420px] xl:py-[26px] xl:pl-[32px] 3xl:max-w-[580px]'>
          <p
            className={`${roboto.className} text-balance text-xs tracking-tight sm:text-base md:text-lg lg:text-pretty lg:text-xs xl:text-sm 3xl:text-lg`}
          >
            {TESTIMONIALS[0].quote}
          </p>
          <div className='mt-[10px] flex gap-[12px] sm:mt-0 sm:flex-col lg:mt-[8px] lg:flex-row lg:gap-[10px] xl:mt-[12px] xl:gap-[18px]'>
            <Image
              src={TESTIMONIALS[0].src}
              alt={TESTIMONIALS[0].name}
              className='max-w-[100px] sm:max-w-[160px] md:max-w-[190px] lg:max-w-[74px] xl:max-w-[90px] 3xl:max-w-[132px]'
            />
            <div
              className={`${robotoCondensed.className} flex flex-col justify-end text-sm lg:text-sm xl:text-base 3xl:text-2xl`}
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
      <ArrowUp className={cn('inline w-[18px] sm:w-[20px] lg:w-[24px] xl:w-[30px] 3xl:w-[46px]', arrowClassName)} />
      <p className={cn(outfit.className, 'text-4xl sm:text-5xl lg:text-7xl xl:text-8xl 3xl:text-9xl', valueClassName)}>
        {formattedValue}
        <span
          className={cn(
            'relative align-top text-2xl sm:text-3xl lg:top-[0.5rem] lg:text-5xl xl:text-6xl 3xl:top-[1.25rem] 3xl:text-7xl',
            percentClassName,
          )}
        >
          %
        </span>
      </p>
    </div>
  );
}
