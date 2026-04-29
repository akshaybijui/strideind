import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(false);
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

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

  const handleScrollNav = (section) => {
    setMenuOpen(false);

    if (location.pathname !== "/" && location.pathname !== "/strideind") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">

        {/* LOGO */}
        <div
          className="nav-logo"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Strideind" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <li>
            <button onClick={() => handleScrollNav("about")}>
              About
            </button>
          </li>

          {/* ✅ DROPDOWN (CLICK ONLY) */}
          <li className="dropdown">

            <button
              className="dropdown-title"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropdownOpen(prev => !prev);
              }}
            >
              Products ▾
            </button>

            <div
              className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              {productLinks.map((p) => (
                <div
                  key={p.id}
                  className="dropdown-item"
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

          </li>

          <li>
            <button onClick={() => handleScrollNav("contact")}>
              Contact
            </button>
          </li>

          <li>
            <button
              className="nav-cta"
              onClick={() => handleScrollNav("contact")}
            >
              Get in Touch
            </button>
          </li>

        </ul>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>

      </div>
    </nav>
  );
}