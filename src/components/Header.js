import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

class Header extends React.Component {
  render() {
   return(
    <div className="navbar">
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#name">Radostina Dimitrova</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="#">
                Home
            </NavItem>
            <NavItem eventKey={2} href="#">
                About
            </NavItem>
        </Nav>
        <Nav className="work" pullRight>
            <NavItem eventKey={1} href="#Latest Work">
        Latest Work
            <div className="arrow">
                <FaAngleDoubleRight />
            </div>
            </NavItem>
     
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
   )
 }

}

export default Header;