import React, { Component } from 'react';

class Skills extends Component {
  constructor() {
    super()
    this.state = {
      needs: 'has'
    }
  }
  render() {
    return (
      <div className="skills-container">
        <h1>Skills</h1>
        <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>

        <div class="skills-icons-container">
        <img src={require('../images/skills-logos/react.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/node.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/javascript.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/js.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/html5.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/css3.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/postgresql.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/express.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/auth0.png')} className="skills-icons"/>
        </div>
      </div>
    )
  }
}

export default Skills;