require('normalize.css');
require('styles/App.scss');
require('bootstrap-loader');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import TodosList from './components/TodosList';
import CreateTodo from './components/CreateTodo';
import { createStore } from 'redux'
import todosReducer from './reducers/todo';

const store = createStore(todosReducer);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TodosList} />
        <Route path="create" component={CreateTodo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
