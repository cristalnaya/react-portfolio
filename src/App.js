import React, { Component } from 'react';
import './App.scss';
import './scss/About.scss'
import Home from './components/Home'
import About from './components/About'
import LatestWork from './components/LatestWork'
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';
import OverwatchSideNav from 'overwatch-side-nav/lib';
import Skills from './components/Skills';
import { images } from './components/images';
import { icons } from './components/icons';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         offset: 0
    }
}

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  render() {

    const items = [
  
      {
        label: 'Latest Work',
        id: 'latest-work',
        icon:  '<img src="https://i.imgur.com/U4OhEvQ.png" alt="Toolkit" style="margin-top: 2px;" />',
      },
    
      {
          label: 'About me',
          id: 'about',
          icon:  '<img src="https://i.imgur.com/SFAKn3i.png" alt="User icon" style="margin-top: 2px;" />',
      },
      {
        label: 'Skills',
        id: 'skills',
        icon:  '<img src="https://i.imgur.com/gsp0Vs2.png" alt="Code icon" />',
    },
      {
          label: 'Home',
          id: 'home',
          icon:  '<img src="https://i.imgur.com/JN2i07H.png" alt="home" style="margin-top: 2px;" />',
      }
    ]
    
    const Sections = () => <div>{[...Array(items.length)].map((_, index) =>
        <section id={items[index].id} key={index}>
            {`${index + 1}`}
        </section>)
    }

    </div>
    return (
      <div className="App">
        <Sidebar
          distance={20}>
            <OverwatchSideNav items={items} />
        </Sidebar>
          <Home />
          <About />
          <Skills icons={icons} />
          <LatestWork images={images}/>
          <Footer />
  </div>
    )
  }
}

export default App;
