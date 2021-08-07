import { render, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import ImageComp from '.';
import { forceVisible } from 'react-lazyload';

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('<ImageComp />', () => {
  it('Should render the heading', async () => {
    const { container } = renderComponent(
      <ImageComp src="http://pudim.com.br/pudim.jpg" alt="pudim" />
    );
    forceVisible();
    await waitFor(() => expect(container).toBeInTheDocument());

    expect(screen.getByAltText(/pudim/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
