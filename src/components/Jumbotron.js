import React, { Component } from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBAnimation, MDBIcon, MDBContainer } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import scrollToElement from 'scroll-to-element'


class JumbotronPage extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }  
    render() {
      return (
        <MDBContainer fluid className="text-center flex-center w-responsive mx-auto text-white" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        <MDBRow className="mr-0 ml-0">
        <MDBCol className="text-center pl-0 pr-0">
            <MDBJumbotron className="" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <MDBAnimation type="tada">
            <h1 className="h1-responsive display">Radostina Dimitrova</h1>
            </MDBAnimation>
            <hr className="my-2" color="white" />
            <h4 className="role pb-4 h4-responsive">Front-End Web Developer</h4>
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
    </MDBContainer>
  
    )
  }
}
export default JumbotronPage;