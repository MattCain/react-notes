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
      </Navbar.Header>
      <Nav pullRight>
        <Navbar.Form>
          <CreateNoteButton />
        </Navbar.Form>
      </Nav>
    </Navbar>
  )
}

export default HeaderComponent;