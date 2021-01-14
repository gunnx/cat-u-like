import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cat-U-Like/i);
  expect(linkElement).toBeInTheDocument();
});
