import React from 'react';
import './About.css';

export default function About() {
  const pillars = [
    {
      num: '👁',
      title: 'AI Vision',
      desc: 'Real-time scene understanding across your entire site',
    },
    {
      num: '⚡',
      title: 'Automation',
      desc: 'Automated alerts and responses, zero manual lag',
    },
    {
      num: '📡',
      title: 'Live Data',
      desc: 'Centralized dashboards with real-time feeds',
    },
    {
      num: '🛡',
      title: 'Safety-First',
      desc: 'Engineered for high-risk industrial environments only',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-layout">
          
          <div className="about-left">
            <div className="section-label">Who We Are</div>

            <h2 className="section-title">
              Intelligent Industrial<br />
              <span className="teal">Solutions</span>
            </h2>

            <p className="about-text">
              Strideind Innovations Private Limited delivers intelligent industrial
              solutions designed to improve safety, efficiency, and operational
              control. We specialize in combining AI-powered vision systems and
              automation to help industries move towards smarter and more reliable
              operations.
            </p>

            <p className="about-text">
              Our flagship platform, FutuDrill, is built specifically for modern
              drilling environments — combining AI-based camera systems with
              intelligent analytics to enable systems that don't just see, but
              understand and respond.
            </p>

            <a href="#contact" className="btn-primary">
              Work With Us
            </a>
          </div>

          <div className="about-right">
            <div className="about-img-wrap">
              {/* Replace with real image */}
              <img
                src={process.env.PUBLIC_URL + "/oil.png"}
                alt="Industrial facility"
              />

              <div className="about-img-badge">
                <span className="badge-num">15+</span>
                <span className="badge-txt">
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.num}>
              <span className="pillar-num">{p.num}</span>
              <h4 className="pillar-title">{p.title}</h4>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}