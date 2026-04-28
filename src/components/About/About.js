import React from 'react';
import './About.css';

export default function About() {
  const pillars = [
    { num: '01', title: 'Drilling Instrumentation', desc: 'Precision-grade sensors and downhole tools deliver accurate measurements of weight-on-bit, torque, rotary speed, and formation data.' },
    { num: '02', title: 'Fuel & Energy Monitoring', desc: 'Gain full visibility into fuel consumption across rigs, generators, and equipment with real-time efficiency insights and ESG support.' },
    { num: '03', title: 'Real-Time Remote Monitoring', desc: 'Monitor drilling operations from anywhere with ultra-low latency cloud dashboards, alerts, and historical analytics.' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <div className="section-label">Core Solutions</div>
            <h2 className="section-title">
              Built for the Field.<br />
              <span className="teal">Powered by Data.</span>
            </h2>

            <p className="about-text">
              Futudrill transforms complex drilling operations into streamlined, data-driven workflows — from downhole instrumentation to cloud-connected dashboards accessible from anywhere on Earth.
            </p>
            <p className="about-text">
              Designed for modern oil & gas environments, our solutions improve visibility, efficiency, and control across every stage of drilling operations.
            </p>

            <a href="#contact" className="btn-primary">
              Request a Demo
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
                <span className="badge-num">24/7</span>
                <span className="badge-txt">Remote<br/>Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pillars">
          {pillars.map(p => (
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