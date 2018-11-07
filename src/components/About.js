import React from 'react';
import { Grid, ProgressBar, Col } from 'react-bootstrap';


class About extends React.Component {
    render() {
        return(
            <div>
                <Grid>
                <Col xs={12} sm={8} smOffset>
                    Skills
                    <ProgressBar label="HTML" bsStyle="success" active now={85} />
                    <ProgressBar bsStyle="warning" label="CSS" active now={80} />
                    <ProgressBar label="JavaScript" active now={65} />
                    <ProgressBar label="React" active now={75} />
                    <ProgressBar label="Bootstrap" bsStyle="danger" active now={80} />

                </Col>
                </Grid>

            </div>

        )
    }
}


export default About