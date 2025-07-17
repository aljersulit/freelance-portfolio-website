import { GlobalConfig } from 'payload';
export const Banner: GlobalConfig = {
  slug: 'banner',
  access: {
    read: () => true,
  },
  fields: [{
    name: 'header',
    type: 'text',
    required: true,
    label: 'Banner Header'
  },
  {
    name: 'paragraph',
    type: 'text',
    required: true,
    label: 'Banner paragraph'
  }],
};