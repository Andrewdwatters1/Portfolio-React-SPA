import React, { Component } from 'react';
import { ToastContainer, ToastStore } from 'react-toasts';

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      windowWidth: window.innerWidth
    }
  }

  handleResize = (e) => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  thankYou = () => {
    ToastStore.success('Thanks for reaching out! I will be in touch soon!')
  }

  render() {
    return (
      <div className="about-container" id="contact">

        <h1>{this.state.windowWidth > 650 ? "CONTACT" : "GET SOCIAL"}</h1>

        {this.state.windowWidth > 650 ?
          <div>
            <div className="contact-form-container">
              <p style={{ maxWidth: '70%' }}>If your organization is expanding and you're looking for a motivated, experienced full-stack developer, fill out the contact form and I'll respond as soon as I'm able to talk about how I can bring value to your team!</p>
              <form
                action="https://formspree.io/andrewdwattersdev@gmail.com"
                method="POST"
                onSubmit={this.thankYou}
                id="contact-form"
                className="contact-form">
                <input type="text" name="name" placeholder="name" className="contact-input font-size-main" />
                <input type="text" name="email" placeholder="email" className="contact-input font-size-main" />
                <textarea type="text" name="message" placeholder="message" className="contact-input font-size-main" />
                <input type="submit" value="Send" className="contact-submit font-size-main" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} value="_" />
              </form>
            </div>
            <div className="contact-social">
              <a href="https://github.com/Andrewdwatters1"><i className="fab fa-github social-buttons"></i></a>
              <a href="https://www.linkedin.com/in/adwatters"><i className="fab fa-linkedin-in social-buttons"></i></a>
              <a href="mailto:andrewdwatters1@gmail.com?cc=andrewdwattersdev@gmail.com&subject=Portfolio%20Inquiry&body=Hey%20Andrew,%0D%0A"><i className="far fa-envelope social-buttons"></i></a>
              <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
            </div>
          </div>
          :
          <div className="contact-social">
            <a href="https://github.com/Andrewdwatters1"><i className="fab fa-github social-buttons"></i></a>
            <a href="https://www.linkedin.com/in/adwatters"><i className="fab fa-linkedin-in social-buttons"></i></a>
            <a href="mailto:andrewdwatters1@gmail.com?cc=andrewdwattersdev@gmail.com&subject=Portfolio%20Inquiry&body=Hey%20Andrew,%0D%0A"><i className="far fa-envelope social-buttons"></i></a>
          </div>
        }
      </div>
    )
  }
}