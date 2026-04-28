import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      
      {/* Grid background */}
      <div className="hero-grid" />
      <div className="hero-gradient" />

      <div className="hero-content">
        
        <div className="hero-badge">
          <span className="badge-dot" />
          ⬡ FutuDrill Platform
        </div>

        <h1 className="hero-title">
          AI-Powered<br />
          <span className="teal">Drilling Intelligence</span><br />
          Transformation.
        </h1>

        <p className="hero-sub">
          Transform your drilling operations with smart monitoring, real-time visibility,
          <br />
          and intelligent safety systems.
        </p>

        <p className="hero-sub">
          FutuDrill – See More. Know More. Control More.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Request Demo
          </a>

          <a href="#contact" className="btn-ghost">
            Contact Us
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Live Monitoring</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-num">AI</span>
            <span className="stat-label">Vision Systems</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-num">0ms</span>
            <span className="stat-label">Alert Delay</span>
          </div>
        </div>

      </div>

      <div className="hero-image">
        <div className="hero-img-placeholder">
          <img
            src={process.env.PUBLIC_URL + "/bg7.png"}
            alt="Industrial operations"
          />
          <div className="img-overlay" />
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
      </div>

    </section>
  );
}