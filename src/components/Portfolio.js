import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GifPlayer from 'react-gif-player';

// MOMENTUM IMAGES
const momentum_landing1 = require("../images/momentum/momentum-landing.png");
const momentum_landing2 = require("../images/momentum/momentum-landing-2.png");
const momentum_login = require("../images/momentum/Momentum-Login.png");
const momentum_auth = require("../images/momentum/momentum-auth.png");
const momentum_image1 = require("../images/momentum/momentum-images-1.png");
const momentum_image2 = require("../images/momentum/momentum-images-2.png");
const momentum_image3 = require("../images/momentum/momentum-images-3.png");
const momentum_image4 = require("../images/momentum/momentum-image-4.png");
// BALANCE IMAGES
const balance_login = require('../images/balance/balance_login.jpg');
const balance_landing = require('../images/balance/balance_landing.jpg');
const balance_landing_2 = require('../images/balance/balance_landing_2.jpg');
const balance_landing_3 = require('../images/balance/balance_landing_3.jpg');
const balance_habits = require('../images/balance/balance_habits.jpg');
const balance_calendar = require('../images/balance/balance_calendar.jpg');
const balance_info = require('../images/balance/balance_info.jpg');
const balance_todo = require('../images/balance/balance_todo.jpg');
// OTHER
const snake = require('../images/snake_gif.gif');

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="about-container" id='momentum'>
          <h1>MOMENTUM 2.0</h1>
          <div className="about-content-cont">
            {window.innerWidth > 420 && <div className="font-size-main carousel-text-right">
              <p>Momentum 2.0 was my take on the popular Momentum Chrome extension. The Full-Stack Application was built with React and NodeJS and features secure 3rd party user Authentication, a basic to-do list feature and a built-in pomodoro.  I also added a "Get-Inspired" section where users can view random image/quote combinations from a collection fetched via the Unsplash API and stored in a Heroku postgreSQL database. </p>
              {window.innerWidth > 575 && <p>I had a great time building the app and enjoyed introduction to learning about numerous different libraries and technologies as I implemented them into the project.  I look forward to improving momentum in the future as I become a more proficient, knowledgeable developer. </p>}
            </div>}
            <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'90%'}>
              <div>
                <img src={momentum_landing1} alt="momentum landing page" />
                <p>Landing page</p>
              </div>
              <div>
                <img src={momentum_landing2} alt="momentum landing page alt timezone" />
                <p>Landing page, alt timezone</p>
              </div>
              <div>
                <img src={momentum_login} alt="momentum login page" />
                <p>Login page</p>
              </div>
              <div>
                <img src={momentum_auth} alt="momentum auth0 secured login" />
                <p>Auth0 secure login</p>
              </div>
              <div>
                <img src={momentum_image4} alt="photos grid" />
                <p>Image grid: Unsplash API</p>
              </div>
              <div>
                <img src={momentum_image1} alt="momentum photos detail view" />
                <p>Image detail view</p>
              </div>
              <div>
                <img src={momentum_image2} alt="momentum photos commenting" />
                <p>Image commenting</p>
              </div>
              <div>
                <img src={momentum_image3} alt="momentum favoriting and theme toggle" />
                <p>Favorite and toggle themes</p>
              </div>
            </Carousel>
          </div>
          <div className="portfolio-buttons-container">
            <a href="https://momentum.andrewdwattersdev.com" target="_blank" rel="noopener noreferrer"><button className="portfolio-buttons font-size-main">Live Site</button></a>
            <a href="https://github.com/Andrewdwatters1/Momentum-2.0" target="_blank" rel="noopener noreferrer"><button className="portfolio-buttons font-size-main">View the Code</button></a>
          </div>
        </div>

        <div className="about-container" id='balance'>
          <h1>BALANCE</h1>
          <div className="about-content-cont">
            <div className="font-size-main carousel-text-left">
              {window.innerWidth > 420 && <p>After presenting Momentum 2.0 to my peers at DevMountain in 2018, a peer approached me and asked if I'd be willing to re-create and re-factor the project into a more engaging, feature-rich, productivity centric Single Page Application.  The opportunity to lead a 4 person group in developing a more refined, engaging version of a previous project was something I couldn't resist.</p>}
              {window.innerWidth > 575 && <p>We started by creating the project with React and NodeJS and integrated numerous 3rd party tools including bcryptJS, node-cron and momentJS.  The lessons I learned throughout the project's evolution have been pivotal to my growth as a developer and I'm excited for the opportunity to build upon them as I work with groups in the future.</p>}
            </div>
            <Carousel showArrows={true} showStatus={false} infiniteLoop={true} stopOnHover={true} swipeable={true} transitionTime={550} width={'90%'}>
              <div>
                <img src={balance_landing} alt="balance loading" />
                <p>Desktop landing page with rich UI</p>
              </div>
              <div>
                <img src={balance_landing_2} alt="custom themes" />
                <p>Custom themes and updated weather</p>
              </div>
              <div>
                <img src={balance_landing_3} alt="track habits and productivity" />
                <p>Track habits and productivity</p>
              </div>
              <div>
                <img src={balance_login} alt="bcryptjs secured login" />
                <p>BcryptJS secured user login</p>
              </div>
              <div>
                <img src={balance_habits} alt="habit tracking" />
                <p>Habit tracking and analytics</p>
              </div>
              <div>
                <img src={balance_calendar} alt="event management and reminders" />
                <p>Event management and reminders</p>
              </div>
              <div>
                <img src={balance_info} alt="balance info" />
                <p>Balance Info</p>
              </div>
              <div>
                <img src={balance_todo} alt="scratchpad and nested todos" />
                <p>Nested To-Do's and scratchpad</p>
              </div>
            </Carousel>
          </div>
          <div className="portfolio-buttons-container">
            <a href="https://balance.andrewdwattersdev.com"><button className="portfolio-buttons font-size-main">Live Site</button></a>
            <a href="https://github.com/Andrewdwatters1/DevMountain-Group-Project"><button className="portfolio-buttons font-size-main">View the Code</button></a>
          </div>
        </div >

        {/* OTHER PROJECTS GO HERE. */}


        <div className="about-container this-project-container" id="more">

          <h3 className="about content font-size-main">CODEWARS  |  HACKER-RANK  |  JS-30  |  MORE <br /></h3>
          <div className="portfolio-buttons-container this-project-code">
            <a href="https://www.codewars.com/users/Andrewdwatters1" target="_blank" rel="noopener noreferrer"><button className="portfolio-buttons font-size-main">Codewars</button></a>
            <a href="https://www.hackerrank.com/Andrewdwatters1" target="_blank" rel="noopener noreferrer"><button className="portfolio-buttons font-size-main">Hacker Rank</button></a>
            <a href="https://github.com/Andrewdwatters1/JavaScript-30" target="_blank" rel="noopener noreferrer"><button className="portfolio-buttons font-size-main">JavaScript 30</button></a>
          </div>

          <br />
          <hr style={{ width: '90%', margin: '0 auto' }} />
          <div>
            <GifPlayer gif={snake} autoplay />
            <p className="about content font-size-main" style={{ margin: '0 auto 20px auto' }}>Coming soon... The timeless classic, with a twist.</p>
          </div>
          <hr style={{ width: '90%', margin: '0 auto' }} />

          <p className="about-content font-size-main">Please feel free to review the code for any of my projects on github.  If you feel there's anything I could improve, email me or submit an issue/PR.  I'm always striving to improve as a developer and would truly appreciate the feedback! <br /><br />If you'd like to see the source code for this page, click the link below!</p>
          <div className="portfolio-buttons-container this-project-code">
            <a href="https://github.com/Andrewdwatters1/portfolio-react"><button className="portfolio-buttons font-size-main">View the Code</button></a>
          </div>
        </div >
      </div >
    )
  }
}