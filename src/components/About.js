import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class About extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

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
        <p className="about-content">I am an enthusiastic leader with a passion for learning and self-development. I love working with small teams to find innovative and performant solutions to complex problems. I currently serve in the Colorado Army National Guard as the Operations Officer for a High Mobility Artillery Rocket Systems unit. In my downtime I enjoy weightlifting, hiking and camping with my wife Lauren and our pooch, Miso. I'm a lifelong Denver Broncos fan, and I love spending time in nature and photography</p>
        <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'46%'}>
          <div>
            <img src={require("../images_final/family.jpg")} />
            <p className="legend" styles={{ fontSize: '18px' }}>My family in Estes, CO</p>
          </div>
          <div>
            <img src={require("../images_final/army2.jpg")} />
            <p className="legend" styles={{ fontSize: '18px' }}>Wife and I re-united post deployment</p>
          </div>
          <div>
            <img src={require("../images_final/spain.jpg")} />
            <p className="legend" styles={{ fontSize: '18px' }}>Much needed vacation in Barcelona, Spain</p>
          </div>
          <div>
            <img src={require("../images_final/outdoors.jpg")} />
            <p className="legend" styles={{ fontSize: '18px' }}>Summit of Mt. Elbert with friends</p>
          </div>
          <div>
            <img src={require("../images_final/miso.jpg")} />
            <p className="legend" styles={{ fontSize: '18px' }}>Our pooch Miso and his homies</p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default About;