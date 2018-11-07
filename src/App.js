import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/latest work" component={Home} />
        {/* <Header className="Header" />
        <Home className="HomePage" />
        <About /> */}
      </div>
      </Router>
    );
  }
}

export default App;
