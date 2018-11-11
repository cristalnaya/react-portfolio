import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element'
import Scrollchor from 'react-scrollchor';

class Header extends React.Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }

  render() {
   return(
    <div className="navbar">
    <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <Scrollchor to="#home" className="nav-link">Radostina Dimitrova</Scrollchor>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}  href="#">
            <Scrollchor to="#home" className="nav-link">Home</Scrollchor>
          </NavItem>
            <NavItem eventKey={2} href="#">
                <Scrollchor to="#about" className="nav-link">About</Scrollchor>
            </NavItem>
        </Nav>
        <Nav className="work" pullRight>
            <NavItem eventKey={1} href="#">
            <Scrollchor to="#latest-work" className="nav-link">Latest Work</Scrollchor>
            <div className="arrow-btn-right">
            <span className="arrow-right"
                    onClick={() =>
                    this.handleArrowClick('#latest-work')}>
                    <FaAngleDoubleRight
                    />
                </span>   
               
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