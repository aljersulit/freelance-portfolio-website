import React from 'react'
import Image from 'next/image'

type TProject = {
  img: string;
}

const PROJECT_LIST: TProject[] = [
  {
    img: "/project1.png"
  },
  {
    img: "/project2.jpg"
  },
  {
    img: "/project3.jpg"
  }
]

export default function Gallery() {
  return (
    <section id='gallery' className='py-20'>
      <h2 className='text-center font-notoSerifDisplay text-7xl'>Featured Projects</h2>
      <ul className='flex gap-8 justify-center flex-wrap mt-16 font-semibold'>
        {PROJECT_LIST.map((project, i)=>(
          <div key={i}>
            <Image src={project.img} alt={`My project ${i + 1}`} width={800} height={450} className='w-96 h-72 object-cover rounded-sm' />
          </div>
        ))}
      </ul>
    </section>
  )
}
