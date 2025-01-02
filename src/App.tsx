import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray">
      <Hero />
      <About />
      {/* <Skills /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;