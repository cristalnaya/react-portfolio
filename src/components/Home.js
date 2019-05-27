import React, { Component } from 'react';
import { MDBRow } from "mdbreact";
import JumbotronPage from './Jumbotron';
import Navbar from './Navbar';

class Home extends Component {

    render() {
      return (
        <MDBRow id="home" className="h-100 w-responsive flex-center mx-auto text-white">
            <Navbar />
            <JumbotronPage />
        </MDBRow>
        )
    }
}

export default Home;