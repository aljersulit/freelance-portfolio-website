import config from '@/payload.config';
import { getPayload } from 'payload';
import { About, Work, Hero, Testimonial } from '@/payload-types';
import { generateDynamicImageBlurDataURL } from '@/lib/serverUtils';

export type BaseSlidingImageItemFromPayload = NonNullable<About['slidingImages1'] | About['slidingImages2']>[number];

export type SlidingImageItemWithBlur = BaseSlidingImageItemFromPayload & { blurDataURL: string };
export interface AboutWithBlurData extends About {
  slidingImages1: SlidingImageItemWithBlur[];
  slidingImages2: SlidingImageItemWithBlur[];
}

interface HeroWithBlurDataURL extends Hero {
  blurDataURL?: string;
}

export const getHeroData = async (): Promise<HeroWithBlurDataURL[]> => {
  try {
    const payload = await getPayload({ config });

    const fetchedData: HeroWithBlurDataURL = await payload.findGlobal({
      slug: 'hero',
      depth: 1,
    });

    if (typeof fetchedData.photo !== 'number' && fetchedData.photo.url) {
      fetchedData.blurDataURL = await generateDynamicImageBlurDataURL(fetchedData.photo.url);
    } else {
      fetchedData.blurDataURL =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
      if (fetchedData.photo) {
        console.warn(
          `Hero ID ${fetchedData.id || 'unknown'}: Photo data or URL is missing or invalid. Using fallback blurDataURL.`,
        );
      }
    }

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

export type BaseTestimonialItemFromPayload = NonNullable<Testimonial['testimonials']>[number];

export type TestimonialItemWithBlur = BaseTestimonialItemFromPayload & { blurDataURL: string };
export interface TestimonialWIthBlur extends Testimonial {
  testimonials: TestimonialItemWithBlur[];
}

export const getTestimonialsData = async (): Promise<TestimonialWIthBlur[]> => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'testimonials',
      depth: 1,
    });

    const mappedTestimonials = await Promise.all(
      fetchedData.testimonials.map(async (testimonial) => {
        let blurDataURL = '';
        if (typeof testimonial.photo !== 'number' && testimonial.photo.url) {
          blurDataURL = await generateDynamicImageBlurDataURL(testimonial.photo.url);
        } else {
          // Fallback blurDataURL
          blurDataURL =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
          if (testimonial.photo) {
            console.warn(
              `Work ID ${testimonial.id || 'unknown'}: Photo data or URL is missing or invalid. Using fallback blurDataURL.`,
            );
          }
        }

        return {
          ...testimonial,
          blurDataURL,
        };
      }),
    );

    return [
      {
        ...fetchedData,
        testimonials: mappedTestimonials,
      },
    ];
  } catch (error) {
    console.error('Failed to fetch testimonial data:', error);
    return [];
  }
};

interface WorkWithBlurDataURL extends Work {
  blurDataURL?: string;
}

export const getFeaturedWorksCollectionData = async (): Promise<WorkWithBlurDataURL[]> => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.find({
      collection: 'works',
      depth: 1,
      limit: 3,
      page: 1,
      pagination: false,
      sort: 'createdAt',
    });

    //  Map each works object to generate and add blurDataURL property for Image component placeholder blur
    const featuredWorksData = await Promise.all(
      fetchedData.docs.map(async (work) => {
        let blurDataURL = '';
        if (typeof work.photo !== 'number' && work.photo.url) {
          blurDataURL = await generateDynamicImageBlurDataURL(work.photo.url);
        } else {
          // Fallback blurDataURL
          blurDataURL =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
          if (work.photo) {
            console.warn(
              `Work ID ${work.id || 'unknown'}: Photo data or URL is missing or invalid. Using fallback blurDataURL.`,
            );
          }
        }

        return {
          ...work,
          blurDataURL,
        };
      }),
    );

    return featuredWorksData;
  } catch (error) {
    console.error('Failed to fetch works:', error);
    return [];
  }
};

export const getAboutSectionData = async () => {
  const mapBlurDataURL = async (arr: About['slidingImages1' | 'slidingImages2']) => {
    return (
      arr &&
      (await Promise.all(
        arr.map(async (imageObj) => {
          let blurDataURL = '';
          if (typeof imageObj.image !== 'number' && imageObj.image.url) {
            blurDataURL = await generateDynamicImageBlurDataURL(`${imageObj.image.url}`);
          } else {
            blurDataURL =
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
            if (imageObj.image) {
              console.warn(
                `Image ID ${imageObj.id || 'unknown'}: Image data URL is missing or invalid. Using fallback blurDataURL.`,
              );
            }
          }
          return {
            ...imageObj,
            blurDataURL,
          };
        }),
      ))
    );
  };

  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.findGlobal({
      slug: 'about',
      depth: 1,
    });

    const slidingImages1 = await mapBlurDataURL(fetchedData.slidingImages1);
    const slidingImages2 = await mapBlurDataURL(fetchedData.slidingImages2);

    const mappedData = {
      ...fetchedData,
      slidingImages1,
      slidingImages2,
    };

    return [mappedData];
  } catch (error) {
    console.error('Failed to fetch about me data:', error);
    return [];
  }
};
