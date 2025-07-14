import { GlobalConfig } from 'payload';
export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Profile photo',
      admin: {
        description: 'Keep the image aspect ratio close to 2732 x 4096 to maintain the layout',
      },
    },
    {
      name: 'intro',
      type: 'text',
      required: true,
      label: 'Introduction text',
    },
    {
      name: 'headline',
      type: 'array',
      required: true,
      label: 'Headline text',
      minRows: 1,
      maxRows: 3,
      admin: {
        description: 'Headline is divided in upto three lines of text for the intro animation',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
      label: 'Subheading text',
    },
    {
      name: 'marqueeLinks',
      type: 'array',
      required: true,
      label: 'Sliding Marquee Links',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Link text',
        },
        {
          name: 'href',
          type: 'text',
          required: false,
          label: 'URL/Reference link',
        },
      ],
    },
  ],
};