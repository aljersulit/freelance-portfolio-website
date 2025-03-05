import React from 'react'
import Image from 'next/image'
import FlippedWave from '@/components/svg/FlippedWave';

type TProject = {
  img: string;
};

const PROJECT_LIST: TProject[] = [
  {
    img: '/project1.png',
  },
  {
    img: '/project2.jpg',
  },
  {
    img: '/project3.jpg',
  },
];

export default function Gallery() {
  return (
    <section id='gallery' className='relative py-20'>
      <FlippedWave className='absolute top-0 z-0 text-secondary' />
      <h2 className='relative z-10 mt-40 text-center font-notoSerifDisplay text-7xl'>Featured Projects</h2>
      <ul className='mt-16 flex flex-wrap justify-center gap-8 font-semibold'>
        {PROJECT_LIST.map((project, i) => (
          <div key={i}>
            <Image
              src={project.img}
              alt={`My project ${i + 1}`}
              width={800}
              height={450}
              className='h-72 w-96 rounded-sm object-cover'
            />
          </div>
        ))}
      </ul>
    </section>
  );
}
