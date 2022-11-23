import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Loading', () => {
  render(<App />);
  const loading = screen.getByAltText(/Loading/i);
  expect(loading).toBeInTheDocument();
});


