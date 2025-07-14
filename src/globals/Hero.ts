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
      label: 'Profile photo'
    },
    {
      name: 'intro',
      type: 'text',
      required: true,
      label: 'Introduction text'
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline text'
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
      label: 'Subheading text'
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
          label: 'Link text'
        },
        {
          name: 'href',
          type: 'text',
          required: false,
          label: 'URL/Reference link'
        }
      ]
    }
  ]
}