import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../../src/UserProfile';

describe('UserProfile component', () => {
  beforeEach(() => {
    render(<UserProfile />);
  });

  it('should update and preview user name', () => {
    const nameInput = screen.getByLabelText(/Name:/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    const namePreview = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'p' &&
      element.textContent === 'Name: Jane Doe'
    );
    expect(namePreview).toBeInTheDocument();
  });

  it('should update and preview user email', () => {
    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'jane.doe@example.com' } });

    const emailPreview = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'p' &&
      element.textContent === 'Email: jane.doe@example.com'
    );
    expect(emailPreview).toBeInTheDocument();
  });

  it('should update and preview user bio', () => {
    const bioTextarea = screen.getByLabelText(/Bio:/i);
    fireEvent.change(bioTextarea, { target: { value: 'Frontend developer and designer.' } });

    const bioPreview = screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'p' &&
      element.textContent === 'Bio: Frontend developer and designer.'
    );
    expect(bioPreview).toBeInTheDocument();
  });
});
