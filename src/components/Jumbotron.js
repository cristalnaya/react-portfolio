import React, { Component } from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element'


class JumbotronPage extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }  
    render() {
      return (
        <MDBRow className="text-center flex-center w-100 mx-auto text-white" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        <MDBRow>
        <MDBCol className="mx-auto text-center">
            <MDBJumbotron style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <MDBAnimation type="tada">
            <h2 className="h1 display-3">Radostina Dimitrova✩</h2>
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
                    <FaAngleDown 
                    className="arrow" />
                </span>   
        </MDBCol>
        </MDBRow>
    </MDBRow>
  
    )
  }
}
export default JumbotronPage;