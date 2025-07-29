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
        global: 'testimonials',
      }),
    });

    console.log('Revalidation triggered for testimonials');
  } catch (error) {
    console.error('Failed to trigger revalidation for testimonials:', error);
  }
};

export const Testimonials: GlobalConfig = {
  slug: 'testimonials',
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
      name: 'testimonials',
      type: 'array',
      minRows: 1,
      label: 'Testimonial List',
      required: true,
      fields: [
        {
          name: 'quote',
          type: 'text',
          label: 'Testimonial qoute',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name of the testifier',
          required: true,
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation of the testifier',
          required: true,
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
