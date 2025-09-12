import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../../src/TodoList';

describe('Todolist component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  it('TodoList component should add multiple tasks and remove them', () => {

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add Task');

    // Add Task 1
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);

    // Add Task 2
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    // Verify Task 1 and Task 2 are visible
    const task1 = screen.getByText('Task 1');
    const task2 = screen.getByText('Task 2');
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();

    // Remove Task 1
    const removeTask1Button = screen.getAllByText('Remove')[0];
    fireEvent.click(removeTask1Button);

    // Remove Task 2
    const removeTask2Button = screen.getAllByText('Remove')[0];
    fireEvent.click(removeTask2Button);

    // Verify Task 1 and Task 2 are not visible
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });

  it('TodoList component should add multiple tasks and remove them in custom order', () => {

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add Task');

    // Add Task 1
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);

    // Add Task 2
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    // Verify both tasks exist
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // Remove Task 2 first (index 1)
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[1]); // Task 2'nin silme butonu

    // Task 2 should be gone, Task 1 should remain
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();

    // Now remove Task 1
    fireEvent.click(screen.getByText('Remove')); // Şu an sadece Task 1 kaldı

    // Both tasks should be removed now
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  });
  
  it('TodoList component should show an error when trying to add an empty task', () => {

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add Task');

    // Try to add an empty task
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    // Verify error message is displayed
    const errorMessage = screen.getByText('Task cannot be empty!');
    expect(errorMessage).toBeInTheDocument();
  });

});