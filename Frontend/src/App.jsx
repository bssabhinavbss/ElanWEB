import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Theme from './components/Theme';
import Merchandise from './components/Merchandise';
import Aftermovies from './components/Aftermovies';
import Gallery from './components/Gallery';
import GuestCards from './components/GuestCards';
import About from './components/About';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Theme />
      <Merchandise />
      <Aftermovies />
      <Gallery />
      <GuestCards />
      <About/>
    </div>
  );
};

export default App;