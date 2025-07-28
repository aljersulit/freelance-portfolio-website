'use client';
import * as React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import { About } from '@/payload-types';

type ImageCarouselProps = {
  imageList: About['slidingImages1'] | About['slidingImages2'];
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
                placeholder={!!imgObj.image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={!!imgObj.image.blurDataURL ? imgObj.image.blurDataURL : undefined}
                className={cn('rounded-md', imageClassName)}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
