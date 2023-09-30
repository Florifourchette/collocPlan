import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="navBar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Colloc'Plan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" activeStyle>
                Home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                to="/scheduler"
                activeStyle
              >
                Scheduler
              </NavLink>
              <NavLink to="/profile" activeStyle>
                Profile
              </NavLink>
              <NavLink to="/grocery" activeStyle>
                Grocery
              </NavLink>
              <NavLink to="/userCreation" activeStyle>
                User creation
              </NavLink>
              <NavLink to="/newColoc" activeStyle>
                New Coloc
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
