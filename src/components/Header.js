import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';

class Header extends React.Component {
  render() {
   return(
    <div className="navbar">
    <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#home">Radostina Dimitrova</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="#home">
                Home
            </NavItem>
            <NavItem eventKey={2} href="#about">
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