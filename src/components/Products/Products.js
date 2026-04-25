import React, { useRef, useEffect } from 'react';
import './Products.css';

const products = [
  {
    tag: 'Automotive',
    title: 'Robotic Assembly Line Overhaul',
    desc: 'Full automation upgrade reducing cycle time by 34%.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80',
    stat: '34% faster',
  },
  {
    tag: 'Aerospace',
    title: 'Precision QA System',
    desc: 'Vision-based inspection with 99.97% accuracy.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    stat: '99.97% accuracy',
  },
  {
    tag: 'Medical',
    title: 'Cleanroom Facility',
    desc: 'ISO Class 7 certified production setup.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
    stat: 'ISO Class 7',
  },
  {
    tag: 'Energy',
    title: 'Smart Grid Monitoring',
    desc: 'Real-time analytics for power optimization.',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700&q=80',
    stat: '24/7 Monitoring',
  },
  {
    tag: 'Logistics',
    title: 'Warehouse Automation',
    desc: 'AI-driven inventory and robotic picking system.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80',
    stat: '2x Efficiency',
  },
  {
    tag: 'AI',
    title: 'Predictive Maintenance',
    desc: 'Machine learning to prevent system failures.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700&q=80',
    stat: '90% Downtime Cut',
  },
];

export default function Products({ onSelectProduct, onViewAll }) {
  const scrollRef = useRef(null);

  // ✅ STABLE WHEEL SCROLL (no page movement)
  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    const wheelHandler = (e) => {
      e.preventDefault(); // 🚫 stop vertical page scroll completely
      el.scrollLeft += e.deltaY; // 👉 convert vertical scroll to horizontal
    };

    el.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      el.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-label">Our Products</div>

        <div className="prod-header">
          <h2 className="section-title">
            Products That <br />
            <span className="teal">Deliver</span>
          </h2>

          <button className="btn-outline" onClick={onViewAll}>
            View All →
          </button>
        </div>

        <div className="prod-scroll">
          <div className="prod-grid" ref={scrollRef}>
            {products.map((p, i) => (
              <div
                className="prod-card"
                key={i}
                onClick={() => onSelectProduct(p)}
                style={{ cursor: 'pointer' }}
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

                  <div className="prod-link">
                    View Product →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}