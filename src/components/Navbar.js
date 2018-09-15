import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
      <div id="home">
        {
          this.state.windowWidth < 700
            ?
            <Menu isOpen={this.state.open}>
              {/* customBurgerIcon={ <img src="img/icon.svg" /> } */}
              <a className="menu-item">Home</a>
              <a className="menu-item" href="#about">About Me</a>
              <a className="menu-item" href="#portfolio">Portfolio</a>
              <a className="menu-item" href="#skills">Skills</a>
              <a className="menu-item" href="#contact">Contact</a>
            </Menu>
            :
            <div className="nav-container" id="navbar">
              <AnchorLink className="nav-item nav-name" href='#home'>Andrew Watters</AnchorLink>
              <AnchorLink offset='88' className="menu-item" href='#about'>About Me</AnchorLink>
              <AnchorLink offset='88' className="menu-item" href='#portfolio'>Portfolio</AnchorLink>
              <AnchorLink offset='85' className="menu-item" href='#skills'>Skills</AnchorLink>
              <AnchorLink className="menu-item" href='#contact'>Contact</AnchorLink>
            </div>
        }
      </div>
    )
  }
}

export default Navbar;