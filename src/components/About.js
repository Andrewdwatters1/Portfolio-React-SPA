import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const family = require("../images/about/family.jpg");
const army = require("../images/about/army2.jpg");
const spain = require("../images/about/spain.jpg");
const outdoors = require("../images/about/outdoors.jpg");
const miso = require("../images/about/miso.jpg");

export default class About extends Component {

  render() {
    return (
      <div className="about-container" id="about">

        <h1 style={{ margin: '12px auto' }}>ABOUT ME</h1>
        <p className="about-content font-size-main">I am an enthusiastic leader with a passion for learning and self-development. I love working with small teams to find innovative and performant solutions to complex problems. I currently serve in the Colorado Army National Guard as the Operations Officer for a High Mobility Artillery Rocket Systems unit.</p>

        <div className="about-content-cont">

          <div className="font-size-main carousel-text-left">
            {window.innerWidth > 420 && <p>In my downtime I enjoy weightlifting, hiking and camping with my wife Lauren and our pooch, Miso. I'm a lifelong Denver Broncos fan, and I love photography and spending time in nature. </p>}
            {window.innerWidth > 575 && <p>My goal as a developer is to write code that makes people's lives easier. Whether that means the end user or the team I'm working with, I aspire to write programs that are intuitive yet performant, elegant yet effective.  I know that my potential is great as a developer but understand that I am nowhere near it; therefore I will maintain an attitude of eager humility, always being receptive and maintaining a growth-mindset.</p>}
          </div>

          <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'80%'}>
            <div className="about-carousel">
              <img src={family} alt="My family in Estes, CO" />
              <p>Estes, CO with the family</p>
            </div>
            <div>
              <img src={army} alt="Wife and I re-united" />
              <p>Wife and I re-united post deployment</p>
            </div>
            <div>
              <img src={spain} alt="Honeymoon: Barcelona, Spain" />
              <p>Much needed vacation: Barcelona, Spain</p>
            </div>
            <div>
              <img src={outdoors} alt="Summit of Mt. Elbert with friends" />
              <p>Summit of Mt. Elbert with friends</p>
            </div>
            <div>
              <img src={miso} alt="My pooch and his homies" />
              <p>The pooch and his homies</p>
            </div>
          </Carousel>

        </div>

      </div>
    )
  }
}