import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      needs: 'has'
    }
  }
  render() {
    return (
      <div className="contact-container">
        <div>
          Contact
          </div>
      </div>
    )
  }
}

export default Contact;