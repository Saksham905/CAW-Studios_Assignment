import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Edit Task Modal', () => {
  it('opens the modal and edits the task string', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Task to Edit' } });
    fireEvent.click(addButton);

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    const modalInput = screen.getByRole('textbox');
    fireEvent.change(modalInput, { target: { value: 'Edited Task' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Edited Task')).toBeVisible(); // Using Jest DOM
  });
});
