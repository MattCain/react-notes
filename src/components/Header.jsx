import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import CreateNoteButton from './CreateNoteButton';

const HeaderComponent = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">React Notes</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <CreateNoteButton />
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderComponent;