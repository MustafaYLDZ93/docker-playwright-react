import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../src/Counter';

describe('Counter component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

 it('Counter component should increment and decrement', () => {

  const increaseButton = screen.getByText('Increase');
  const decreaseButton = screen.getByText('Decrease');
  const countText = screen.getByText(/Count:/);

  expect(countText).toHaveTextContent('Count: 0');

  fireEvent.click(increaseButton);
  expect(countText).toHaveTextContent('Count: 1');

  fireEvent.click(decreaseButton);
  expect(countText).toHaveTextContent('Count: 0');
 });

});