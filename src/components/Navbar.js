import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
       <Router>
        <MDBNavbar className="font-weight-bolder h6-responsive" color="elegant-color" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand className="flex-center hoverable h6-responsive">
            <a href="https://github.com/cristalnaya/react-portfolio" className="text-white waves-effect waves-light repo-link" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="github-alt" /> Repo</a>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav right>
                <MDBNavItem className="p-2 hoverable" active>
                <Scrollchor to="#home" className="nav-link">
                Home
                </Scrollchor>
                </MDBNavItem>
                <MDBNavItem className="p-2 hoverable">
                <Scrollchor to="#about-component" className="nav-link">
                About
                </Scrollchor>
                </MDBNavItem>
                <MDBNavItem className="p-2 hoverable">
                <Scrollchor to="#latest-work" className="nav-link">
                Latest Work
                </Scrollchor>
                </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
       </Router>
    </div>
    );
  }
}

export default Navbar;