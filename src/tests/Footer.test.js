import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderApp from './testUtils';

describe('Footer', () => {
  test('have a link pointing to ooloo page for employers', () => {
    renderApp();

    const oolooLink = screen.getByRole('link', { name: 'ooloo.io' });
    expect(oolooLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
  });

  test('navigates to home page when logo is clicked', () => {
    renderApp('/search/javascript');

    const logoLink = screen.getByRole('link', { name: /footerIcon\.svg/i });
    userEvent.click(logoLink);

    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  });

  test('navigates to terms page when terms link is clicked', () => {
    renderApp('/search/javascript');

    const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
    userEvent.click(termsLink);

    expect(screen.getByText(/terms page/i)).toBeInTheDocument();
  });
});
