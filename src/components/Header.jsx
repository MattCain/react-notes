import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

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
          <LinkContainer to="/create">
            <Button>Create Note</Button>
          </LinkContainer>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderComponent;