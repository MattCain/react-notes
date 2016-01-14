import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import CreateTodoButton from './CreateTodoButton';

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
          <CreateTodoButton />
        </Navbar.Form>
      </Nav>
    </Navbar>
  )
}

export default HeaderComponent;