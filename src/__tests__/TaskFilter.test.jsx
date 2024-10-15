import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../App';

describe('TaskFilter Component', () => {
  it('shows all tasks by default', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Task 1')).toBeVisible(); 
    expect(screen.getByText('Task 2')).toBeVisible();
  });

  it('shows only completed tasks when "Completed" filter is selected', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });


    fireEvent.change(input, { target: { value: 'Completed Task' } });
    fireEvent.click(addButton);


    const checkboxes = screen.getAllByRole('checkbox');
    await act(async () => {
      fireEvent.click(checkboxes[checkboxes.length - 1]); 
    });

    const filterButton = screen.getByText(/all/i);
    await act(async () => {
      fireEvent.click(filterButton);
    });

   
    const completedOption = screen.getByRole('button', { name: /completed/i });
    await act(async () => {
      fireEvent.click(completedOption);
    });

   
    expect(screen.getByText('Completed Task')).toBeVisible();
    expect(screen.queryByText('Pending Task')).not.toBeInTheDocument(); 
  });

  it('shows only pending tasks when "Pending" filter is selected', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Pending Task' } });
    fireEvent.click(addButton);

    const filterButton = screen.getByText(/all/i);
    await act(async () => {
      fireEvent.click(filterButton);
    });


    const pendingOption = screen.getByRole('button', { name: /pending/i });
    await act(async () => {
      fireEvent.click(pendingOption);
    });

    expect(screen.getByText('Pending Task')).toBeVisible();
    expect(screen.queryByText('Completed Task')).not.toBeInTheDocument(); 
  });
});
