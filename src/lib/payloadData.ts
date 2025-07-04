import config from '@/payload.config';
import { getPayload } from 'payload';
import { Work as BaseWork, About } from '@/payload-types';
import { generateDynamicImageBlurDataURL } from '@/lib/serverUtils';

interface Work extends BaseWork {
  blurDataURL?: string;
}

export const getFeaturedWorksCollectionData = async () => {
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
    const featuredWorksData: Work[] = await Promise.all(
      fetchedData.docs.map(async (work) => {
        let blurDataURL = '';
        if (typeof work.photo !== 'number' && work.photo.url) {
          blurDataURL = await generateDynamicImageBlurDataURL(`${work.photo.url}`);
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

export const getAboutSectionCollectionData = async (): Promise<About[]> => {
  try {
    const payload = await getPayload({ config });

    const fetchedData = await payload.find({
      collection: 'about',
      depth: 1,
      limit: 1,
      page: 1,
      pagination: false,
      sort: 'createdAt',
    });

    return fetchedData.docs;
  } catch (error) {
    console.error('Failed to fetch about me data:', error);
    return [];
  }
};
