require('normalize.css');
require('styles/App.scss');
require('bootstrap-loader');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router'
import App from './components/App';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import notesReducer from './reducers/notes';

const reducer = combineReducers({
  notes: notesReducer,
  routing: routeReducer
});

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

store.subscribe(() => {
  // Save the notes to localstorage if there are any
  const notes = store.getState().notes;
  localStorage.notes = JSON.stringify(notes);
});

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NotesList} />
        <Route path="create" component={CreateNote} />
        <Route path="edit/:id" component={CreateNote} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
