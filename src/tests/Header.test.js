import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderApp from './testUtils';

describe('Header', () => {
  test('navigates to home page when logo is clicked', () => {
    renderApp('/search/javascript');

    const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
    userEvent.click(logoLink);

    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  });

  test('navigates to search page when search link is clicked', () => {
    const { history } = renderApp();

    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);

    expect(screen.getByText(/search page/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });

  test.each`
    link | hash
    ${'About'} | ${'#about'}
    ${'How it works'} | ${'#how-it-works'}
    `('navigates to "$link" section when "$link" link is clicked', ({ link, hash }) => {
  const { history } = renderApp('/search/javascript');

  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);

  expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});
});
