import React from 'react';
import './About.css';

export default function About() {
  const pillars = [
    { num: '01', title: 'Precision Engineering', desc: 'Every solution designed to exact tolerance — no shortcuts, no compromise.' },
    { num: '02', title: 'Agile Delivery', desc: 'Fast-moving teams with the structure to deliver on time and on budget.' },
    { num: '03', title: 'Long-Term Partnership', desc: 'We don\'t just complete projects — we stay invested in your growth.' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">
              Driving Industry<br />
              <span className="teal">Forward</span>
            </h2>

            <p className="about-text">
              Strideind is an industrial solutions company built on a foundation of engineering excellence and operational precision. We partner with manufacturers, distributors and industrial operators to deliver systems and services that create measurable impact.
            </p>
            <p className="about-text">
              With deep expertise across automation, supply chain and process engineering, our teams bring the technical rigour and commercial mindset to solve complex challenges — and keep solving them as your business evolves.
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
                <span className="badge-txt">Years of<br/>Excellence</span>
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
