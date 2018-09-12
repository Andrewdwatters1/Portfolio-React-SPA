import React from 'react';
import image from '../images/background1.jpeg';

export default function LandingImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        minHeight: 500,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover'
      }}>
    </div>
  )
}