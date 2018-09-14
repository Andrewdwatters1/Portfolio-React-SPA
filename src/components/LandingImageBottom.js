import React from 'react';
import image from '../images/city-blue-2.jpg';

export default function LandingImageTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        height: '25vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
      }}>
    </div>
  )
}