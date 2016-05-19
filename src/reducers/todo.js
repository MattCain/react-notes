import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/todo';
import uuid from 'node-uuid';
import Immutable from 'Immutable';

const savedTodos = localStorage.todos;

const initialState = Immutable.OrderedMap(savedTodos ? JSON.parse(savedTodos) : {});

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.set(uuid.v1(), {
        title: action.title,
        text: action.text
      });

    case EDIT_TODO:
      return state.set(String(action.id), {
        title: action.title,
        text: action.text
      });

    case DELETE_TODO:
      return state.remove(String(action.id));
      
    default:
      return state;
  }
};

export default todos;