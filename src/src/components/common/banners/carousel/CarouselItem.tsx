/* eslint-disable @next/next/no-img-element */
import { IMedia } from '@/types/content';

import React from 'react';

const renderCrouselImageItem = (media: IMedia) => {
  const { imageUrl, href } = media;

  const imageSrc = imageUrl ?? '';
  const image = (
    <img data-testid={`carousel-image`} src={imageSrc} alt={`banner`} />
  );

  if (!href) {
    return image;
  }

  return (
    <a data-testid={`carousel-link`} href={href}>
      {image}
    </a>
  );
};

export const CarouselItem = (media: IMedia) => {
  if (media.imageUrl) {
    return renderCrouselImageItem(media);
  }
  return null;
};

export default CarouselItem;
