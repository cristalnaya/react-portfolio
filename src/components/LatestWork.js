import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class LatestWork extends React.Component {
    onEnter={function(){
        document.getElementById("latest-work_id").scrollIntoView();
        }
    }
    render() {
        return(
            <div id="latest-work">
            <div className="hr-line"></div>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} sm={6}>
                    <h2 className="work-header">Latest Work</h2>
            
                </Col>
              </Row>
            </Grid>
            </div>

        )
    }
}


export default LatestWork