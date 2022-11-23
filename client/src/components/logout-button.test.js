import { render, screen } from '@testing-library/react';
import LogoutButton from './logout-button';

test('renders Log Out', () => {
  render(<LogoutButton />);
  const affirmingText = screen.getByRole("button");
  expect(affirmingText).toHaveTextContent("Log Out");
});