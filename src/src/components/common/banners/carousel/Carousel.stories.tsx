import { bannerCarousel } from './__mocks__/caroulselContent';
import { Story, Meta } from '@storybook/react/types-6-0';
import Carousel from '.';

export default {
  title: 'Banners/Carousel',
  component: Carousel,
  args: {
    autoPlay: true,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    infinite: true,
    showDots: true
  }
} as Meta;

export const LayoutFixed: Story = (args) => {
  return (
    <div style={{ maxWidth: '85%', margin: 'auto' }}>
      <h2>Carousel inside a 85% width container</h2>
      <Carousel {...bannerCarousel} {...args} />
    </div>
  );
};

export const LayoutFluid: Story = (args) => {
  args.layoutType = 'fluid';
  return <Carousel {...bannerCarousel} {...args} />;
};
