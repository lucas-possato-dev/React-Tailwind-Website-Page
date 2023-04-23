import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Developers from './components/Developers';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
