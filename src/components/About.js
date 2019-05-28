import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const aboutIdStyle = {
  color: '#fff',
  fontSize: '1.2rem',
  lineHeight: '1.5',
}

class About extends Component {

  render() {
    return(
        <MDBContainer fluid className="text-center flex-center flex-column mx-auto pb-sm-1 pt-sm-1" id="about" style={aboutIdStyle}>
          <MDBRow className="mr-0 ml-0 w-responsive">
            <MDBCol className="text-center pl-0 pr-0">
              <h3 className="h6-responsive about-header text-center">About</h3>
                <div className="about-container">
                  <p className="mx-auto text-center text-sm-center">Loves JavaScript and learning new technologies. <br/> Travel enthusiast, healthy food addicted. Games and music maniac. <br/> (｡◕‿◕｡)</p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer> 
        )
    }
}


export default About