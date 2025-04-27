'use client';
import * as React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselList } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';

type ImageCarouselProps = {
  imageList: CarouselList;
  delay?: number;
  className?: string;
  imageClassName?: string;
  opts?: EmblaOptionsType;
};

export default function ImageCarousel({
  imageList,
  delay = 4000,
  className,
  imageClassName,
  opts,
}: ImageCarouselProps) {
  return (
    <Carousel
      className={className}
      opts={opts}
      plugins={[
        Autoplay({
          delay,
        }),
      ]}
    >
      <CarouselContent>
        {imageList.map((imgObj, index) => (
          <CarouselItem key={index}>
            <Image
              src={imgObj.image}
              alt={imgObj.altText}
              placeholder='blur'
              className={cn('rounded-md', imageClassName)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
