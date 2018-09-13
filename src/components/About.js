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
          <h1>About Me</h1>
          <p>asdf asfd afsd adfs fad fdas dfsa dfsa dafs dfas dfsa dfsa dfsa asdf asfd afsd adfs fad fdas dfsa dfsa dafs dfas dfsa dfsa dfsa dasdf asfd afsd adfs fad fdas dfsa dfsa dafs dfas dfsa dfsa dfsa fasdf asfd afsd adfs fad fdas dfsa dfsa dafs dfas dfsa dfsa dfsa sa dfsa dfsa dfsa dfsa dfsa fdsa dfsa fdsa dfsa dfs dfs dfsa dfsa dfsa dfsa dfs fdsa dfsa dfs fdsa adfs a</p>
        </div>
    )
  }
}

export default About;