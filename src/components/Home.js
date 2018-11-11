import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';
import scrollToElement from 'scroll-to-element'

class Home extends React.Component {

    handleArrowClick(el) {
        scrollToElement(el);
    }

    render() {
      return (
        <div id="home">
        <Grid>
        <Jumbotron>
            <h1>Hi, I am Tina. I am Front-end Web Developer</h1>
              <span className="arrow"
                    onClick={() =>
                    this.handleArrowClick('#about')}>
                    <FaAngleDown 
                    className="arrow-down" />
                </span>   
          </Jumbotron>
            
          <Row className="show-grid social-icons">
            <Col xs={4}>
                <SocialIcon url="https://www.linkedin.com/in/radostina-dimitrova" />
            </Col>
            <Col xs={4}>
                <SocialIcon url="https://github.com/cristalnaya" />
            </Col>
            <Col xs={4}>
                <SocialIcon
                url="https://codepen.io/dashboard/" />
            </Col>
           </Row>
          </Grid>
          </div>
        )
    }
}

export default Home 