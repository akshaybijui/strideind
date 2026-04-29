import React from "react";
import "./Footer.css";
import { FiLinkedin, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <img
               src={process.env.PUBLIC_URL + "/logo.png"} // replace with your logo
              alt="Logo"
              className="footer-logo"
            />

            <p className="footer-tagline">
              Building intelligent digital products with performance, precision,
              and purpose.
            </p>

            <div className="footer-socials">
              <a href="#" className="social-btn"><FiLinkedin /></a>
              <a href="#" className="social-btn"><FiTwitter /></a>
              <a href="#" className="social-btn"><FiYoutube /></a>
              <a href="#" className="social-btn"><FiInstagram /></a>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links">

            <div className="footer-col">
              <h4 className="col-title">Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Products</h4>
              <ul>
                <li><a href="#">AI Solutions</a></li>
                <li><a href="#">Automation</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Guides</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="col-title">Contact</h4>
              <ul>
                <li><a href="#">support@email.com</a></li>
                <li><a href="#">+91 98765 43210</a></li>
                <li><a href="#">India</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Strideind. All rights reserved.</p>
          <p className="footer-credit">Crafted with precision</p>
        </div>

      </div>
    </footer>
  );
}