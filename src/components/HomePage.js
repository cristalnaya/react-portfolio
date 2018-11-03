import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class HomePage extends React.Component {
    render() {
        return (
            <Jumbotron className="mainPage">
            <h1>Hi, I am Tina. I am Front-end Web Developer</h1>
            
            <p>
              <Button bsStyle="primary">Learn more, what i do</Button>
            </p>
          </Jumbotron>

        )
    }
}

export default HomePage 