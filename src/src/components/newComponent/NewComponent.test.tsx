import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import NewComponent from '.';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<NewComponent />', () => {
  it('Should render the heading', () => {
    renderComponent(<NewComponent />);

    expect(screen.getByText(/NewComponent/i)).toBeInTheDocument();
  })
})
