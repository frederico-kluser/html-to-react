/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IBanner } from '../../../../models/content';
import * as S from './Hero.styles';
import HeroImageContent from './HeroImageContent';

type HeroProps = IBanner & {
  /**
   * renders observing the max width defined in the theme or
   * uses all available horizontal space
   */
  layoutType?: 'fixed' | 'fluid';
};

const Hero = (props: HeroProps) => {
  const { medias, bannerId, layoutType = 'fixed' } = props;
  const [media] = medias;
  const { imageUrl, href } = media;

  if (!imageUrl) {
    return (
      <p data-testid={`image-url-not-provided-${bannerId}`}>
        Only banners with imageUrl attribute are supported: {bannerId}
      </p>
    );
  }

  const Container =
    layoutType === 'fixed' ? S.ContainerFixed : S.ContainerFluid;

  const content = (
    <HeroImageContent id={bannerId} imageUrl={imageUrl} href={href} />
  );

  return (
    <Container data-testid={`hero-banner-${bannerId}`}>{content}</Container>
  );
};

export default Hero;
