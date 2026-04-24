import React from 'react';
import './components/shared.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';


import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StrideAI from './components/StrideAI';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      
      <Products />
      <Contact />
      <Footer />
      <StrideAI />
    </>
  );
}
