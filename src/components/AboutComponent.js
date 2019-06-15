import React, { Component } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import Skills from './Skills';
import About from './About';
import { icons } from '../components/data';
import scrollToElement from 'scroll-to-element';


export default class AboutComponent extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }
    
    render() {
        return (
            <MDBContainer fluid id="about-component" className="text-white flex-center flex-column h-auto pb-sm-3 pt-sm-3">
            <MDBRow className="">
                <MDBCol sm="4" className="about-col">
                  <About />
                </MDBCol>
                <MDBCol sm="8" className="skills-col pb-sm-3 pt-sm-3">
                 <Skills icons={icons} />
                </MDBCol>

            </MDBRow>
            <MDBRow className="arrow-row">
                <span className="arrow pb-sm-3 pt-sm-3"
                    onClick={() =>
                    this.handleArrowClick('#latest-work')}>
                    <MDBIcon icon="angle-down" className="arrow" />
                </span>   
            </MDBRow>
            </MDBContainer>
        )
    }
}
