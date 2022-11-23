import { render, screen } from '@testing-library/react';
import Splash from './splash'

test('renders div', () => {
  render(<Splash />);
  expect(screen.getByText(/affirm/i)).toHaveTextContent("affirm");
});