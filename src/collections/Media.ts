import type { CollectionConfig } from 'payload';
import { getPlaiceholder } from 'plaiceholder';

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
    {
      name: 'blurDataURL',
      type: 'text',
      label: 'Generated Blur Data URL',
      admin: {
        readOnly: true,
        description: 'Automatically generated base64 string for image placeholder.',
      },
      access: {
        create: () => false,
        update: () => false,
      },
    },
    {
      name: 'blurGenerationStatus',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Success', value: 'success' },
        { label: 'Failed', value: 'failed' },
      ],
      defaultValue: 'pending',
      admin: { readOnly: true },
      access: { create: () => false, update: () => false },
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        const hasExistingBlur = operation === 'update' ? originalDoc?.blurDataURL : data.blurDataURL;

        if (hasExistingBlur) {
          console.log('blurDataURL already exists. Skipping generation...');
          return data;
        }

        // Handle NEW file uploads (create operation)
        if (operation === 'create' && req.file) {
          try {
            console.log(`Hook: Starting blurDataURL generation for uploaded file`);

            const buffer = req.file.data;
            const { base64 } = await getPlaiceholder(buffer);

            return {
              ...data,
              blurDataURL: base64,
              blurGenerationStatus: 'success',
            };
          } catch (err) {
            console.error(`Error generating blurDataURL for uploaded file:`, err);
            return {
              ...data,
              blurGenerationStatus: 'failed',
            };
          }
        }

        // Handle EXISTING documents being updated (only if no blur data exists)
        if (operation === 'update' && originalDoc?.url) {
          try {
            console.log(`Generating blurDataURL for existing media ID ${originalDoc.id}`);

            const res = await fetch(originalDoc.url);
            if (!res.ok) {
              throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
            }

            const buffer = Buffer.from(await res.arrayBuffer());
            const { base64 } = await getPlaiceholder(buffer);

            return {
              ...data,
              blurDataURL: base64,
              blurGenerationStatus: 'success',
            };
          } catch (err) {
            console.error(`Failed to generate blurDataURL for existing media ID ${originalDoc.id}:`, err);
            return {
              ...data,
              blurGenerationStatus: 'failed',
            };
          }
        }

        return data;
      },
    ],
  },
};
