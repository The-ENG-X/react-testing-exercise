import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test('renders TodoList component', () => {
    render(<App />);
    const todoListElement = screen.getByRole('list');
    expect(todoListElement).toBeInTheDocument();
  });