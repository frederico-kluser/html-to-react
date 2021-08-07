/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LazyLoad from 'react-lazyload';

type ImageCompProps = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  isNext?: boolean;
  dataTestid?: string;
};

const ImageComp = (props: ImageCompProps) => {
  const { src, alt, height, width, isNext, dataTestid } = props;

  const chooseImageComp = () => {
    if (isNext) {
      // TODO switch HTML img to NextJS Image Component
      return (
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
          data-testid={dataTestid}
        />
      );
    }

    return (
      <LazyLoad height={height}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
          data-testid={dataTestid}
        />
      </LazyLoad>
    );
  };

  return <>{chooseImageComp()}</>;
};

export default ImageComp;
