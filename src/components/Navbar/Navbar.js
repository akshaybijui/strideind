import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const productLinks = [
    { id: "futudrill", name: "Futudrill" },
    // { id: "operator-monitoring", name: "Operator Monitoring" },
    // { id: "access-control", name: "Access Control" },
    // { id: "monitoring", name: "Monitoring" },
    // { id: "alerts", name: "Alerts" },
    // { id: "connectivity", name: "Connectivity" },
    // { id: "ai-engine", name: "AI Engine" },
    // { id: "automation", name: "Automation" },
    // { id: "safety", name: "Safety" },
  ];

  const handleScrollNav = (section) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        </div>

        {/* ===== DESKTOP ===== */}
        <ul className="nav-links desktop">

          <li>
            <button onClick={() => handleScrollNav("about")}>About</button>
          </li>

          <li className="dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              Products ▾
            </button>

            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {productLinks.map((p) => (
                <div
                  key={p.id}
                  className="dropdown-item"
                  onClick={() => {
                    navigate(`/product/${p.id}`);
                    setDropdownOpen(false);
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </li>

          <li>
            <button onClick={() => handleScrollNav("contact")}>Contact</button>
          </li>

          <li>
            <button  className="nav-cta">Get in Touch</button>
          </li>

        </ul> 

        {/* ===== MOBILE ===== */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>

          <button onClick={() => handleScrollNav("about")}>About</button>

          <div className="mobile-dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              Products ▾
            </button>

            <div className={`mobile-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {productLinks.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    navigate(`/product/${p.id}`);
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => handleScrollNav("contact")}>Contact</button>

          <button className="nav-cta">Get in Touch</button>

        </div>

      </div>
    </nav>
  );
}
