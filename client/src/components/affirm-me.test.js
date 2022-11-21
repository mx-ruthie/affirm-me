import { render, screen } from '@testing-library/react';
import AffirmMe from './affirm-me-button';

test('renders Affirm Me', () => {
  render(<AffirmMe />);
  const affirmingText = screen.getByRole("button");
  expect(affirmingText).toHaveTextContent("Affirm Me");
});