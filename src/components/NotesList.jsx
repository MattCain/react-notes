import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'Immutable';
import Sortable from 'react-sortablejs';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import NotesListItem from './NotesListItem';
import { reorderNotes } from '../actions/notes';

class NotesListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSort(newOrder) {
    const { dispatch } = this.props;

    dispatch(reorderNotes(newOrder));
  }
  render() {
    return (
      <ListGroup>
        <Sortable onChange={(newOrder) => this.handleSort(newOrder)}>
          {this.props.notes.size ? this.props.notes.map((note, key) => {
            return (
              <NotesListItem note={note} noteKey={key} key={key} data-id={key}></NotesListItem>
            );
          }).toArray() : (<ListGroupItem>No notes</ListGroupItem>)}
        </Sortable>
      </ListGroup>
    )
  }
}

NotesListComponent.propTypes = {
  notes: React.PropTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  state => ({ notes: state.notes })
)(NotesListComponent);
