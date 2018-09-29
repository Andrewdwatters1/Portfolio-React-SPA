import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const family = require("../images/about/family.jpg");
const army = require("../images/about/army2.jpg");
const spain = require("../images/about/spain.jpg");
const outdoors = require("../images/about/outdoors.jpg");
const miso = require("../images/about/miso.jpg");

export default class About extends Component {
  onChange = () => {
    this.setState({
      courselIndex: ++this.state.courselIndex
    })
  }
  handleResize = () => {
    console.log(document.getElementById('about').width);
    this.setState({
      windowWidth: window.innerWidth
    });
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  render() {
    return (
      <div className="about-container" id="about">
        <h1>ABOUT ME</h1>
        <p className="about-content">I am an enthusiastic leader with a passion for learning and self-development. I love working with small teams to find innovative and performant solutions to complex problems. I currently serve in the Colorado Army National Guard as the Operations Officer for a High Mobility Artillery Rocket Systems unit.</p>
        <p className="about-content">In my downtime I enjoy weightlifting, hiking and camping with my wife Lauren and our pooch, Miso. I'm a lifelong Denver Broncos fan, and I love photography and spending time in nature. </p>
        <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'46%'}>
          <div className="about-carousel">
            <img src={family} />
            <p className="legend" styles={{ fontSize: '18px' }}>Estes, CO with the family</p>
          </div>
          <div>
            <img src={army} />
            <p className="legend" styles={{ fontSize: '18px' }}>Wife and I re-united post deployment</p>
          </div>
          <div>
            <img src={spain} />
            <p className="legend" styles={{ fontSize: '18px' }}>Much needed vacation: Barcelona, Spain</p>
          </div>
          <div>
            <img src={outdoors} />
            <p className="legend" styles={{ fontSize: '18px' }}>Summit of Mt. Elbert with friends</p>
          </div>
          <div>
            <img src={miso} />
            <p className="legend" styles={{ fontSize: '18px' }}>The pooch and his homies</p>
          </div>
        </Carousel>
        <p className="about-content">My goal as a developer is to write code that makes people's lives easier. Whether that means the end user or the team I'm working with, I aspire to write programs that are intuitive yet performant, elegant yet effective.  I know that my potential is great as a developer but understand that I am nowhere near it; therefore I will maintain an attitude of eager humility, always being receptive and maintaining a growth-mindset.</p>
      </div>
    )
  }
}