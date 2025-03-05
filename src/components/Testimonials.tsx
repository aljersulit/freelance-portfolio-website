import React from 'react'
import AnimatedTestimonials from '@/components/ui/animated-testimonials';
import { TESTIMONIALS } from '@/lib/constants';


export default function Testimonials() {
  const rotations = TESTIMONIALS.map(() => Math.floor(Math.random() * 21) - 10);

  return (
    <section id='testimonials' className='bg-secondary pb-14'>
      <h2 className='text-center font-notoSerifDisplay text-7xl'>Testimonials</h2>
      <AnimatedTestimonials testimonials={TESTIMONIALS} rotations={rotations} />
    </section>
  )
}
