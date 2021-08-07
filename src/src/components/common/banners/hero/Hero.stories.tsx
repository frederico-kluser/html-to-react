import { Story, Meta } from '@storybook/react/types-6-0';
import Hero from '.';
import { bannerHero } from './__mocks__/heroContent';

export default {
  title: 'Banners/Hero',
  component: Hero,
  args: {}
} as Meta;

export const LayoutFixed: Story = (args) => (
  <div style={{ maxWidth: '85%', margin: 'auto' }}>
    <h2>Hero inside a 85% width container</h2>
    <Hero {...bannerHero} {...args} />
  </div>
);

export const LayoutFluid: Story = (args) => <Hero {...bannerHero} {...args} />;
