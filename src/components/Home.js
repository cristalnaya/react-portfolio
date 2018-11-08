import React from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaAngleDown } from 'react-icons/fa';


class Home extends React.Component {
    render() {
      return (
          <div>
        <Grid>
        <Jumbotron>
            <h1>Hi, I am Tina. I am Front-end Web Developer</h1>
              <p>Learn more, what i do</p>
              <Link to="/about">
              <FaAngleDown 
              className="arrow-down" />
              </Link>
          </Jumbotron>
            
          <Row className="show-grid home-row">
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
          </div>
        )
    }
}

export default Home 