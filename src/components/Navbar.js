import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  handleResize = (e) => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }
  handleScroll = (e) => {
    var navbar = document.getElementById('navbar');
    var sticky = 30;
    console.log(sticky);
    console.log(window.pageYOffset);
    if(window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        {
          this.state.windowWidth < 700
            ?
            <Menu isOpen={this.state.open}>
              {/* customBurgerIcon={ <img src="img/icon.svg" /> } */}
              <a className="menu-item" href="/">Home</a>
              <a className="menu-item" href="/about">About Me</a>
              <a className="menu-item" href="/about">Portfolio</a>
              <a className="menu-item" href="/about">Skills</a>
              <a className="menu-item" href="/contact">Contact</a>
            </Menu>
            :
            <div className="nav-container" id="navbar">
              <span className="nav-item">Home and stuff andthings</span>
              <span className="nav-item">About Me</span>
              <span className="nav-item">Portfolio</span>
              <span className="nav-item">Skills</span>
              <span className="nav-item">Contact</span>
            </div>
        }
      </div>
    )
  }
}

export default Navbar;