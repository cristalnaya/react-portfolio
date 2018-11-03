import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

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
            Contacts
        </NavItem>
        <NavItem eventKey={3} href="#">
            Latest Work
        </NavItem>
        </Nav>
        <Navbar.Form pullRight>
        <FormGroup>
        <FormControl type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Navbar.Collapse>
    </Navbar>
    </div>
   )
 }

}

export default Header;