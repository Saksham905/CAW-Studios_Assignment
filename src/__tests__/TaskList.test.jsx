import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('TaskList Component', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('toggles task completion when checkbox is clicked', () => {
        render(<App />);

        const input = screen.getByRole('textbox');
        const addButton = screen.getByRole('button', { name: /add task/i });

        fireEvent.change(input, { target: { value: 'Task to Complete' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked(); 
    });

    it('deletes a task when delete button is clicked', () => {
        render(<App />);

        const input = screen.getByRole('textbox');
        const addButton = screen.getByRole('button', { name: /add task/i });

        fireEvent.change(input, { target: { value: 'Task to Delete' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
    });
});
