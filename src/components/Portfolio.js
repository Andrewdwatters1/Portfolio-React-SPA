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
      <div>
        <div className="about-container" id='momentum'>
          <h1>MOMENTUM 2.0</h1>
          <div className="about-content-cont">
            <div className="about-content-left">
              <p className="about-content">Momentum 2.0 was my take on the popular Momentum Chrome extension. The Full-Stack Application was built with React and NodeJS and features secure 3rd party user Authentication, a basic to-do list feature and a built-in pomodoro.  I also added a "Get-Inspired" section where users can view random image/quote combinations from a collection fetched via the Unsplash API and stored in a Heroku postgreSQL database. </p>
              <p className="about-content">I had a great time building the app and enjoyed the trial-by-fire type introduction to learning about different libraries and technologies as I implemented them into the project.</p>
            </div>
            <div className="about-content-right">
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
          <div className="portfolio-buttons-container">
            <a href="https://momentum2point0.com" target="_blank"><button className="portfolio-buttons">Live Site</button></a>
            <a href="https://github.com/Andrewdwatters1/Momentum-2.0" target="_blank"><button className="portfolio-buttons">View the Code</button></a>
          </div>
        </div>




        {/* <div className="about-container" id='balance'>
          <h1>BALANCE</h1>
          <div className="about-content-cont">
            <div className="about-content-left-flip">
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
            <div className="about-content-right-flip">
              <p className="about-content">After presenting Momentum 2.0 to my peers at DevMountain in 2018, a peer approached me and asked if I'd be willing to re-create and re-factor the project into a more engaging, feature-rich, productivity centric Single Page Application.  The opportunity to lead a 4 person group in developing a more refined, engaging version of a previous project was something I couldn't resist.</p>
              <p className="about-content">We started by creating the project with React and NodeJS and integrated numerous 3rd party tools including bcryptJS, node-cron and momentJS.  The lessons I learned throughout the project's evolution have been pivotal to my growth as a developer and I'm excited for the opportunity to build upon them as I work with groups in the future.</p>
            </div>
          </div>
          <div className="portfolio-buttons-container">
            <a href="https://momentum2point0.com" target="_blank"><button className="portfolio-buttons">Live Site</button></a>
            <a href="https://github.com/Andrewdwatters1/DevMountain-Group-Project" target="_blank"><button className="portfolio-buttons">View the Code</button></a>
          </div>
        </div> */}

        {/* OTHER PROJECTS GO HERE.  FINISH THE VUEJS/SASS STORE THEN START WORKING ON ARCADE OR OTHER */}

        <div className="about-container this-project-container">
          <p className="about-content this-project">Please feel free to review the code for any of my projects on github.  If you feel there's anything I could improve, email me or submit an issue/pull request.  I'm always striving to improve as a developer and would truly appreciate the feedback!</p>
          <div className="portfolio-buttons-container this-project-code">
            <p>This page: <br/>Created with ReactJS</p>
            <a href="https://github.com/Andrewdwatters1/portfolio-react" target="_blank"><button className="portfolio-buttons">View the Code</button></a>
          </div>

        </div>
      </div >
    )
  }
}