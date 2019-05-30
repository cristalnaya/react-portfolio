import React, { Component } from 'react';
import Home from '../components/Home'
import LatestWork from '../components/LatestWork';
import Sidebar from "../components/Sidebar";
import Footer from '../components/Footer';
import OverwatchSideNav from 'overwatch-side-nav/lib';
import AboutComponent from '../components/AboutComponent';
import { images } from '../components/data';
import './App.scss';


const colors = {
  default: '#f3c1c6',
  green: '#05a19c',
  pink: '#d698b9',
  mustard: '#fdd043',
  orange: '#ffba90',
  darkGreen: '#004a2f',
  grass: '#a7d129',
  purple: '#6f0765'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        colors: colors.default,
    };

    this.interval = setInterval(() => {
      const randomColor = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)
      ]
    ];
    this.setState(() => ({ colors: randomColor} ))
    }, 3000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}
 
  render() {

    const items = [
  
      {
        label: 'Latest Work',
        id: 'latest-work',
        icon: '<img src="https://i.imgur.com/U4OhEvQ.png" alt="Projects" style="margin-top: 2px;" />',
      },
      {
        label: 'About me',
        id: 'about',
        icon: '<img src="https://i.imgur.com/SFAKn3i.png" alt="User" style="margin-top: 2px;" />',
      },
      {
        label: 'Home',
        id: 'home',
        icon: '<img src="https://i.imgur.com/JN2i07H.png" alt="Home" style="margin-top: 2px;" />',
      }
    ]
    
    
    return (
      <div className="app"
      style={{ 
        backgroundColor: this.state.colors,
        height: '100vh',
      }}>
      <Sidebar
        distance={20}>
          <OverwatchSideNav items={items} />
      </Sidebar>
      <Home />
      <AboutComponent />
      <LatestWork images={images}/>
      <Footer />
    </div>
    )
  }
}

export default App;
