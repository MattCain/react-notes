import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/todo';
import guid from 'guid';
import Immutable from 'Immutable';

const savedTodos = localStorage.todos;

const initialState = Immutable.OrderedMap(savedTodos ? JSON.parse(savedTodos) : {});

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.set(guid.raw(), {
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