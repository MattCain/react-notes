const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        text: action.text
      }];
    case 'DELETE_TODO':
      return state
              .slice(0, action.index)
              .concat(state.slice(action.index + 1));
    default:
      return state;
  }
};

export default todo;