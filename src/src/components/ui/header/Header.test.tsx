import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import Header from '.';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<Header />', () => {
  it('Should render the heading', () => {
    renderComponent(<Header />);

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  })
})
