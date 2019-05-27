import React, { Component } from 'react'
import { MDBContainer } from "mdbreact";


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-copyright text-center py-3 elegant-color text-white">
              <MDBContainer fluid>
                <p>Designed by Radostina Dimitrova | © {new Date().getFullYear()} Copyright</p>
              </MDBContainer>
            </div>
        )
    }
}
