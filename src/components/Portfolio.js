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
        <h1>Portfolio</h1>
        <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
      </div>
    )
  }
}

export default Portfolio;