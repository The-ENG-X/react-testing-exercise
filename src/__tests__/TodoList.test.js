
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
test('allows users to add todos', () => {
 render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});