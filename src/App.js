import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header className="Header"/>
        <h1>Portfolio</h1>
      </div>
    );
  }
}

export default App;
