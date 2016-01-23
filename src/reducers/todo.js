import { ADD_TODO, DELETE_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
        title: action.title,
        text: action.text
      }];
    case DELETE_TODO:
      if (!state[action.index]) {
        return state;
      }
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
};

export default todos;