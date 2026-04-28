import React, { useRef, useEffect, useState } from 'react';
import './Products.css';

const products = [
  {
    tag: '⚙️ Custom Branding',
    title: 'Customized Branding',
    desc: 'White-label the Futudrill platform with your company identity — from dashboards to reports for a seamless branded experience.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    stat: 'White-label Ready',
  },
  {
    tag: '🔌 Universal I/O',
    title: 'Universal I/O Compatibility',
    desc: 'Works with Modbus, HART, OPC-UA, CAN bus, and analog/digital systems — fully hardware-agnostic connectivity.',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=700&q=80',
    stat: 'Multi-Protocol',
  },
  {
    tag: '🔗 Integration',
    title: 'Seamless System Integration',
    desc: 'Connect SCADA, ERP, and enterprise databases through open APIs and pre-built connectors with minimal disruption.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700&q=80',
    stat: 'API Connected',
  },
  {
    tag: '🧠 AI Intelligence',
    title: 'Intelligent Alerts & Analytics',
    desc: 'AI detects anomalies, triggers alerts, and provides predictive insights with trend analysis and reporting.',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=700&q=80',
    stat: 'Predictive AI',
  },

  {
    tag: '🛡 Reliability',
    title: 'Field-Proven Reliability',
    desc: 'Built for extreme temperatures, vibration, and harsh drilling environments with ATEX & IECEx compliance.',
    img: 'https://images.unsplash.com/photo-1581091870627-3e0f1f2a6c6d?w=700&q=80',
    stat: 'Industrial Grade',
  },
  {
    tag: '🚀 Deployment',
    title: 'Rapid Deployment',
    desc: 'Plug-and-play setup enables full site activation in hours, not weeks — reducing commissioning delays.',
    img: 'https://images.unsplash.com/photo-1581091215367-59ab6b2d6d5a?w=700&q=80',
    stat: 'Fast Setup',
  },
  {
    tag: '🔐 Security',
    title: 'Enterprise-Grade Security',
    desc: 'End-to-end encryption, role-based access control, and ISO 27001 compliance for secure operations.',
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80',
    stat: 'ISO Certified',
  },
  {
    tag: '📞 Support',
    title: 'Dedicated Support',
    desc: '24/7 expert engineering support from installation to optimization ensuring maximum system performance.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80',
    stat: '24/7 Assistance',
  },
];

export default function Products({ onSelectProduct }) {
  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeft(!isAtStart);
    setShowRight(!isAtEnd);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });
    el.addEventListener('scroll', checkScroll);

    checkScroll();

    return () => {
      el.removeEventListener('wheel', wheelHandler);
      el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-label">Advanced Capabilities</div>

        <div className="prod-header">
          <h2 className="section-title">
            Engineered for Your <br />
            <span className="teal">Operation</span>
          </h2>
        </div>

        <div className="prod-scroll">

          {showLeft && (
            <button className="scroll-btn left" onClick={scrollLeft}>
              ←
            </button>
          )}

          {showRight && (
            <button className="scroll-btn right" onClick={scrollRight}>
              →
            </button>
          )}

          <div className="prod-grid" ref={scrollRef}>
            {products.map((p, i) => (
              <div
                className="prod-card"
                key={i}
                onClick={() => onSelectProduct(p)}
              >
                <div className="prod-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="prod-img-overlay" />
                  <span className="prod-tag">{p.tag}</span>
                  <span className="prod-stat">{p.stat}</span>
                </div>

                <div className="prod-body">
                  <h3 className="prod-title">{p.title}</h3>
                  <p className="prod-desc">{p.desc}</p>

                  <button className="btn-outline">
                    Learn More <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}