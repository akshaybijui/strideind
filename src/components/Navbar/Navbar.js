import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; // ✅ added
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ track current page

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Products', 'Contact'];

  const handleClick = (e, link) => {
    setMenuOpen(false);

    // ✅ PRODUCTS → go to product page
    if (link === "Products") {
      e.preventDefault();
      navigate("/product/futudrill");
      return;
    }

    // ✅ IF already on home → just scroll
    if (location.pathname === "/" || location.pathname === "/strideind") {
      return;
    }

    // ✅ IF NOT on home → go home then scroll
    e.preventDefault();
    navigate("/", { state: { scrollTo: link.toLowerCase() } });
  };

  // ✅ LOGO CLICK
  const handleLogoClick = (e) => {
    if (location.pathname !== "/" && location.pathname !== "/strideind") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "home" } });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        
        {/* ✅ LOGO */}
        <a href="#home" className="nav-logo" onClick={handleLogoClick}>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Strideind" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a 
                href={`#${l.toLowerCase()}`} 
                onClick={(e) => handleClick(e, l)}
              >
                {l}
              </a>
            </li>
          ))}

          <li>
            <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, "Contact")}>
              Get in Touch
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>

      </div>
    </nav>
  );
}