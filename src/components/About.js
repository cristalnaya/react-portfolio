import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
// import '../scss/About.scss'


class About extends React.Component {
    render() {
        return(
            <div id="about">
            <div className="hr-line"></div>
             <Grid>            
              <Row className="show-grid">
                <Col className="skills-container" xs={12} md={10} lg={8}>
                  <h2 className="skill-header">Skills</h2>
                  <ul className="skills">
                    <li className="skill-type">HTML5</li>
                    <li className="skill-type">CSS3</li>
                    <li className="skill-type">JavaScript</li>
                    <li className="skill-type">React</li>
                    <li className="skill-type">ES6</li>
                    <li className="skill-type">jQuery</li>
                    <li className="skill-type">AJAX</li>
                    <li className="skill-type">Git</li>
                    <li className="skill-type">Sass</li>
                    <li className="skill-type">Jasmine</li>
                  </ul> 
                  </Col>
                  <Col className="about-container" xs={9} md={4} lg={4}>
                    <h2 className="about-header">What About Me</h2>
                        <p>I am a Front-end web developer, lifelong learner, self-taught, passionate about achieving excellence in my coding.</p>
                  </Col>
              </Row>
                </Grid>
             </div> 

        )
    }
}


export default About