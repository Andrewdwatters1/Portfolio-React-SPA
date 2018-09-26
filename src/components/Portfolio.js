import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-piece-container">
          <h1>Momentum 2.0</h1>
          <p>Momentum 2.0 was my take on the popular Momentum Chrome extension. The Full-Stack, Single Page Application was built with React and NodeJS and features secure 3rd party user Authentication, a basic to-do list feature and a build-in pomodoro.  I also added a "Get-Inspired" section where users can view random image/quote combinations from a curated collection stored in a Heroku database. </p>
          <p>I had a great time building the app and enjoyed the trial-by-fire type introduction to learning about different libraries and technologies as I implemented them into the project.</p>
          <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'46%'}>
            <div>
              <img src={require("../images_final/family.jpg")} />
              <p className="legend" styles={{ fontSize: '18px' }}>Estes, CO with the family</p>
            </div>
            <div>
              <img src={require("../images_final/army2.jpg")} />
              <p className="legend" styles={{ fontSize: '18px' }}>Wife and I re-united post deployment</p>
            </div>
            <div>
              <img src={require("../images_final/spain.jpg")} />
              <p className="legend" styles={{ fontSize: '18px' }}>Much needed vacation: Barcelona, Spain</p>
            </div>
            <div>
              <img src={require("../images_final/outdoors.jpg")} />
              <p className="legend" styles={{ fontSize: '18px' }}>Summit of Mt. Elbert with friends</p>
            </div>
            <div>
              <img src={require("../images_final/miso.jpg")} />
              <p className="legend" styles={{ fontSize: '18px' }}>The pooch and his homies</p>
            </div>
          </Carousel>
          <div className="momentum-content-right">
            <a href="https://momentum2point0.com">Momentum 2.0</a>
            <a href="https://github.com/Andrewdwatters1/Momentum-2.0">View the Code</a>
          </div>
          <p>Please feel free to review the source code at the github link above and make any suggestions, I'd truly appreciate the feedback!</p>
        </div>
        <div className="portfolio-piece-container">
          <h1>Group Project</h1>
          <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
        <div className="portfolio-piece-container">
          <h1>VueJS/Sass Project</h1>
          <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
      </div>
    )
  }
}