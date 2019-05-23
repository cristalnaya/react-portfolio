import React, { Component } from 'react'

const footerStyle = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#6fc2d0'
}
export default class Footer extends Component {
    render() {
        return (
            <div className='footer' style={footerStyle}>
                <p>Page by Tina 2019 | ©</p>
            </div>
        )
    }
}
