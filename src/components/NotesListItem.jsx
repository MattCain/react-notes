import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteNote } from '../actions/note';

class NotesListItemComponent extends React.Component {

  handleClose(e, key) {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(deleteNote(key));
  }

  render() {
    const {note, noteKey, ...rest} = this.props;
    return (
      <LinkContainer to={{ pathname: `edit/${noteKey}` }} {...rest}>
        <ListGroupItem>
          <button type="button" className="close" aria-label="Close" onClick={(e) => this.handleClose(e, noteKey)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="list-group-item-heading">{note.title}</h4>
          <p className="list-group-item-text">{note.text}</p>
        </ListGroupItem>
      </LinkContainer>
    );
  }
}

NotesListItemComponent.propTypes = {
  note: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired,
  noteKey: React.PropTypes.string.isRequired
};

export default connect()(NotesListItemComponent);
