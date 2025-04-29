import React from 'react'
import { playfairDisplay } from '@/app/font'
import Image from 'next/image'

import hero1 from '@/assets/hero1_results.png'
import hero2 from '@/assets/hero2_results.png'
import hero3 from '@/assets/hero3_results.png'

export default function Hero() {
  return (
    <section className='h-lvh pt-[96px]'>
      <div>
        <ul className='flex items-center justify-center xl:mt-[66px] xl:gap-[26px]'>
          <li className='xl:h-[300px]'><Image src={hero1} alt='Ropa market Motocompare' className='h-full w-full' /></li>
          <li className='xl:h-[426px]'><Image src={hero2} alt='Agribank smart time deposit' className='h-full w-full' /></li>
          <li className='xl:h-[300px]'><Image src={hero3} alt='Agribank pay' className='h-full w-full' /></li>
        </ul>
        <header className='xl:w-[922px] mx-auto'>
          <h1 className={`${playfairDisplay.className} xl:text-5xl xl:leading-[1.12] text-center xl:mt-[54px]`}>Driving brand growth with creative content and platform management</h1>
        </header>
      </div>
    </section>
  )
}
