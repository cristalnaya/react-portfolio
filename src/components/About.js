import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element';


const aboutIdStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '50vh',
  background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

class About extends Component {

  handleArrowClick(el) {
    scrollToElement(el);
}

  render() {
    return(
        <div id="about" style={aboutIdStyle}>
          <h2 className="about-header">What About</h2>
          <div className="about-container">
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