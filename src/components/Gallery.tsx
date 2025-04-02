import React from 'react';
import Image from 'next/image';
import FlippedWave from '@/components/svg/FlippedWave';
import Wavy from '@/components/svg/Wavy';

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
    <section id='gallery' data-main className='relative py-60'>
      <h2 className='font-notoSerifDisplay relative z-10 text-center text-7xl'>Featured Projects</h2>
      <ul className='relative z-10 mt-16 flex flex-wrap justify-center gap-8 font-semibold'>
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
      <FlippedWave className='absolute top-0 z-0 text-secondary' />
      <Wavy className='absolute bottom-0 z-0 w-full text-secondary' />
    </section>
  );
}
