import React from 'react';

type TServices = {
  title: string;
  subservices: string[];
};

const SERVICES_LIST: TServices[] = [
  {
    title: 'Social Media Management',
    subservices: [
      'Social Media Strategy and Planning',
      'Content Management and Curation',
      'Competitor Analysis',
      'Social Media Advertisement',
      'Audience Research',
      'Audience Engagement',
      'Account Growth and Optimization',
      'Analytics and Reporting',
    ],
  },
  {
    title: 'Graphic Design',
    subservices: [
      'Logo and Layouts',
      'Branding & Identity Design',
      'Social Media Graphics',
      'Marketing & Promotional Materials',
      'Presentation & Document Design',
      'Print & Merchandise Design',
    ],
  },
  {
    title: 'Video Edit',
    subservices: [
      'Raw Footage Review & Organization',
      'Video Editing & Enhancement',
      'Graphics & Animation',
      'Special Effects & Enhancements',
      'Captions & Subtitles',
      'Platform-Specific Exports',
      'Revisions & Final Delivery',
    ],
  },
];

export default function Services() {
  return (
    <section className='bg-secondary py-20'>
      <h2 className='text-center font-notoSerifDisplay text-7xl'>My Services</h2>
      <ul className='flex gap-8 justify-center flex-wrap mt-16 font-semibold'>
        {SERVICES_LIST.map((service, i)=>(
          <div className='border-2 border-border' key={service.title + i}>
            <h3 className='bg-primary text-primary-foreground text-center p-4 text-2xl'>{service.title}</h3>
            <ul className='p-8'>
              {service.subservices.map((subservice, i)=>(
                <li key={subservice + i}>{subservice}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
}
