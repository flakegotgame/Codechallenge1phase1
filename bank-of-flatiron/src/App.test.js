import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the bank', () => {
  render(<App />);
  const titleElement = screen.getByText(/The Royal Bank of Flatiron/i);
  expect(titleElement).toBeInTheDocument();
});
