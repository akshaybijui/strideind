import React from 'react';
import './Products.css';

const products = [
  {
    tag: 'Automotive',
    title: 'Robotic Assembly Line Overhaul',
    desc: 'Full automation upgrade for a Tier 1 automotive supplier — reducing cycle time by 34% and eliminating manual handling errors.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80',
    stat: '34% faster',
  },
  {
    tag: 'Aerospace',
    title: 'Precision Component QA System',
    desc: 'Vision-based quality inspection system integrated into an aerospace machining line, achieving 99.97% defect detection accuracy.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    stat: '99.97% accuracy',
  },
  {
    tag: 'Medical',
    title: 'Cleanroom Production Facility',
    desc: 'Design and commissioning of an ISO Class 7 cleanroom manufacturing environment for a leading medical device company.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
    stat: 'ISO Class 7',
  },
];

export default function Products() {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-label">Our Products</div>

        <div className="prod-header">
          <h2 className="section-title">
            Products That<br />
            <span className="teal">Deliver</span>
          </h2>
          <a href="#contact" className="btn-outline">View All Products →</a>
        </div>

        <div className="prod-grid">
          {products.map((p, i) => (
            <div className="prod-card" key={i}>
              <div className="prod-img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="prod-img-overlay" />
                <span className="prod-tag">{p.tag}</span>
                <span className="prod-stat">{p.stat}</span>
              </div>

              <div className="prod-body">
                <h3 className="prod-title">{p.title}</h3>
                <p className="prod-desc">{p.desc}</p>
                <div className="prod-link">View Product →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}