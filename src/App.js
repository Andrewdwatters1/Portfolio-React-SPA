import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import LandingImageTop from './components/LandingImageTop';
import LandingImageBottom from './components/LandingImageBottom';
import Contact from './components/Contact';
import PrimaryContent from './components/PrimaryContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingImageTop />
        <PrimaryContent />
        <LandingImageBottom />
        <Contact />
      </div>
    );
  }
}

export default App;
