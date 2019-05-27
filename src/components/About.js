import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { MDBContainer, MDBIcon } from 'mdbreact';

const aboutIdStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

class About extends Component {

  handleArrowClick(el) {
    scrollToElement(el);
}

  render() {
    return(
        <div className="text-justify text-center flex-center h-auto pt-5 pb-5" id="about" style={aboutIdStyle}>
          <MDBContainer className="w-responsive">
          <h2 className="h3-responsive about-header display-4">What About</h2>
            <div className="about-container">
              <p className="lead w-75 mx-auto text-center" style={{ fontSize: '2rem', lineHeight: '2' }}>Loves JavaScript and learning new technologies. <br/> Travel enthusiast, healthy food addicted. Games and music maniac. <br /> Currently a freelancer. <br/> (｡◕‿◕｡)</p>
            </div>
            <span className="arrow"
                onClick={() =>
                this.handleArrowClick('#latest-work')}>
                <MDBIcon icon="angle-down" className="arrow" />
            </span>   

          </MDBContainer>
          </div> 

        )
    }
}


export default About