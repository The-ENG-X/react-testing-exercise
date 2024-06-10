var _jsxFileName = "D:\\TechStarter\\Aufgaben\\react-testing-exercise\\src\\__tests__\\App.test.js";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
test('renders TodoList component', () => {
  render( /*#__PURE__*/React.createElement(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }));
  const todoListElement = screen.getByRole('list');
  expect(todoListElement).toBeInTheDocument();
});