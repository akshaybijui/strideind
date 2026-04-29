import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ for mobile

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ PRODUCTS LIST (same IDs as Products page)
  const productLinks = [
    { id: "futudrill", name: "Futudrill" },
    { id: "operator-monitoring", name: "Operator Monitoring" },
    { id: "access-control", name: "Access Control" },
    { id: "monitoring", name: "Monitoring" },
    { id: "alerts", name: "Alerts" },
    { id: "connectivity", name: "Connectivity" },
    { id: "ai-engine", name: "AI Engine" },
    { id: "automation", name: "Automation" },
    { id: "safety", name: "Safety" },
  ];

  const handleClick = (e, link) => {
    setMenuOpen(false);

    if (location.pathname === "/" || location.pathname === "/strideind") {
      return;
    }

    e.preventDefault();
    navigate("/", { state: { scrollTo: link.toLowerCase() } });
  };

  const handleLogoClick = (e) => {
    if (location.pathname !== "/" && location.pathname !== "/strideind") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "home" } });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">

        {/* LOGO */}
        <a href="#home" className="nav-logo" onClick={handleLogoClick}>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Strideind" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>

          {/* ABOUT */}
          <li>
            <a href="#about" onClick={(e) => handleClick(e, "About")}>
              About
            </a>
          </li>

          {/* ✅ PRODUCTS DROPDOWN */}
          <li
            className="dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="dropdown-title">
              Products ▾
            </span>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              {productLinks.map((p) => (
                <div
                  key={p.id}
                  className="dropdown-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                    navigate(`/product/${p.id}`);
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </li>

          {/* CONTACT */}
          <li>
            <a href="#contact" onClick={(e) => handleClick(e, "Contact")}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleClick(e, "Contact")}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>

      </div>
    </nav>
  );
}