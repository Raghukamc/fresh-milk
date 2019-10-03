import React from 'react';
import Home from './pages/HomePage';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';


function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Service />
      <Gallery />
      <Pricing />
      <Blog />
      <Testimonial />
      <Contact />
    </React.Fragment>
  );
}

export default App;
