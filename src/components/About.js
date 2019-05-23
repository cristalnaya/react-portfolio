import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element';


class About extends Component {

  handleArrowClick(el) {
    scrollToElement(el);
}

  render() {
    return(
        <div id="about">
          
          <div className="about-container" style={{display: 'flex',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '70%', margin: 'auto', padding: '0 20px 20px',}}>
                <h2 className="about-header">What About Me</h2>
                  <p>Loves JavaScript and learning new stuff. Travel enthusiast, healthy food addicted. Currently a freelancer. <br/> (｡◕‿◕｡)</p>
           </div>
            <span className="arrow"
                onClick={() =>
                this.handleArrowClick('#latest-work')}>
                <FaAngleDown 
                className="arrow-down" />
            </span>   
          </div> 

        )
    }
}


export default About