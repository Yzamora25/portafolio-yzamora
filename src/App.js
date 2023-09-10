import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div>
      <Navbar />

      {/* sections*/}
      {loading ? <Preloader /> : (
        <div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;
