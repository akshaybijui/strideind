import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; // ✅ added
import './Products.css';

const products = [
  {
    id: "futudrill", // ✅ added
    tag: 'Futudrill',
    title: 'Futudrill Smart Drilling Platform',
    desc: 'Advanced drilling instrumentation and real-time monitoring system.',
    img: process.env.PUBLIC_URL + '/moni.jpeg',
    stat: 'AI Monitoring',
  },
  {
    id: "operator-monitoring",
    tag: ' Operator Monitoring',
    title: 'Real-Time Operator Tracking',
    desc: 'Monitor operator presence in real time. Ensure attention and discipline on site. Detect unsafe behavior or absence instantly → Safer, more accountable operations.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=80',
    stat: 'Live Tracking',
  },
  {
    id: "access-control",
    tag: 'Smart Access Control',
    title: 'Automated Entry & Exit System',
    desc: 'Track every entry and exit automatically. Monitor vehicles and personnel movement. Maintain complete, auditable movement records → Secure and controlled site access.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    stat: 'Secure Access',
  },
  {
    id: "monitoring",
    tag: 'Real-Time Monitoring',
    title: 'Centralized Live Operations View',
    desc: 'Live view of all operations, always on. Centralized monitoring from one interface. Easy-to-understand dashboards for any team → Full visibility at all times.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
    stat: 'Live Dashboard',
  },
  {
    id: "alerts",
    tag: 'Smart Alerts & Safety',
    title: 'Instant Safety Alert System',
    desc: 'Instant alerts triggered for unsafe situations. Early warning system prevents incidents. Faster response, fewer escalations → Improved safety, faster response.',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700&q=80',
    stat: 'Instant Alerts',
  },
  {
    id: "connectivity",
    tag: 'Connectivity Layer',
    title: 'Unified Site Communication',
    desc: 'Connect all devices, sensors, and systems into one network → seamless industrial coordination.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80',
    stat: 'Connected',
  },
  {
    id: "ai-engine",
    tag: 'AI Decision Engine',
    title: 'Smart Operational Intelligence',
    desc: 'AI analyzes site data in real time to support faster and better decisions → reduced human delay.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700&q=80',
    stat: 'AI Powered',
  },
  {
    id: "automation",
    tag: 'Automation Core',
    title: 'Process Automation System',
    desc: 'Automate repetitive industrial workflows and reduce manual dependency → higher efficiency.',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700&q=80',
    stat: 'Auto Workflows',
  },
  {
    id: "safety",
    tag: 'Safety Intelligence',
    title: 'Predictive Risk Prevention',
    desc: 'Detect risks before they happen using predictive models → safer industrial environments.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    stat: 'Risk Prevention',
  },
];

export default function Products() {
  const navigate = useNavigate(); // ✅ added

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
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-label">
          Everything You Need to Run
        </div>

        <div className="prod-header">
          <h2 className="section-title">
            Smarter Drilling Operations <br />
            <span className="teal">Platform</span>
          </h2>
        </div>

        <div className="prod-scroll">
          {showLeft && (
            <button
              className="scroll-btn left"
              onClick={scrollLeft}
            >
              ←
            </button>
          )}

          {showRight && (
            <button
              className="scroll-btn right"
              onClick={scrollRight}
            >
              →
            </button>
          )}

          <div className="prod-grid" ref={scrollRef}>
            {products.map((p, i) => (
              <div
                className="prod-card"
                key={i}
                onClick={() => navigate(`/product/${p.id}`)} // ✅ changed
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
                    Learn More
                    <span className="arrow">→</span>
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