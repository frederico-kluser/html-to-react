import { render, screen, cleanup } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import Carousel from '.';
import {
  bannerCarousel,
  bannerCarouselWithoutHref,
  bannerCarouselWithoutImage
} from './__mocks__/caroulselContent';
import CarouselItem from './CarouselItem';

afterEach(cleanup);

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<Carousel />', () => {
  it('Should render the carousel with default layout fixed', () => {
    const { container } = renderComponent(<Carousel {...bannerCarousel} />);

    expect(screen.getByTestId(`carousel-banner-fixed`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the corousel with layout fluid', () => {
    const { container } = renderComponent(
      <Carousel {...bannerCarousel} layoutType="fluid" />
    );

    expect(screen.getByTestId(`carousel-banner-fluid`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('<CarouselItem />', () => {
  it('Should render a carousel Image Item with link', () => {
    const { medias } = bannerCarousel;
    const [media] = medias;

    const { container } = renderComponent(<CarouselItem {...media} />);

    expect(screen.getByTestId(`carousel-image`)).toBeInTheDocument();
    expect(screen.getByTestId(`carousel-link`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render a carousel Image Item without link', () => {
    const { medias } = bannerCarouselWithoutHref;
    const [media] = medias;

    const { container } = renderComponent(<CarouselItem {...media} />);

    expect(screen.getByTestId(`carousel-image`)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should handle an image without  source url', () => {
    const { medias } = bannerCarouselWithoutImage;
    const [media] = medias;

    const { container } = renderComponent(<CarouselItem {...media} />);

    expect(container.firstChild).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
