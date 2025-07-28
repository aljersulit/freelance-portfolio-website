'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import { Testimonial } from '@/payload-types';

type TestimonialCarouselProps = {
  testimonialList: Testimonial['testimonials'];
  opts?: EmblaOptionsType;
  className?: string;
};

export default function TestimonialCarousel({
  testimonialList,
  opts = { loop: true, duration: 100 },
  className,
}: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={opts}
      plugins={
        testimonialList.length > 1
          ? [
              Autoplay({
                delay: 6000,
              }),
            ]
          : []
      }
      className={className}
    >
      <CarouselContent className='-ml-6 md:-ml-16 3xl:-ml-20'>
        {testimonialList.map((testimonialObj) => (
          <CarouselItem key={testimonialObj.id} className='pl-6 md:pl-16 3xl:pl-20'>
            <p className='text-left text-sm font-normal leading-[1.43] text-muted-foreground max-md:text-balance md:text-lg lg:text-center 2xl:text-2xl min-[2100px]:text-3xl'>
              {`“${testimonialObj.quote}”`}
            </p>
            {typeof testimonialObj.photo !== 'number' && testimonialObj.photo.url && (
              <Image
                src={testimonialObj.photo.url}
                alt={testimonialObj.photo.alt}
                width={testimonialObj.photo.width || '1252'}
                height={testimonialObj.photo.height || '1252'}
                placeholder={!!testimonialObj.photo.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={!!testimonialObj.photo.blurDataURL ? testimonialObj.photo.blurDataURL : undefined}
                className='mx-auto mt-[47px] aspect-square w-[125px] rounded-full object-cover md:w-[160px] xl:w-[182px] 2xl:w-[290px]'
              />
            )}
            <h4 className='mt-[25px] text-center text-xl uppercase text-secondary-foreground md:max-lg:text-2xl 2xl:text-3xl'>
              {testimonialObj.name}
            </h4>
            <p className='text-center text-xs md:max-lg:text-base 2xl:text-lg'>{testimonialObj.designation}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
