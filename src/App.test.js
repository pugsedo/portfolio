import { render, screen } from '@testing-library/react';
import App from './index';

test('renders navbar links', () => {
  render(<App />);

  expect(
    screen.getByRole('link', { name: 'Home' })
  ).toHaveAttribute('href', '/');

  expect(
    screen.getByRole('link', { name: 'Blog' })
  ).toHaveAttribute('href', '/blog');

  expect(
    screen.getByRole('link', { name: 'Projects' })
  ).toHaveAttribute('href', '/projects');
});