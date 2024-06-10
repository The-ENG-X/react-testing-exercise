var _jsxFileName = "D:\\TechStarter\\Aufgaben\\react-testing-exercise\\src\\components\\TodoList.js";
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { addTodo } from '../functions/addTodo';
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    const newTodo = {
      text: input
    };
    setTodos(addTodo(todos, newTodo));
    setInput('');
  };
  return /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    "data-testid": "todo-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddTodo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Add Todo"), /*#__PURE__*/React.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, todos.map((todo, index) => /*#__PURE__*/React.createElement(TodoItem, {
    key: index,
    todo: todo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))));
};
export default TodoList;