import React, { useState } from 'react';
import './Contact.css';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };



const info = [
  { icon: <FiMapPin />, label: 'Location', val: 'Strident Innovations Private Limited,500/A,Vettimankonam,Thottakad P.O,Kallambalam,TVM,Kerala Pin 695605' },
  { icon: <FiPhone />, label: 'Phone', val: '+91 7736878515' },
  { icon: <FiMail />, label: 'Email', val: 'support@strideind.com' },
];
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="section-title">
              Let's Build<br />
              <span className="teal">Something</span><br />
              Together
            </h2>
            <p className="contact-sub">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>

            <div className="contact-info">
              {info.map(item => (
                <div className="info-row" key={item.label}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="success-msg">
                <div className="success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or challenge..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
