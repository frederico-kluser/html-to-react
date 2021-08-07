import React from 'react';
import dynamic from 'next/dynamic';
import { IBanner } from '@models/content';

const BannerTypes = {
  HERO: 1,
  CAROUSEL: 2
};

interface BannerCustomization {
  id: number;
  layoutType: 'fixed' | 'fluid';
}

const resolveCustomizations = (
  customizations: BannerCustomization[],
  bannerId: number
) => {
  if (!customizations) {
    return {};
  }
  return customizations.find((item) => item.id == bannerId);
};

export const resolveBanners = (
  banners: IBanner[],
  customizations: BannerCustomization[]
) => {
  const Hero = dynamic(() => import('@components/common/banners/hero'));
  const Carousel = dynamic(() => import('@components/common/banners/carousel'));

  return banners.map((banner) => {
    const customization = resolveCustomizations(
      customizations,
      banner.bannerId
    );
    const bannerProps = { ...banner, ...customization };

    switch (banner.type) {
      case BannerTypes.HERO:
        return (
          <Hero
            data-testid={`hero-banner-resolver-${banner.bannerId}`}
            key={banner.bannerId}
            {...bannerProps}
          />
        );

      case BannerTypes.CAROUSEL:
        return (
          <Carousel
            data-testid={`carousel-banner-resolver-${banner.bannerId}`}
            key={banner.bannerId}
            {...bannerProps}
          />
        );

      default:
        console.warn(
          `Component não encontrado para o banner id ${banner.bannerId}`
        );
        return (
          <div
            key={banner.bannerId}
            data-testid="banner-component-not-found"
          ></div>
        );
    }
  });
};
