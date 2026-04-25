import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const links = {
    Company: ['About Us', 'Our Team', 'Careers', 'News'],
    Services: ['Industrial Automation', 'Engineering & Design', 'Supply Chain', 'Maintenance'],
    Industries: ['Automotive', 'Aerospace', 'Medical', 'Energy'],
    Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Strideind" className="footer-logo" />
            <p className="footer-tagline">
              Engineering excellence for the industries that move the world forward.
            </p>
            <div className="footer-socials">
              <div className="footer-socials">
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
    <FaLinkedinIn />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn">
    <FaTwitter />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn">
    <FaYoutube />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">
    <FaInstagram />
  </a>
</div>
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(links).map(([cat, items]) => (
              <div className="footer-col" key={cat}>
                <h4 className="col-title">{cat}</h4>
                <ul>
                  {items.map(item => (
                    <li key={item}><a href="#!">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Strideind. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
