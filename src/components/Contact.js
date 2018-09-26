import React, { Component } from 'react';

export default class Contact extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     needs: 'has'
  //   }
  // }

  render() {
    return (
      <div className="contact-container" id="contact">
        <div className="contact-inner">
          <h1>CONTACT</h1>
          <p> Whether you're a small business owner, aspiring entrepreneur or the CEO of a fortune 500 tech giant, I'm always excited for the opportunity to help businesses expand their web presence.  Please don't hesitate to reach out!
          </p>
          <form action="https://formspree.io/andrewdwattersdev@gmail.com" method="POST" className="contact-form">
            <div className="contact-form-upper" >
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="email" placeholder="email" />
            </div>
              <textarea type="text" name="message" placeholder="message" rows="4" cols="50"/>
            <input type="submit" value="Send" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    )
  }
}