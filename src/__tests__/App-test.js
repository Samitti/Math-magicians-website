import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../components/App';

describe('Functionalities of the app', () => {
  test('renders App component', () => {
    render(<App />);
    const btnArr = screen.getAllByRole('button');
    expect(btnArr[0].textContent).toBe('AC');
    expect(btnArr[3].textContent).toBe('÷');
    expect(btnArr[4].textContent).toBe('7');

    fireEvent.click(btnArr[4]);
  });
});
