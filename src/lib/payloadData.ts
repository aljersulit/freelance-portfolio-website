import config from '@/payload.config';
import { getPayload } from 'payload';
import { Work as BaseWork } from '@/payload-types';
import { generateDynamicImageBlurDataURL } from '@/lib/serverUtils';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

if (!BASE_URL) {
  console.error('NEXT_PUBLIC_SITE_URL environment variable is not set! Image blur data generation may be affected.');
}

interface Work extends BaseWork {
  blurDataURL?: string;
}

export const getFeaturedWorksCollectionData = async () => {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });
  
    const fetchedData = await payload.find({
        collection: 'works',
        depth: 1,
        limit: 5,
        sort: 'createdAt',
      });

      //  Map each works object to generate and add blurDataURL property for Image component placeholder blur
      const featuredWorksData: Work[] = await Promise.all(
      fetchedData.docs.map(async (work) => {
        let blurDataURL = '';
        if (typeof work.photo !== 'number' && work.photo.url) {
          blurDataURL = await generateDynamicImageBlurDataURL(`${BASE_URL}${work.photo.url}`);
        } else {
          // Fallback blurDataURL
          blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
          if (work.photo) {
              console.warn(`Work ID ${work.id || 'unknown'}: Photo data or URL is missing or invalid. Using fallback blurDataURL.`);
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
    return []
  }
};
