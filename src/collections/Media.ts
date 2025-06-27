import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alternative text to show if Images fail to render',
      admin: {
        description: 'Descriptive text of the image. Important for accessibility (screen readers) and SEO.',
      },
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
};
