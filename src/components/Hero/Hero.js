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
          Industrial Solutions
        </div>

        <h1 className="hero-title">
          Precision.<br />
          <span className="teal">Performance.</span><br />
          Progress.
        </h1>

        <p className="hero-sub">
          Engineering excellence across manufacturing, distribution<br />
          and industrial operations — built to move your business forward.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn-primary">Explore Products</a>
          <a href="#contact" className="btn-ghost">Talk to Us →</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">40+</span>
            <span className="stat-label">Industry Partners</span>
          </div>
        </div>
      </div>

<div className="hero-image">
  <div className="hero-img-placeholder">
    <img
      src={process.env.PUBLIC_URL + "/bgim.png"}
      alt="Industrial operations"
    />
    <div className="img-overlay" />
  </div>
</div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}