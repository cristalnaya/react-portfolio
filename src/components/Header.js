import React, { Component } from 'react';
import NavbarPage from './Navbar';
import { MDBRow } from "mdbreact";

class Header extends Component {

    render() {
        return(
            <MDBRow id='header' className="w-100">
              <NavbarPage />  
            </MDBRow>
        )
    }
}

export default Header;