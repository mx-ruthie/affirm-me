import { render, screen } from '@testing-library/react';
import NavBar from './nav-bar';

test('should render button', () => {
  render(<NavBar />);
  expect(screen.getByText(/log/i)).toBeInTheDocument()
})

//test below added on the spot in a Sony interview
test('should render button still', () => {
  render(<NavBar />);
  expect(screen.getByText(/in|out?/i)).toBeInTheDocument()
})
