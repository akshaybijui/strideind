import React from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const product = {
    title: "Robotic Assembly Line Overhaul",
    category: "Automotive",
    desc: "Full automation upgrade for a Tier 1 automotive supplier — reducing cycle time by 34% and eliminating manual handling errors.",
    heroImg: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stats: [
      { label: "Efficiency Increase", value: "34%" },
      { label: "Error Reduction", value: "90%" },
      { label: "Deployment Time", value: "6 Months" },
    ],
    features: [
      "Fully automated robotic arms",
      "AI-driven quality inspection",
      "Real-time monitoring dashboard",
      "Modular scalable design",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581091012184-7c3b7c1d7f7f?w=700&q=80",
      "https://images.unsplash.com/photo-1581090700227-4c4f50a9b8c2?w=700&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&q=80",
    ],
  };

  return (
    <section className="product-page">
      
      {/* HERO */}
      <div className="product-hero">
        <img src={product.heroImg} alt="" />
        <div className="overlay" />

        <div className="hero-content">
          <span className="tag">{product.category}</span>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
        </div>
      </div>

      {/* VIDEO */}
      <div className="container video-section">
        <h2>Product Overview</h2>
        <video controls>
          <source src={product.video} type="video/mp4" />
        </video>
      </div>

      {/* STATS */}
      <div className="container stats">
        {product.stats.map((s, i) => (
          <div key={i} className="stat-box">
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="container features">
        <h2>Key Features</h2>
        <ul>
          {product.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* GALLERY */}
      <div className="container gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {product.gallery.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container cta">
        <h2>Interested in this product?</h2>
        <a href="#contact" className="btn-primary">Contact Us</a>
      </div>

    </section>
  );
}