import config from '@/payload.config';
import { getPayload } from 'payload';
import { About, Work as BaseWork } from '@/payload-types';
import { generateDynamicImageBlurDataURL } from '@/lib/serverUtils';

interface Work extends BaseWork {
  blurDataURL?: string;
}

export type BaseSlidingImageItemFromPayload = NonNullable<About['slidingImages1'] | About['slidingImages2']>[number];

export type SlidingImageItemWithBlur = BaseSlidingImageItemFromPayload & { blurDataURL: string };
export interface AboutWithBlurData extends About {
  slidingImages1?: SlidingImageItemWithBlur[] | null;
  slidingImages2?: SlidingImageItemWithBlur[] | null;
}

export const getFeaturedWorksCollectionData = async (): Promise<Work[]> => {
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

export const getAboutSectionCollectionData = async () => {
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
