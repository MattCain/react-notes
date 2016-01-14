import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const CreateTodoButtonComponent = () => {
  return (
      <LinkContainer to="/create">
        <Button bsStyle="default" bsSize="small" className="navbar-btn">Create Todo</Button>
      </LinkContainer>
  );
}

export default CreateTodoButtonComponent;