import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class LatestWork extends React.Component {
    render() {
        return(
            <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} sm={6}>
                    <h2>Latest Work</h2>
            
                </Col>
              </Row>
            </Grid>
            </div>

        )
    }
}


export default LatestWork