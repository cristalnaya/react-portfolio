import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element'
import { tada } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const jumbotronStyle = {
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    width: '75vw',
    lineHeight: '50px',
}
const Tada = styled.div`animation: 2s ${keyframes`${tada}`} 1s`;

class Home extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }

    render() {
      return (
        <div id="home" style={{ height: '100vh', display: 'flex' }}>
        
        <Jumbotron style={jumbotronStyle}>
        <Tada>
            <h1 className='main-header' style={{fontFamily: "'Roboto Mono', monospace"}}>Radostina Dimitrova✩</h1>
        </Tada>
            <h3 className='sub-header'>Front-End Web Developer</h3>
              
          <Row style={{padding: '3rem 0'}} className="show-grid social-icons">
            <Col xs={4}>
                <SocialIcon className='social-icons' url="https://www.linkedin.com/in/radostina-dimitrova" />
            </Col>
            <Col xs={4}>
                <SocialIcon className='social-icons' url="https://github.com/cristalnaya" />
            </Col>
            <Col xs={4}>
                <SocialIcon className='social-icons'
                url="https://codepen.io/dashboard/" />
            </Col>

           </Row>
           <div style={{ marginTop:'50px' }}>
            <span className="arrow"
                onClick={() =>
                this.handleArrowClick('#about')}>
                <FaAngleDown 
                className="arrow-down" />
            
            </span>   
            </div>
          </Jumbotron>
          </div>
        )
    }
}

export default Home;