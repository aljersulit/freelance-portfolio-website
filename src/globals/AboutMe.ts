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
        global: 'about',
      }),
    });

    console.log('Revalidation triggered for about');
  } catch (error) {
    console.error('Failed to trigger revalidation for about:', error);
  }
};

export const AboutMe: GlobalConfig = {
  slug: 'about',
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
      name: 'title',
      type: 'text',
      required: true,
      label: 'Heading/Title',
    },
    {
      name: 'textGroup1',
      type: 'array',
      label: 'Text Group 1',
      minRows: 1,
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          label: 'Paragraph',
        },
      ],
      admin: {
        description: 'Text content can be separated with paragraphs',
      },
    },
    {
      name: 'textGroup2',
      type: 'textarea',
      required: true,
      label: 'Text Group 2',
    },
    {
      name: 'textGroup3',
      type: 'textarea',
      required: true,
      label: 'Text Group 3',
    },
    {
      name: 'slidingImages1',
      type: 'array',
      label: 'Sliding Images 1',
      minRows: 2,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'slidingImages2',
      type: 'array',
      label: 'Sliding Images 2',
      minRows: 2,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'toolsHeader',
      type: 'text',
      required: true,
      label: 'Tools Header',
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      label: 'Cards',
      minRows: 3,
      fields: [
        {
          name: 'cardIcon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'textContent',
          type: 'text',
          required: true,
          label: 'Card Text Content',
        },
      ],
    },
    {
      name: 'tools',
      type: 'array',
      required: true,
      minRows: 3,
      label: 'Tools Used',
      fields: [
        {
          name: 'toolSvg',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'softwares',
      type: 'group',
      required: true,
      label: 'Softwares Used',
      fields: [
        {
          name: 'softwareList1',
          type: 'array',
          required: true,
          label: 'Software List 1',
          fields: [
            {
              name: 'software',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'softwareList2',
          type: 'array',
          required: true,
          label: 'Software List 2',
          fields: [
            {
              name: 'software',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
