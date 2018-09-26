import React from 'react';
import image from '../images_final/background7_1.jpg';
import image2 from '../images_final/code.jpg';

export default function LandingImageTop() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image}`,
          width: '100vw',
          minHeight: '104.8vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgrounsSize: 'cover',
          animation: 'fadeIn 2s',
        }}>
        <div
          style={{
            backgroundImage: `url(${image2}`,
            width: '100vw',
            minHeight: '104.8vh',
            backgroundPosition: 'center',
            backgrounsSize: 'cover',
            animation: 'codeFade 2s',
            zIndex: 2,
            opacity: .1
          }}>
        </div>
      </div>
      <div className="landing-name">
        <h1>Andrew Watters</h1>
        <h4>Full Stack Web Developer</h4>
      </div>
    </div>
  )
}
