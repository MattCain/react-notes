import React from 'react';
import { routeActions } from 'redux-simple-router';
import { connect } from 'react-redux';
import { Input, ButtonInput } from 'react-bootstrap';
import { addTodo, editTodo } from '../actions/todo';
import Immutable from 'Immutable';

class CreateTodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { action: 'Create', todo: {} };
  }
  componentWillMount() {
    const idParam = this.props.params.id;
    const editTodo = this.props.todos.get(idParam);

    if (idParam && editTodo) {
      this.setState({
        action: 'Edit',
        todo: editTodo,
        id: idParam
      });
    } else if (idParam && !editTodo) {
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
      action = addTodo(...formVals);
    } else {
      action = editTodo(...formVals, this.state.id);
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
          <Input type="text" label="Note Title" ref="title" defaultValue={this.state.todo.title} autoFocus />
          <Input type="textarea" label="Note Text" ref="text" defaultValue={this.state.todo.text} />
          <ButtonInput type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

CreateTodoComponent.propTypes = {
  todos: React.PropTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  state => ({ todos: state.todos })
)(CreateTodoComponent);