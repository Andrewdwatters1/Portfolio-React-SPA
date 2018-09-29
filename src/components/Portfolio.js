import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const landing1 = require("../images/momentum/momentum-landing.png");
const landing2 = require("../images/momentum/momentum-landing-2.png");
const login = require("../images/momentum/Momentum-Login.png");
const auth = require("../images/momentum/momentum-auth.png");
const image1 = require("../images/momentum/momentum-images-1.png");
const image2 = require("../images/momentum/momentum-images-2.png");
const image3 = require("../images/momentum/momentum-images-3.png");
const image4 = require("../images/momentum/momentum-image-4.png");


export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-piece-container">
          <h1 className="portfolio-piece-title">Momentum 2.0</h1>
          <div className="portfolio-piece-flex">

            <div className="portfolio-left-content">
              <p className="portfolio-piece-content">Momentum 2.0 was my take on the popular Momentum Chrome extension. The Full-Stack Application was built with React and NodeJS and features secure 3rd party user Authentication, a basic to-do list feature and a built-in pomodoro.  I also added a "Get-Inspired" section where users can view random image/quote combinations from a collection fetched via the Unsplash API and stored in a Heroku postgreSQL database. </p>
              <p className="portfolio-piece-content">I had a great time building the app and enjoyed the trial-by-fire type introduction to learning about different libraries and technologies as I implemented them into the project.</p>
              <a href="https://momentum2point0.com" target="_blank"><button className="portfolio-buttons">Live Site</button></a>
              <a href="https://github.com/Andrewdwatters1/Momentum-2.0" target="_blank"><button className="portfolio-buttons">View the Code</button></a>
              <p className="portfolio-piece-content">Please feel free to review the source code at the github link above and make any suggestions, I'm always striving to improve and I'd truly appreciate the feedback!</p>
            </div>


            <div className="portfolio-left-pics">
              <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'90%'}>
                <div>
                  <img src={landing1} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Landing page</p>
                </div>
                <div>
                  <img src={landing2} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Landing page, alt timezone</p>
                </div>
                <div>
                  <img src={login} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Login page</p>
                </div>
                <div>
                  <img src={auth} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Auth0 secure login</p>
                </div>
                <div>
                  <img src={image4} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Image grid: Unsplash API</p>
                </div>
                <div>
                  <img src={image1} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Image detail view</p>
                </div>
                <div>
                  <img src={image2} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Image commenting</p>
                </div>
                <div>
                  <img src={image3} />
                  <p className="legend" styles={{ fontSize: '18px' }}>Favorite and toggle themes</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>




        <div className="portfolio-piece-container">
          <h1>Balance</h1>
          <p className="portfolio-piece-content">After presenting Momentum 2.0 to my peers at DevMountain in 2018, a peer approached me and asked if I'd be willing to re-create and re-factor the project into a more engaging, feature-rich, productivity centric Single Page Application.  The opportunity to lead a 4 person group in developing a more refined, engaging version of a previous project was something I couldn't resist.</p>
          <p className="portfolio-piece-content">We started by creating the project with React and NodeJS and integrated numerous 3rd party tools including bcryptJS, node-cron and momentJS.  The lessons I learned throughout the project's evolution have been pivotal to my growth as a developer and I'm excited for the opportunity to build upon them as I work with groups in the future.</p>
          {/* <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'46%'}>
            <div>
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
          </Carousel> */}
          <div className="momentum-content-right">
            {/* <a href="https://momentum2point0.com">Momentum 2.0</a> */}
            {/* <a href="https://github.com/Andrewdwatters1/Momentum-2.0">View the Code</a> */}
          </div>
          <p className="portfolio-piece-content">Please feel free to review the source code at the github link above and make any suggestions, I'm always striving to improve and I'd truly appreciate the feedback!</p>
        </div>





        <div className="portfolio-piece-container">
          <h1>VueJS/Sass Project</h1>
          <p>content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here content goes here </p>
        </div>
      </div>
    )
  }
}