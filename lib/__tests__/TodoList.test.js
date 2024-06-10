var _jsxFileName = "D:\\TechStarter\\Aufgaben\\react-testing-exercise\\src\\__tests__\\TodoList.test.js";
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
test('allows users to add todos', () => {
  render( /*#__PURE__*/React.createElement(TodoList, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }));
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByText('Add Todo');
  fireEvent.change(input, {
    target: {
      value: 'Test Todo'
    }
  });
  fireEvent.click(addButton);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});