import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import Footer from '.';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<Footer />', () => {
  it('Should render the heading', () => {
    renderComponent(<Footer />);

    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  })
})
