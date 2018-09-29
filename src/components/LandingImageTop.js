import React from 'react';
import image from '../images/background-top.jpg';
import image2 from '../images/code.jpg';

export default function LandingImageTop() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image}`,
          // width: '110vw',
          minHeight: '104vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgrounsSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          animation: 'fadeIn 2s',
        }}>
        <div
          style={{
            backgroundImage: `url(${image2}`,
            width: '100vw',
            minHeight: '104.8vh',
            backgroundPosition: 'center',
            backgrounsSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            animation: 'codeFade 2s',
            zIndex: 2,
            opacity: .2
          }}>
        </div>
        <div className="vignette"> </div>
      </div>
      <div className="landing-name">
        <h1>Andrew Watters</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
    </div>
  )
}
