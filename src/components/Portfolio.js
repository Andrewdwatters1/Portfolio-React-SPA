import React, { Component } from 'react';

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      needs: 'has'
    }
  }
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-piece-container">
        <h1>Momentum 2.0</h1>
        <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
        <div className="portfolio-piece-container">
        <h1>Group Project</h1>
        <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
        <div className="portfolio-piece-container">
        <h1>VueJS/Sass Project</h1>
        <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
      </div>
    )
  }
}

export default Portfolio;