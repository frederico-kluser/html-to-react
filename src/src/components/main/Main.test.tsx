import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Main from '.';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<Main />', () => {
  it('Should render the heading', () => {
    renderComponent(<Main />);

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument();
  });

  it('should render the color correctly', () => {
    const { container } = renderComponent(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#fff' });
  });
});
