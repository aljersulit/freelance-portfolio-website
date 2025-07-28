import { getBannerData } from '@/lib/payloadData';
import Header from './Header';
import BannerImage from './BannerImage';
import Paragraph from './Paragraph';

export default async function Banner() {
  const [BANNER] = await getBannerData();
  return (
    <section className='pt-[45px] md:pb-[52px] md:pt-[90px] lg:pb-[72px] lg:pt-[168px] xl:pb-[95px] 2xl:pt-[200px]'>
      <div className='lg:mx-auto lg:-translate-x-[65px] xl:w-[1065px] 2xl:w-[1490px]'>
        <Header text={BANNER.header} />
        <div className='relative mx-auto mt-[16px] w-fit overflow-visible pb-[76px] md:mt-[40px] md:pb-[95px] lg:mt-[16px] xl:mt-[25] xl:pb-[210px] 2xl:pb-[385px]'>
          <BannerImage />
          <Paragraph text={BANNER.paragraph} />
        </div>
      </div>
    </section>
  );
}
