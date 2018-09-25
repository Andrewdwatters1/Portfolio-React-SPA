import React from 'react';
import image from '../images_final/background7_1.jpg';

export default function LandingImageTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        width: '100vw',
        minHeight: '104.8vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
        animation: 'fadeIn 2s'
      }}>
    </div>
  )
}
