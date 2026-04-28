import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import StrideAI from './components/StrideAI/StrideAI';
import Loader from './components/Loader/Loader'; // ✅ import loader

// ✅ Home page
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <StrideAI />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ loader duration (change if needed)

    return () => clearTimeout(timer);
  }, []);

  // ✅ Show loader first
  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strideind" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}