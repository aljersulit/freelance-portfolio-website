'use client';
import * as React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import { AboutWithBlurData } from '@/lib/payloadData';

type ImageCarouselProps = {
  imageList: AboutWithBlurData['slidingImages1'] | AboutWithBlurData['slidingImages2'];
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
        {imageList?.map((imgObj) => (
          <CarouselItem key={imgObj.id}>
            {typeof imgObj.image !== 'number' && imgObj.image.url && (
              <Image
                src={imgObj.image.url || ''}
                alt={imgObj.image.alt}
                width={imgObj.image.width || '2046'}
                height={imgObj.image.height || '1377'}
                placeholder='blur'
                blurDataURL={imgObj.blurDataURL}
                className={cn('rounded-md', imageClassName)}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
