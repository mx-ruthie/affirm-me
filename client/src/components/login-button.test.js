import { render, screen } from '@testing-library/react';
import LoginButton from './login-button'

test('renders Log In', () => {
  render(<LoginButton />);
  const affirmingText = screen.getByRole("button");
  expect(affirmingText).toHaveTextContent("Log In");
});