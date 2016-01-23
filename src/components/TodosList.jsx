import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TodosListComponent extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos.length ? this.props.todos.map((item, i) => {
          return (<ListGroupItem key={i}>
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