import React, { Component } from 'react'

const footerStyle = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2C5364',
    bottom: 0
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
