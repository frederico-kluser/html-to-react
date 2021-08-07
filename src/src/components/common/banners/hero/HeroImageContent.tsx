/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  imageUrl: string;
  id: number;
  href: string | null;
  maxWidth?: number;
  maxHeight?: number;
}

const HeroImageContent = ({ id, imageUrl, href }: Props) => {
  const image = (
    <img
      data-testid={`hero-content-${id}`}
      src={imageUrl}
      alt={`banner ${id}`}
    />
  );

  if (!href) {
    return image;
  }

  return <a href={href}>{image}</a>;
};

export default HeroImageContent;
