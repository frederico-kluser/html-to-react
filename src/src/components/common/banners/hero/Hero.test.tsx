import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import Hero from '.';
// TODO Import this Mock
import { bannerHero } from './__mocks__/heroContent';
import HeroContent from './HeroImageContent';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<Hero />', () => {
  it('Should render the Hero', () => {
    const { container } = renderComponent(<Hero {...bannerHero} />);

    const testId = `hero-banner-${bannerHero.bannerId}`;
    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render a message when no Image URL is provided', () => {
    const bannerWithNoImage = { ...bannerHero };
    bannerWithNoImage.medias[0].imageUrl = '';
    const { container } = renderComponent(<Hero {...bannerWithNoImage} />);

    const testId = `image-url-not-provided-${bannerHero.bannerId}`;
    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render a image whithout link when no Href is provided', () => {
    const { medias } = bannerHero;
    const [media] = medias;

    const { container } = renderComponent(
      <HeroContent id={1} href={null} imageUrl={media.imageUrl} />
    );

    const testId = `hero-content-${bannerHero.bannerId}`;
    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
