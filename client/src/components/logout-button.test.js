import { render, screen } from '@testing-library/react';
import LogoutButton from './logout-button';

test('renders Log Out', () => {
  render(<LogoutButton />);
  const logOut = screen.getByRole("button");
  expect(logOut).toHaveTextContent("Log Out");
});