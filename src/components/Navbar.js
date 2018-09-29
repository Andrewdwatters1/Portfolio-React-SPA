import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends Component {
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
              <AnchorLink className="nav-link" onClick={this.closeSidebarMenu} href='#home'>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" onClick={this.closeSidebarMenu} offset='39.5' href='#about'>ABOUT ME</AnchorLink>
              <AnchorLink className="nav-link" onClick={this.closeSidebarMenu} offset='88' href='#portfolio'>PORTFOLIO</AnchorLink>
              <AnchorLink className="nav-link" onClick={this.closeSidebarMenu} offset='35' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" onClick={this.closeSidebarMenu} href='#contact'>CONTACT</AnchorLink>
            </Menu>
            :
            <div className="nav-container" id="navbar">
              <AnchorLink className="nav-link" href='#home'>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" offset='39.5' href='#about'>ABOUT ME</AnchorLink>
              <AnchorLink className="nav-link" offset='88' href='#portfolio'>PORTFOLIO</AnchorLink>
              <AnchorLink className="nav-link" offset='35' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" href='#contact'>CONTACT</AnchorLink>
            </div>
        }
      </div>
    )
  }
}