import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const CreateNoteButtonComponent = () => {
  return (
      <LinkContainer to="/create">
        <Button>Create Note</Button>
      </LinkContainer>
  );
}

export default CreateNoteButtonComponent;