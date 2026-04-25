import React, { useState } from 'react';
import './components/shared.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import StrideAI from './components/StrideAI/StrideAI';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* PRODUCTS */}
      <Products 
        onSelectProduct={setSelectedProduct} 
        onViewAll={() => setSelectedProduct(null)} 
      />

      {/* CONDITIONAL RENDER */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} />
      )}

      <Contact />
      <Footer />
      <StrideAI />
    </>
  );
}