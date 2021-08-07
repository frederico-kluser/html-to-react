/* eslint-disable @next/next/no-img-element */
import { default as MultiCarousel } from 'react-multi-carousel';
import { ContainerFixed, ContainerFluid } from './Carousel.styles';
import { responsiveConfig } from './Carousel.config';
import { CarouselItem } from './CarouselItem';
import { IBanner } from '@models/content';

export type CarouselProps = IBanner & {
  /**
   * renders observing the max width defined in the theme or
   * uses all available horizontal space - default 'fixed'
   */
  layoutType?: 'fixed' | 'fluid';
  /**
   * Enable auto play mode. Default true
   */
  autoPlay?: boolean;
  /**
   * Hide/Show the default arrows - default true
   */
  arrows?: boolean;
  /**
   * Auto play speed in ms. Default 3000
   */
  autoPlaySpeed?: number;
  /**
   * Shows the next items and previous items partially. Default: false
   */
  centerMode?: boolean;
  /**
   * Infinite loop
   */
  infinite?: boolean;
  /**
   * Show/Hide the default dot list
   */
  showDots?: boolean;
};

const Carousel = (props: CarouselProps) => {
  const { medias, layoutType = 'fixed' } = props;

  const {
    arrows = true,
    autoPlay = true,
    autoPlaySpeed = 3000,
    centerMode = false,
    infinite = true
  } = props;

  const Container = layoutType === 'fixed' ? ContainerFixed : ContainerFluid;

  const sortedMedias = medias.sort((a, b) => b.order - a.order);

  return (
    <Container data-testid={`carousel-banner-${layoutType}`}>
      <MultiCarousel
        arrows={arrows}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        centerMode={centerMode}
        draggable
        focusOnSelect={false}
        infinite={infinite}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsiveConfig}
        showDots={false}
        slidesToSlide={1}
        swipeable
        itemClass="carousel-item"
      >
        {sortedMedias.map((media, index) => {
          return <CarouselItem key={index} {...media} />;
        })}
      </MultiCarousel>
    </Container>
  );
};

export default Carousel;
