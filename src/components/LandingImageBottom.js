import React from 'react';
import image from '../images/background-bottom.jpeg';
import image2 from '../images/code.jpg';

export default function LandingImageBottom() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        height: '90vh',
        width: '100vw',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
      }}>
      <div
        style={{
          backgroundImage: `url(${image2}`,
          width: '100vw',
          height: '90vh',
          backgroundPosition: 'center',
          backgrounsSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          animation: 'codeFade 2s',
          zIndex: 2,
          opacity: .2
        }}>
      </div>
    </div>
  )
}