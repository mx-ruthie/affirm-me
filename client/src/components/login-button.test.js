import { render, screen } from '@testing-library/react';
import LoginButton from './login-button'

test('renders Log In', () => {
  render(<LoginButton />);
  const logIn = screen.getByRole("button");
  expect(logIn).toHaveTextContent("Log In");
});