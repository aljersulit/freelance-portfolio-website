import { CollectionConfig } from "payload";

export const AboutMe: CollectionConfig= {
  slug: 'about',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'textGroup1',
      type: 'text',
      required: true,
      label: 'Text Group 1'
    },
    {
      name: 'textGroup2',
      type: 'text',
      required: true,
      label: 'Text Group 2'
    },
    {
      name: 'textGroup3',
      type: 'text',
      required: true,
      label: 'Text Group 3'
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
          required: true
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
          label: 'Alternative text when Images failed to render',
          admin: {
            description: 'Important for accessibility (screen readers) and SEO.'
          }
        }
      ]
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
          required: true
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
          label: 'Alternative text when Images failed to render',
          admin: {
            description: 'Important for accessibility (screen readers) and SEO.'
          }
        }
      ]
    }
  ]
}