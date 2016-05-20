export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export function addNote(title, text) {
  return {
    type: ADD_NOTE,
    title,
    text
  }
}

export function editNote(title, text, id) {
  return {
    type: EDIT_NOTE,
    title,
    text,
    id
  }
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  }
}
