import { GlobalConfig } from 'payload';

// Revalidation function
const revalidateContent = async () => {
  try {
    const revalidateUrl = `${process.env.SERVER_URL}/api/revalidate`;

    await fetch(revalidateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
      },
      body: JSON.stringify({
        global: 'banner',
      }),
    });

    console.log('Revalidation triggered for banner');
  } catch (error) {
    console.error('Failed to trigger revalidation for banner:', error);
  }
};

export const Banner: GlobalConfig = {
  slug: 'banner',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        // Only trigger revalidation in production
        if (process.env.NODE_ENV === 'production') {
          await revalidateContent();
        }
      },
    ],
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
      label: 'Banner Header',
    },
    {
      name: 'paragraph',
      type: 'text',
      required: true,
      label: 'Banner paragraph',
    },
  ],
};
