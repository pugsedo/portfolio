import { render, screen } from '@testing-library/react';
import App from './pages/home.jsx';

test('renders navbar links', () => {
  render(<App />);

  expect(
    screen.getByRole('link', { name: 'Home' })
  ).toHaveAttribute('href', '/');

  expect(
    screen.getByRole('link', { name: 'Resume' })
  ).toHaveAttribute('href', '/resume');

  expect(
    screen.getByRole('link', { name: 'Projects' })
  ).toHaveAttribute('href', '/projects');
});
