import React from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


class HomePage extends React.Component {
    render() {
        return (
          <Grid>
            <Jumbotron className="mainPage">
            <h1>Hi, I am Tina. I am Front-end Web Developer</h1>
            
            <p>
              <Button bsStyle="primary">Learn more, what i do</Button>
            </p>
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