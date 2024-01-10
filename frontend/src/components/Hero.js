import React from 'react';
import About from './About';
import Projects from './Projects';

const Hero = () => {
  return (
    <main className="text-dark-400 bg-dark-900 body-font">
      <About />
      <Projects />
    </main>
  );
};

export default Hero;