import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { deleteTodo } from '../actions/todo';
import Immutable from 'Immutable';

class TodosListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose(e, index) {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(deleteTodo(index));
  }
  render() {
    return (
      <ListGroup>
        {this.props.todos.size ? this.props.todos.map((item, i) => {
          return (
            <LinkContainer to={{ pathname: `edit/${i}` }} key={i}>
              <ListGroupItem>
                <button type="button" className="close" aria-label="Close" onClick={(e) => this.handleClose(e, i)}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="list-group-item-heading">{item.title}</h4>
                <p className="list-group-item-text">{item.text}</p>
              </ListGroupItem>
            </LinkContainer>);
        }).toArray() : (<ListGroupItem>No todos</ListGroupItem>)}
      </ListGroup>
    )
  }
}

TodosListComponent.propTypes = {
  todos: React.PropTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  state => ({ todos: state.todos })
)(TodosListComponent);