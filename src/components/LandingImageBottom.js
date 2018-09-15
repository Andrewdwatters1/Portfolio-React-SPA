import React from 'react';
import image from '../images_final/city-blue-2.jpg';

export default function LandingImageTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
      }}>
    </div>
  )
}