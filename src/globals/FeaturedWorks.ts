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
        global: 'works',
      }),
    });

    console.log('Revalidation triggered for works');
  } catch (error) {
    console.error('Failed to trigger revalidation for works:', error);
  }
};

export const FeaturedWorks: GlobalConfig = {
  slug: 'works',
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
      name: 'worksList',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'projectName',
          type: 'text',
          required: true,
          label: 'Project Title',
        },
        {
          name: 'skillsUsed',
          type: 'array',
          label: 'Skills Used',
          minRows: 1,
          fields: [
            {
              name: 'skill',
              type: 'text',
              label: 'Skill Name',
              required: true,
            },
          ],
          admin: {
            description: 'List the key skills/technologies used for this work.',
          },
        },
        {
          name: 'description',
          type: 'textarea', // Use textarea for longer text
          label: 'Work Description',
          required: true,
        },
        {
          name: 'photo', // This will be your image field
          type: 'upload',
          relationTo: 'media', // Relate it to the 'media' collection (where images are stored)
          required: true,
          label: 'Work Photo',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Reference Link',
          required: true,
        },
      ],
    },
  ],
};
