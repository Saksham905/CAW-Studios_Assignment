import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; 

describe('AddTask Component', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  it('adds a task when input is filled and form is submitted', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeVisible(); 
  });

  it('does not add a task when input is empty', () => {
    render(<App />);

    const addButton = screen.getByRole('button', { name: /add task/i });
    fireEvent.click(addButton);

    expect(screen.queryByText('New Task')).not.toBeInTheDocument(); 
  });
});
