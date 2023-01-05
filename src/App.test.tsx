import React from 'react';
import { findByText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
describe('App', () => {
  const { getByText, getByLabelText } = render(<App />);
  test('renders learn react link', async () => {
    expect(getByText(/mui/i)).toBeInTheDocument();
    expect(getByLabelText(/search/i)).toBeInTheDocument();
  });
  test('user event', () => {
    const { getByLabelText } = render(<App />);
    const userInput = getByLabelText(/search/i);
    userEvent.type(userInput, 'Test');
    expect(userInput).toHaveValue('Test');
  });
  test('buttons  clicked', async () => {
    const { getByRole, debug, findAllByText } = render(<App />);
    const buttons = getByRole('button', { name: 'cards' });
    userEvent.click(buttons);
    expect((await findAllByText(/Rick/i))[0]).toBeInTheDocument();
  });
});
