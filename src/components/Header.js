import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa';

class Header extends React.Component {
  render() {
   return(
    <div className="navbar">
    <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <Link to="/">Radostina Dimitrova</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                About
            </NavItem>
        </Nav>
        <Nav className="work" pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/latest work" to="/latest work">
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