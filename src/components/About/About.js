import React from 'react';
import './About.css';

export default function About() {

  const pillars = [
    {
      title: 'Drilling Technologies',
      desc: 'Advanced solutions for drilling and workover operations,combining precision engineering with modern automation systems',
      img: 'https://fatfinger.io/wp-content/uploads/2024/02/petroleum-engineer-using-laptop-in-oil-field-2023-11-27-05-09-49-utc-scaled.jpg',
    },
    {
      title: 'Software Services',
      desc: 'Intelligent platforms for monitoring, control, and data analysis—delivering real-time operational intelligence for crews and management.',
      img: 'https://cms.etteplan.com/app/uploads/2023/12/Software-services-scaled-aspect-ratio-5-3-2048x1229.jpg',
    },
    {
      title: 'Power and Control Solution',
      desc: 'Reliable electrical and automation systems for rig operations with intelligent energy management and fault-tolerant design.',
      img: 'https://elecsafety.co.uk/wp-content/uploads/2022/09/Safe-Electrical-Control-Panel-pnn2i56aiafwh84k2gjwpg4ccxc0yxjteubu5bi3ao.jpg',
    },
    {
      title: 'IT & Communication',
      desc: 'Integrated networking solutions—satellite, intercom, talkback systems, and full IT infrastructure for seamless operations.',
      img: 'https://www.techquintal.com/wp-content/uploads/2021/10/Types-of-Communication-Technology.jpg',
    },
  ];

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 15;
    const rotateY = (x / rect.width - 0.5) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleLeave = (card) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="about-layout">

          {/* LEFT */}
          <div className="about-left">
            <div className="section-label">Who We Are</div>

            <h2 className="section-title">
              The
              <span className="teal"> Strideind</span>
            </h2>

            <p className="about-text"><br></br>
              Strideind Innovations Pvt. Ltd. is a specialized engineering and technology
              company delivering advanced solutions for the drilling industry. We provide
              integrated products and services including sensors, software, equipment,
              and automation systems designed to enhance operational efficiency, safety,
              and reliability
            </p>

            <p className="about-text">
              Our expertise extends across resource management, workforce training, and
real-time operational optimization. By combining field experience with modern
technologies, we deliver scalable and practical solutions tailored to complex
drilling environments.
Recognized by DPIIT as a startup, Strideind is committed to driving digital
transformation in drilling operations, supporting contractors with innovative
solutions that improve performance, reduce downtime, and enable smarter
decision-making
            </p>

            <a href="#contact" className="btn-primary about-btn">
              Work With Us
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-right">
            <div className="about-img-wrap">
              <img
                src={process.env.PUBLIC_URL + "/weired.gif"}
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

        {/* ✅ NEW HEADING SECTION */}
        <div className="capabilities-header">
          <div className="section-label">WHAT WE DO</div>

          <h2 className="section-title">
            Core <span className="teal">Capabilities</span>
          </h2>
        </div>

        {/* PILLARS */}
        <div className="pillars">
          {pillars.map((p, i) => (
            <div
              className="pillar"
              key={i}
              style={{ backgroundImage: `url(${p.img})` }}
              onMouseMove={(e) => handleMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleLeave(e.currentTarget)}
            >
              <div className="pillar-overlay" />

              <div className="pillar-content">
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}