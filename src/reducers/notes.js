import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/note';
import { REORDER_NOTES } from '../actions/notes';
import uuid from 'node-uuid';
import Immutable from 'Immutable';

const savedNotes = localStorage.notes;

const initialState = Immutable.OrderedMap(savedNotes ? JSON.parse(savedNotes) : {});

const notes = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return state.set(uuid.v1(), {
        title: action.title,
        text: action.text
      });

    case EDIT_NOTE:
      return state.set(String(action.id), {
        title: action.title,
        text: action.text
      });

    case DELETE_NOTE:
      return state.remove(String(action.id));
      
    case REORDER_NOTES:
      return Immutable.OrderedMap(action.newOrder.map(function(key) {
        return [key, state.get(key)];
      }));

    default:
      return state;
  }
};

export default notes;
