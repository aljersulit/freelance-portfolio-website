import { GlobalConfig } from 'payload'

export const AboutMe: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
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
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
