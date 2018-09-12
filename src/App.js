import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LandingImage from './components/LandingImage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <LandingImage/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    );
  }
}

export default App;
