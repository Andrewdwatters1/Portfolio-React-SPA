import React, { Component } from 'react';
import { ToastContainer, ToastStore } from 'react-toasts';

import resume from '../images/Andrew_Watters_resume.pdf'

export default class Contact extends Component {

  thankYou = () => {
    ToastStore.success('Thanks for reaching out! I will be in touch soon!')
  }
  render() {
    return (
      <div className="contact-container" id="contact">
        <div>
          <h1 className="contact-title">CONTACT</h1>
          <div className="contact-inner">
            <p> Whether you're a small business owner, aspiring entrepreneur or the CEO of a fortune 500 tech giant, I'm always excited for the opportunity to help businesses expand their web presence.  Please don't hesitate to reach out!
          </p>
            <form action="https://formspree.io/andrewdwattersdev@gmail.com" method="POST" className="contact-form" onSubmit={this.thankYou} id="contact-form">
              <div>
                <input type="text" name="name" placeholder="name" className="contact-input" />
                <input type="text" name="email" placeholder="email" className="contact-input" />
              </div >
              <textarea type="text" name="message" placeholder="message" rows="5" cols="50" className="contact-input-text" />
              <input type="submit" value="Send" className="contact-submit" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
            </form>
            <div className="contact-social">
              <a href="https://github.com/Andrewdwatters1" target="_blank"><i className="fab fa-github social-buttons"></i></a>
              <a href="https://www.linkedin.com/in/adwatters" target="_blank"><i className="fab fa-linkedin-in social-buttons"></i></a>
              <a href="mailto:andrewdwatters1@gmail.com?cc=andrewdwattersdev@gmail.com&subject=Portfolio%20Inquiry&body=Hey%20Andrew,%0D%0A"><i className="far fa-envelope social-buttons"></i></a>
              <a href={resume} target="_blank"><i class="far fa-file-alt social-buttons"></i></a>
            </div>
          </div>
          <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
        </div>

      </div>
    )
  }
}