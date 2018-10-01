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
              <AnchorLink className="nav-link" href='#home'>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" offset='39' href='#about'>ABOUT ME</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#momentum'>MOMENTUM</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#balance'>BALANCE</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" offset='-800' href='#contact'>CONTACT</AnchorLink>
            </Menu>
            :
            <div className="nav-container" id="navbar">
              <AnchorLink className="nav-link" href='#home'>ANDREW WATTERS</AnchorLink>
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" />
              <AnchorLink className="nav-link" offset='39' href='#about'>ABOUT ME</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#momentum'>MOMENTUM</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#balance'>BALANCE</AnchorLink>
              <AnchorLink className="nav-link" offset='39' href='#skills'>SKILLS</AnchorLink>
              <AnchorLink className="nav-link" offset='-800' href='#contact'>CONTACT</AnchorLink>
            </div>
        }
      </div>
    )
  }
}