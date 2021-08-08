import { Story, Meta } from '@storybook/react/types-6-0';
import NewComponent from '.';

export default {
  title: 'NewComponent',
  component: NewComponent
} as Meta;

export const Basic: Story = () => <NewComponent />;
