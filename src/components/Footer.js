import React, { Component } from 'react'

const footerStyle = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #2c3e50, #767b7e)',
    bottom: 0,
    fontSize: '1.2rem'
}
export default class Footer extends Component {
    render() {
        return (
            <div className='footer text-white' style={footerStyle}>
                <p>Designed by Radostina Dimitrova | © 2019</p>
            </div>
        )
    }
}
