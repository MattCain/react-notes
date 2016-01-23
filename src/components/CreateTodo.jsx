import React from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import { Input, ButtonInput } from 'react-bootstrap';
import { addTodo } from '../actions/todo';

class CreateTodoComponent extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { title, text } = this.refs;

    dispatch(addTodo(title.getValue(), text.getValue()));
    dispatch(routeActions.push('/'));
  }
  render() {
    return (
      <div className="col-md-12">
        <h2>Create a Note</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Input type="text" label="Note Title" ref="title" />
          <Input type="textarea" label="Note Details" ref="text" />
          <ButtonInput type="submit" value="Submit Button" />
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({})
)(CreateTodoComponent);