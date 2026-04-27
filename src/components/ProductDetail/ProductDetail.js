// import React from "react";
// import "./ProductDetail.css";

// export default function ProductDetail({ product }) {
//   if (!product) return null;

//   return (
//     <section className="product-page">
      
//       {/* HERO */}
//       <div className="product-hero">
//         <img src={product.img} alt="" />
//         <div className="overlay" />

//         <div className="hero-content">
//           <span className="tag">{product.tag}</span>
//           <h1>{product.title}</h1>
//           <p>{product.desc}</p>
//         </div>
//       </div>

//       {/* VIDEO */}
//       <div className="container video-section">
//         <h2>Product Overview</h2>
//         <video controls>
//           <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* STATS */}
//       <div className="container stats">
//         <div className="stat-box">
//           <h3>{product.stat}</h3>
//           <p>Performance Metric</p>
//         </div>
//       </div>

//       {/* FEATURES */}
//       <div className="container features">
//         <h2>Key Features</h2>
//         <ul>
//           <li>✔ Fully automated system</li>
//           <li>✔ AI-powered optimization</li>
//           <li>✔ Real-time monitoring</li>
//           <li>✔ Scalable infrastructure</li>
//         </ul>
//       </div>

//       {/* GALLERY (kept same structure but static images) */}
//       <div className="container gallery">
//         <h2>Gallery</h2>
//         <div className="gallery-grid">
//           <img src={product.img} alt="" />
//           <img src={product.img} alt="" />
//           <img src={product.img} alt="" />
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="container cta">
//         <h2>Interested in this product?</h2>
//         <a href="#contact" className="btn-primary">Contact Us</a>
//       </div>

//     </section>
//   );
// }