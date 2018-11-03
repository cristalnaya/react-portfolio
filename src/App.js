import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import HomePage from './components/HomePage'


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header className="Header"/>
        <HomePage className="HomePage" />
        
      </div>
    );
  }
}

export default App;
