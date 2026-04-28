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
          OIL & GAS TECHNOLOGY<br />
          <span className="teal">DRILL SMARTER.</span><br />
          OPERATE FURTHER.
        </h1>

        <p className="hero-sub">
          Futudrill delivers cutting-edge drilling instrumentation and real time remote monitoring solutions — giving oil & gas operators unprecedented visibility, control, and efficiency across every well site.
        </p>

        <p className="hero-sub">
          FutuDrill – See More. Know More. Control More.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">REQUEST A DEMO</a>
          <a href="#contact" className="btn-ghost">
            EXPLORE SOLUTIONS <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Well Sites Monitored</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">30%</span>
            <span className="stat-label">Avg. Fuel Savings</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">99.7%</span>
            <span className="stat-label">24/7 Remote Monitoring</span>
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
