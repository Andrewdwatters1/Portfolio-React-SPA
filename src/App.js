import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import LandingImageTop from './components/LandingImageTop';
import PrimaryContent from './components/PrimaryContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingImageTop />
        <PrimaryContent />
      </div>
    );
  }
}

export default App;
