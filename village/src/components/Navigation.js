import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavLink } from 'reactstrap';


const Navigation = () => {
  return (
    <div>
      <Navbar color= "light">
      <Nav className="App">
      <NavItem>
      <NavLink href="/" className="Nav-link">Home</NavLink>
      </NavItem>
      <NavItem>
      <NavLink href="/add" className="Nav-link">Add Friends</NavLink>
      </NavItem>
      </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
