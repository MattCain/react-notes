import React from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import { Input, ButtonInput } from 'react-bootstrap';
import { addNote, editNote } from '../actions/note';
import Immutable from 'Immutable';

class CreateNoteComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { action: 'Create', note: {} };
  }
  componentWillMount() {
    const idParam = this.props.params.id;
    const editNote = this.props.notes.get(idParam);

    if (idParam && editNote) {
      this.setState({
        action: 'Edit',
        note: editNote,
        id: idParam
      });
    } else if (idParam && !editNote) {
      this.setState({action: '404'});
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { title, text } = this.refs;
    const formVals = [title.getValue(), text.getValue()];
    let action;

    if (this.state.action === 'Create') {
      action = addNote(...formVals);
    } else {
      action = editNote(...formVals, this.state.id);
    }
    dispatch(action)
    dispatch(routeActions.push('/'));
  }
  render() {
    if (this.state.action === '404') {
      return (<h1>Not Found</h1>);
    }
    return (
      <div className="col-md-12">
        <h2>{this.state.action} a Note</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Input type="text" label="Note Title" ref="title" defaultValue={this.state.note.title} autoFocus />
          <Input type="textarea" label="Note Text" ref="text" defaultValue={this.state.note.text} />
          <ButtonInput type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

CreateNoteComponent.propTypes = {
  notes: React.PropTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  state => ({ notes: state.notes })
)(CreateNoteComponent);