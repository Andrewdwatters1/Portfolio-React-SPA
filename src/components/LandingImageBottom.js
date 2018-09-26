import React from 'react';
import image from '../images_final/background1.jpeg';
import image2 from '../images_final/code.jpg';

export default function LandingImageTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        height: '140vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
      }}>
      <div
        style={{
          backgroundImage: `url(${image2}`,
          width: '100vw',
          minHeight: '140vh',
          backgroundPosition: 'center',
          backgrounsSize: 'cover',
          animation: 'codeFade 2s',
          zIndex: 2,
          opacity: .1
        }}>
      </div>
    </div>
  )
}