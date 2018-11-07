import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';


class HomePage extends React.Component {
    render() {
        return (
          <Grid id="home">
            
            <Jumbotron>
            <h1>Hi, I am Tina. I am Front-end Web Developer</h1>
              <p><a href="#about">Learn more, what i do</a></p>
              <FaAngleDown 
              href="#about"
              className="arrowDown" />
          </Jumbotron>
            
          <Row className="show-grid">
            <Col xs={4}>
                <SocialIcon url="https://www.linkedin.com/in/radostina-dimitrova" />
            </Col>
            <Col xs={4}>
                <SocialIcon className="icon" url="https://github.com/cristalnaya" />
            </Col>
            <Col xs={4}>
                <SocialIcon url="https://codepen.io/dashboard/" />
            </Col>
           </Row>
  
         </Grid>

        )
    }
}

export default HomePage 