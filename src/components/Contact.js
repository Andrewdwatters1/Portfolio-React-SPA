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
        <div className="contact-inner">
        <h1>CONTACT</h1>
          <p>If you would like to get in touch, please don't hesitate to reach out. You can find my contact information as well as links to my Github and other social media accounts below. </p>
          <p>Phone: (719) 431-3749</p>
          <p>Email: Andrewdwattersdev@gmail.com</p>
          <form action="https://formspree.io/andrewdwattersdev@gmail.com" method="POST">
            <input type="text" name="name" placeholder="name"/>
            <input type="email" name="email" placeholder="email"/>
            <input type="text" name="message" placeholder="message"/>
            <input type="submit" value="Send"/>
            <input type="text" name="_gotcha" style={{display: 'none'}}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;