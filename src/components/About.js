import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { MDBContainer, MDBIcon, MDBCol, MDBRow } from 'mdbreact';

const aboutIdStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)'
}

class About extends Component {

  handleArrowClick(el) {
    scrollToElement(el);
}

  render() {
    return(
        <MDBContainer fluid className="text-sm-justify text-center flex-center flex-column mx-auto pt-5 pb-5" id="about" style={aboutIdStyle}>
          <MDBRow className="mr-0 ml-0">
            <MDBCol className="text-center pl-0 pr-0">
              <h3 className="h6-responsive about-header text-center">About</h3>
                <div className="about-container">
                  <p className="lead w-75 mx-auto text-center" style={{ lineHeight: '2' }}>Loves JavaScript and learning new technologies. <br/> Travel enthusiast, healthy food addicted. Games and music maniac. <br /> Currently a freelancer. <br/> (｡◕‿◕｡)</p>
                </div>
                <span className="arrow"
                    onClick={() =>
                    this.handleArrowClick('#latest-work')}>
                    <MDBIcon icon="angle-down" className="arrow" />
                </span>   
              </MDBCol>
            </MDBRow>
          </MDBContainer> 

        )
    }
}


export default About