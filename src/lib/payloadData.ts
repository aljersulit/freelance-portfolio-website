import config from '@/payload.config';
import { getPayload } from 'payload';
// import { About, Work, Hero, Testimonial } from '@/payload-types';
// import { getBase64 } from '@/lib/serverUtils';

// interface HeroWithBlurDataURL extends Hero {
//   blurDataURL?: string;
// }

export const getHeroData = async () => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'hero',
      depth: 1,
    });

    return [fetchedData];
  } catch (error) {
    console.error('Failed to fetch hero data:', error);
    return [];
  }
};

export const getBannerData = async () => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'banner',
      depth: 1,
    });

    return [fetchedData];
  } catch (error) {
    console.error('Failed to fetch banner data:', error);
    return [];
  }
};

export const getTestimonialsData = async () => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'testimonials',
      depth: 1,
    });

    // const base64Promises = fetchedData.testimonials.map((testimonialObj) => {
    //   if (typeof testimonialObj.photo !== 'number' && testimonialObj.photo.url) {
    //     return getBase64(testimonialObj.photo.url);
    //   }
    // });

    // const base64Results = await Promise.all(base64Promises);

    // const testimonialsWithBlurDataURL = fetchedData.testimonials.map((testimonialObj, i) => {
    //   return {
    //     ...testimonialObj,
    //     blurDataURL: base64Results[i],
    //   };
    // });

    // return [
    //   {
    //     ...fetchedData,
    //     testimonials: testimonialsWithBlurDataURL,
    //   },
    // ];

    return [fetchedData];
  } catch (error) {
    console.error('Failed to fetch testimonial data:', error);
    return [];
  }
};

// interface WorkWithBlurDataURL extends Work {
//   blurDataURL?: string;
// }

export const getFeaturedWorksCollectionData = async () => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'works',
      depth: 1,
      // limit: 3,
      // page: 1,
      // pagination: false,
      // sort: 'createdAt',
    });

    // const base64Promises = fetchedData.docs.map((work) => {
    //   if (typeof work.photo !== 'number' && work.photo.url) {
    //     return getBase64(work.photo.url);
    //   }
    // });

    // const base64Results = await Promise.all(base64Promises);

    // const fetchedDataWithBlur: WorkWithBlurDataURL[] = fetchedData.docs.map((work, i) => {
    //   return {
    //     ...work,
    //     blurDataURL: base64Results[i],
    //   };
    // });

    return [fetchedData];
  } catch (error) {
    console.error('Failed to fetch works:', error);
    return [];
  }
};

// type BaseSlidingImageItemFromPayload = NonNullable<About['slidingImages1'] | About['slidingImages2']>[number];

// type SlidingImageItemWithBlur = BaseSlidingImageItemFromPayload & { blurDataURL?: string };
// export interface AboutWithBlurData extends About {
//   slidingImages1: SlidingImageItemWithBlur[];
//   slidingImages2: SlidingImageItemWithBlur[];
// }

export const getAboutSectionData = async () => {
  // const mapBlurDataURL = async (arr: About['slidingImages1' | 'slidingImages2']) => {
  //   const base64Promises = arr.map((imageObj) => {
  //     if (typeof imageObj.image !== 'number' && imageObj.image.url) {
  //       return getBase64(imageObj.image.url);
  //     }
  //   });

  //   const base64Results = await Promise.all(base64Promises);

  //   const arrWithBlur = arr.map((imageObj, i) => {
  //     return {
  //       ...imageObj,
  //       blurDataURL: base64Results[i],
  //     };
  //   });

  //   return arrWithBlur;
  // };

  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'about',
      depth: 1,
    });

    // const slidingImages1 = await mapBlurDataURL(fetchedData.slidingImages1);
    // const slidingImages2 = await mapBlurDataURL(fetchedData.slidingImages2);

    // const mappedData = {
    //   ...fetchedData,
    //   slidingImages1,
    //   slidingImages2,
    // };

    return [fetchedData];
  } catch (error) {
    console.error('Failed to fetch about me data:', error);
    return [];
  }
};
