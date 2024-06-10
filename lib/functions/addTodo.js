export const addTodo = (todos, newTodo) => {
  const updatedTodos = [...todos];
  updatedTodos.push(newTodo);
  return updatedTodos;
};