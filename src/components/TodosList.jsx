import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { deleteTodo } from '../actions/todo';

class TodosListComponent extends React.Component {
  handleClose(e, index) {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(deleteTodo(index));
  }
  render() {
    return (
      <ListGroup>
        {this.props.todos.length ? this.props.todos.map((item, i) => {
          return (<ListGroupItem key={i}>
            <button type="button" className="close" aria-label="Close" onClick={(e) => this.handleClose(e, i)}>
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="list-group-item-heading">{item.title}</h4>
            <p className="list-group-item-text">{item.text}</p>
          </ListGroupItem>);
        }) : (<ListGroupItem>No todos</ListGroupItem>)}
      </ListGroup>
    )
  }
}

export default connect(
  state => ({ todos: state.todos })
)(TodosListComponent);