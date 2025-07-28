import { GlobalConfig } from 'payload';
export const Testimonials: GlobalConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
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
