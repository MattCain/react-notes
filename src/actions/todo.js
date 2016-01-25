export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(title, text) {
  return {
    type: ADD_TODO,
    title,
    text
  }
}

export function editTodo(title, text, id) {
  return {
    type: EDIT_TODO,
    title,
    text,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}
