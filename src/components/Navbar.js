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
    if (navbar) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  }
  closeSidebarMenu = () => {
    this.setState({
      open: false
    })
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
              <AnchorLink onClick={this.closeSidebarMenu} href='#home'>Andrew Watters</AnchorLink>
              <AnchorLink onClick={this.closeSidebarMenu} offset='88' href='#about'>About Me</AnchorLink>
              <AnchorLink onClick={this.closeSidebarMenu} offset='88' href='#portfolio'>Portfolio</AnchorLink>
              <AnchorLink onClick={this.closeSidebarMenu} offset='85' href='#skills'>Skills</AnchorLink>
              <AnchorLink onClick={this.closeSidebarMenu} href='#contact'>Contact</AnchorLink>
            </Menu>
            :
            <div className="nav-container" id="navbar">
              <AnchorLink href='#home'>Andrew Watters</AnchorLink>
              <AnchorLink offset='88' href='#about'>About Me</AnchorLink>
              <AnchorLink offset='88' href='#portfolio'>Portfolio</AnchorLink>
              <AnchorLink offset='85' href='#skills'>Skills</AnchorLink>
              <AnchorLink href='#contact'>Contact</AnchorLink>
            </div>
        }
      </div>
    )
  }
}

export default Navbar;