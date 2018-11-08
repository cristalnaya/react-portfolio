import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';


class About extends React.Component {
    render() {
        return(
            <div>
              <Grid className="about-page">
              <Row className="show-grid">

              </Row>
              
                <Col className="about-left" xs={12} sm={6} md={3} lg={6}>
                    <h2 className="skills">Skills</h2>
                    
                    <Col xs={4}>
                <FaJs url="https://www.linkedin.com/in/radostina-dimitrova" />
            </Col>
            <Col xs={4}>
                <FaHtml5 className="icon" url="https://github.com/cristalnaya" />
            </Col>
            <Col xs={4}>
                <FaCss3 url="https://codepen.io/dashboard/" />
            </Col>
               </Col>
               <Col className="about-right" xs={12} sm={6} lg={6}>
                    <h2 className="info">About</h2>
                    
               </Col>
             
             </Grid>  
             </div> 

        )
    }
}


export default About