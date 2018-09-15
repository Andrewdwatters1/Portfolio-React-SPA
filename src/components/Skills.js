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
      <div className="skills-container" id="skills">
        <h1>SKILLS</h1>
        <div class="skills-icons-container">
        {/* <img src={require('../images/skills-logos/react.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/postgresql.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/auth0.png')} className="skills-icons jest-icon"/>
        <img src={require('../images/skills-logos/express.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/node.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/javascript.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/html5.png')} className="skills-icons"/>
        <img src={require('../images/skills-logos/css3.png')} className="skills-icons"/> */}
        {/* <img src={require('../images/skills-logos/js.png')} className="skills-icons"/> */}
        <div className="icon-cont">
        <i class="fab fa-react skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-node-js skills-icons"></i>
        <p className="skills-icon-text">nodeJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-js skills-icons"></i>
        <p className="skills-icon-text">ES2015</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-html5 skills-icons"></i>
        <p className="skills-icon-text">HTML5</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-github skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-vuejs skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-sass skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-digital-ocean skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fab fa-css3-alt skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fas fa-database skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fas fa-terminal skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        <div className="icon-cont">
        <i class="fas fa-code-branch skills-icons"></i>
        <p className="skills-icon-text">reactJS</p>
        </div>
        </div>
        <h2>AND MORE!</h2>
      </div>
    )
  }
}

export default Skills;