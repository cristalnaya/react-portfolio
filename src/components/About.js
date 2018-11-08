import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import { FaJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';


class About extends React.Component {
    render() {
        return(
            <div>
              <Grid className="about-page">
                           
                <Col className="about-left" xs={12} sm={6} md={3} lg={6}>
                    <h2 className="skills">Skills</h2>                    
                <FaHtml5 className="skill-type" />
                <FaCss3 className="skill-type" />
                <FaJs className="skill-type" />
                <FaReact className="skill-type" />

                  
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