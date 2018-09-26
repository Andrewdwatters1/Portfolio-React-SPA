import React from 'react';

import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

export default function PrimaryContent() {
  return (
    <div className="primary-content-background">
      <div className="primary-content-background-2">
        <About />
        <Portfolio />
        <Skills />
      </div>
    </div>
  )
}