import { render, screen } from '@testing-library/react';
import NavBar from './nav-bar';

test('should render button', () => {
  render(<NavBar />);
  expect(screen.getByText(/log/i)).toBeInTheDocument()
})