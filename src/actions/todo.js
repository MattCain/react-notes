export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(title, text) {
  return {
    type: ADD_TODO,
    title,
    text
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  }
}
