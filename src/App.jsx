import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Portfolio from './components/layout/Portfolio';
import Testimonial from './components/layout/Testimonial';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Testimonial />
    <Footer />
    </div>
    </>
  )
}

export default App
