import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element'
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const SlideInDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 2s`;

class Home extends Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }

    render() {
      return (
        <div id="home">
        <Grid>
        <Jumbotron>
        <SlideInDown>
            <h1 style={{fontFamily: "'Roboto Mono', monospace"}}>Hi, I am Tina!</h1>
        </SlideInDown>
            <p>Front-end Web Developer</p>
              <span className="arrow"
                    onClick={() =>
                    this.handleArrowClick('#about')}>
                    <FaAngleDown 
                    className="arrow-down" />
                </span>   
          </Jumbotron>
            
          <Row className="show-grid social-icons">
            <Col xs={4}>
            <SlideInDown>
                <SocialIcon url="https://www.linkedin.com/in/radostina-dimitrova" />
            </SlideInDown>
            </Col>
            <Col xs={4}>
            <SlideInDown>
                <SocialIcon url="https://github.com/cristalnaya" />
            </SlideInDown>
            </Col>
                <Col xs={4}>
                    <SlideInDown>
                    <SocialIcon
                    url="https://codepen.io/dashboard/" />
                    </SlideInDown>
                </Col>

           </Row>
          </Grid>
          </div>
        )
    }
}

export default Home 