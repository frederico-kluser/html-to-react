import { Story, Meta } from '@storybook/react/types-6-0';
import ImageComp from '.';

export default {
  title: 'ImageComp',
  component: ImageComp
} as Meta;

export const Basic: Story = () => <ImageComp />;
