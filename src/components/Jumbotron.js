import React, { Component } from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBAnimation, MDBIcon } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import scrollToElement from 'scroll-to-element'


class JumbotronPage extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }  
    render() {
      return (
        <MDBRow className="text-center flex-center w-responsive mx-auto text-white" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        <MDBRow>
        <MDBCol className="mx-auto text-center">
            <MDBJumbotron style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <MDBAnimation type="tada">
            <h2 className="h1-responsive">Radostina Dimitrova✩</h2>
            </MDBAnimation>
            <hr className="my-2" />
            <p className="role pb-4">Front-End Web Developer</p>
            <MDBRow className="social-icons">
                <MDBCol>
                <SocialIcon className='social-icons' url="https://www.linkedin.com/in/radostina-dimitrova" target="_blank" rel="noopener noreferrer" />
                </MDBCol>
                <MDBCol>            
                    <SocialIcon className='social-icons' url="https://github.com/cristalnaya" target="_blank" rel="noopener noreferrer" />
                </MDBCol>
                <MDBCol>
                <SocialIcon className='social-icons'
                        url="https://codepen.io/dashboard/" target="_blank" rel="noopener noreferrer" />
                </MDBCol>
            </MDBRow>
            </MDBJumbotron>
                <span
                    onClick={() =>
                    this.handleArrowClick('#about')}>
                    <MDBIcon icon="angle-down" className="arrow" />
                </span>   
        </MDBCol>
        </MDBRow>
    </MDBRow>
  
    )
  }
}
export default JumbotronPage;