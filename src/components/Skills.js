import React, { Component } from 'react';

export default class Skills extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     needs: 'has'
  //   }
  // }
  render() {
    return (
      <div className="skills-container" id="skills">
        <h1>SKILLS/TECH</h1>
        <div class="skills-icons-container">
          <div className="icon-cont">
            <a href="https://reactjs.org/" target="_blank"><i class="fab fa-react skills-icons"></i></a>
            <p className="skills-icon-text">reactJS</p>
          </div>
          <div className="icon-cont">
            <a href="https://nodejs.org/en/" target="_blank"><i class="fab fa-node-js skills-icons"></i></a>
            <p className="skills-icon-text">nodeJS</p>
          </div>
          <div className="icon-cont">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><i class="fab fa-js skills-icons"></i></a>
            <p className="skills-icon-text">ES2015 JS</p>
          </div>
          <div className="icon-cont">
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><i class="fab fa-html5 skills-icons"></i></a>
            <p className="skills-icon-text">HTML5</p>
          </div>
          <div className="icon-cont">
            <a href="https://github.com/" target="_blank"><i class="fab fa-github skills-icons"></i></a>
            <p className="skills-icon-text">Github</p>
          </div>
          <div className="icon-cont">
            <a href="https://vuejs.org/" target="_blank"><i class="fab fa-vuejs skills-icons"></i></a>
            <p className="skills-icon-text">vueJS</p>
          </div>
          <div className="icon-cont">
            <a href="https://sass-lang.com/" target="_blank"><i class="fab fa-sass skills-icons"></i></a>
            <p className="skills-icon-text">Sass</p>
          </div>
          <div className="icon-cont">
            <a href="https://www.digitalocean.com/" target="_blank"><i class="fab fa-digital-ocean skills-icons"></i></a>
            <p className="skills-icon-text">Digital Ocean</p>
          </div>
          <div className="icon-cont">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><i class="fab fa-css3-alt skills-icons"></i></a>
            <p className="skills-icon-text">CSS3</p>
          </div>
          <div className="icon-cont">
            <a href="https://www.postgresql.org/" target="_blank"><i class="fas fa-database skills-icons"></i></a>
            <p className="skills-icon-text"> PostgreSQL</p>
          </div>
          <div className="icon-cont">
            <a href="https://git-scm.com/" target="_blank"><i class="fas fa-code-branch skills-icons"></i></a>
            <p className="skills-icon-text">Git</p>
          </div>
          <div className="icon-cont">
            <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)" target="_blank"><i class="fas fa-terminal skills-icons"></i></a>
            <p className="skills-icon-text">Terminal/CLI</p>
          </div>
        </div>
        <h2>AND MORE!</h2>
      </div>
    )
  }
}