import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super()
    this.state = {
      needs: 'has'
    }
  }
  render() {
    return (
        <div className="about-container">
          <h1>ABOUT ME</h1>
          <p>I am an enthusiastic leader with a passion for learning and self-development. I love working with small teams to find innovative and performant solutions to complex problems.  I currently serve in the Colorado Army National Guard as the Operations Officer for a High Mobility Artillery Rocket Systems unit.  In my downtime, I enjoy weightlifting, hiking and camping with my wife Lauren and our pooch, Miso. I'm a lifelong Denver Broncos and Chelsea FC fan, and I enjoy photography and being in nature. </p>
        </div>
    )
  }
}

export default About;