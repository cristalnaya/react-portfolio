import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Header';
import Home from './components/Home'
import About from './components/About'
import LatestWork from './components/LatestWork'


class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
      <div className="home-page">
      <Navbar />
        <Route exact path="/" component={Home} />
        </div>
        <div>

        <Route path="/about" component={About} />
        </div>
        <Route path="/latest work" component={LatestWork} />
      </div>
      
      </Router>
    );
  }
}

export default App;
