import React, { Component } from 'react';
import './App.scss';
import './scss/About.scss'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import LatestWork from './components/LatestWork'


class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Header />
      <Home />
      <About />
      <LatestWork />
  </div>
    )
  }
}

export default App;
