import { CollectionConfig } from "payload";

export const FeaturedWorks: CollectionConfig = {
  slug: "works",
  // admin: {

  // },
  // access: {
  //   read: () => true
  // },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      required: true,
      label: 'Project Title'
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
        }
      ],
      admin: {
        description: 'List the key skills/technologies used for this work.',
      }
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
      required: true
    }
  ]
}