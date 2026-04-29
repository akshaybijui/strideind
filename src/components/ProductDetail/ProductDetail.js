import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();

  if (id === "futudrill") {
    return (
      <div className="product-detail">

        {/* NAV */}
        <nav className="pd-nav">
          <div className="pd-nav-logo">
            FUTU<span>DRILL</span>
          </div>
        </nav>

        {/* IMAGE HERO — content overlaid on image */}
        <div className="pd-image-hero">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400"
            alt="Futudrill"
          />
          <div className="pd-image-overlay" />

          <div className="pd-hero-inner">
            <p className="pd-tag">OIL &amp; GAS TECHNOLOGY</p>

            <h1 className="pd-title">
              DRILL <span>SMARTER.</span><br />
              OPERATE FURTHER.
            </h1>

            <p className="pd-desc">
              Futudrill delivers cutting-edge drilling instrumentation and real-time remote monitoring solutions —
              giving oil &amp; gas operators unprecedented visibility, control, and efficiency across every well site.
            </p>

            <div className="pd-buttons">
              <button className="btn-primary">REQUEST A DEMO</button>
              <button className="btn-outline">EXPLORE SOLUTIONS</button>
            </div>
          </div>
        </div>

        {/* DASHBOARD */}
        <section className="pd-dashboard">
          <div className="pd-dash-header">
            <h3>FUTUDRILL LIVE DASHBOARD</h3>
            <span className="pd-live-badge">LIVE</span>
          </div>

          <div className="pd-dash-grid">
            <div className="pd-dash-card">
              <p>DRILL SPEED</p>
              <h2 className="teal">142</h2>
              <span>RPM</span>
            </div>

            <div className="pd-dash-card">
              <p>FUEL RATE</p>
              <h2 className="teal-light">38.4</h2>
              <span>L/hr</span>
            </div>

            <div className="pd-dash-card">
              <p>DEPTH</p>
              <h2>2,847</h2>
              <span>meters</span>
            </div>
          </div>

          <div className="pd-dash-meta">
            <span>Fuel efficiency: 94.2%</span>
            <span>Uptime: 99.7%</span>
          </div>
        </section>

        {/* STATS */}
        <section className="pd-stats">
          <div><h2>500+</h2><p>WELL SITES MONITORED</p></div>
          <div><h2>99.7%</h2><p>SYSTEM UPTIME</p></div>
          <div><h2>30%</h2><p>AVG. FUEL SAVINGS</p></div>
          <div><h2>24/7</h2><p>REMOTE MONITORING</p></div>
        </section>

        {/* CORE SOLUTIONS */}
        <section className="pd-section">
          <p className="pd-section-label">CORE SOLUTIONS</p>
          <h2 className="big-title">BUILT FOR THE FIELD.<br />POWERED BY DATA.</h2>
          <p className="pd-desc center">
            Futudrill transforms complex drilling operations into streamlined, data-driven workflows —
            from downhole instrumentation to cloud-connected dashboards accessible from anywhere on Earth.
          </p>

          <div className="pd-grid-3">
            <div className="pd-grid-card numbered">
              <span className="num">01</span>
              <div className="pd-grid-icon">⚙️</div>
              <h3>DRILLING INSTRUMENTATION</h3>
              <p>
                Precision-grade sensors and downhole tools deliver accurate measurements of weight-on-bit,
                torque, rotary speed, and formation data. Futudrill's instrumentation portfolio is engineered
                to perform in the harshest downhole environments, ensuring reliable data where it matters most.
              </p>
            </div>

            <div className="pd-grid-card numbered">
              <span className="num">02</span>
              <div className="pd-grid-icon">🛢️</div>
              <h3>FUEL &amp; ENERGY MONITORING</h3>
              <p>
                Gain full visibility into your fuel consumption across rigs, generators, and ancillary equipment.
                Our intelligent energy monitoring platform identifies inefficiencies in real time, enabling
                significant cost reductions and supporting your environmental compliance and ESG reporting goals.
              </p>
            </div>

            <div className="pd-grid-card numbered">
              <span className="num">03</span>
              <div className="pd-grid-icon">📡</div>
              <h3>REAL-TIME REMOTE MONITORING</h3>
              <p>
                Monitor every parameter of your drilling operation from any device, anywhere in the world.
                Futudrill's secure cloud platform streams live data with ultra-low latency, providing instant
                alerts, automated reporting, and historical trend analysis to keep your team informed and agile
                at all times.
              </p>
            </div>
          </div>
        </section>

        {/* ADVANCED CAPABILITIES */}
        <section className="pd-section pd-section-dark">
          <p className="pd-section-label">ADVANCED CAPABILITIES</p>
          <h2 className="big-title">ENGINEERED FOR YOUR<br />OPERATION.</h2>
          <p className="pd-desc center">
            Beyond core monitoring, Futudrill is built to adapt — seamlessly fitting into
            your existing infrastructure and brand ecosystem.
          </p>

          <div className="pd-grid-2">
            <div className="pd-grid-card dark-card">
              <h3>CUSTOMIZED BRANDING</h3>
              <p>
                White-label the entire Futudrill platform with your company's identity. From dashboard
                themes to custom reporting layouts, present a seamless branded experience to your
                operators and stakeholders — without compromising any functionality.
              </p>
            </div>

            <div className="pd-grid-card dark-card">
              <h3>UNIVERSAL I/O COMPATIBILITY</h3>
              <p>
                Futudrill is hardware-agnostic by design. Compatible with Modbus, HART, OPC-UA,
                CAN bus, and a wide range of analog and digital I/O protocols, enabling effortless
                connectivity with sensors and controllers from any manufacturer.
              </p>
            </div>

            <div className="pd-grid-card dark-card">
              <h3>SEAMLESS SYSTEM INTEGRATION</h3>
              <p>
                Already running a SCADA system, ERP, or operational database? Futudrill connects
                directly. Our open API architecture and pre-built connectors make integration with
                existing enterprise systems straightforward, minimizing disruption and protecting
                your technology investments.
              </p>
            </div>

            <div className="pd-grid-card dark-card">
              <h3>INTELLIGENT ALERTS &amp; ANALYTICS</h3>
              <p>
                AI-assisted anomaly detection surfaces issues before they become failures.
                Configurable threshold alerts, shift reports, and predictive trend analysis keep your
                team one step ahead of the wellsite at all times.
              </p>
            </div>
          </div>

          {/* SINGLE UNIFIED IO + INTEGRATIONS BOX */}
          <div className="pd-io-box">

            <div className="pd-io-block">
              <h3 className="mini-title">COMPATIBLE I/O PROTOCOLS &amp; SYSTEMS</h3>
              <div className="pd-io-grid">
                <div>MODBUS RTU</div>
                <div>HART 7</div>
                <div>OPC-UA</div>
                <div>CAN BUS</div>
                <div>4–20mA</div>
                <div>RS-485</div>
                <div>DNP3</div>
                <div>PROFIBUS</div>
                <div>ETHERNET/IP</div>
              </div>
            </div>

            <div className="pd-io-divider" />

            <div className="pd-io-block">
              <h3 className="mini-title">ACTIVE INTEGRATIONS</h3>
              <div className="pd-integrations-grid">
                <div className="integ-card">
                  <span>SCADA System</span>
                  <span className="dot connected">● CONNECTED</span>
                </div>
                <div className="integ-card">
                  <span>ERP / SAP Module</span>
                  <span className="dot connected">● CONNECTED</span>
                </div>
                <div className="integ-card">
                  <span>Drilling Data API</span>
                  <span className="dot streaming">● STREAMING</span>
                </div>
                <div className="integ-card">
                  <span>ESG Reporting Suite</span>
                  <span className="dot synced">● SYNCED</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHY FUTUDRILL */}
        <section className="pd-section">
          <p className="pd-section-label">WHY FUTUDRILL</p>
          <h2 className="big-title">THE FUTUDRILL ADVANTAGE</h2>
          <p className="pd-desc center">
            Trusted by operators across high-stakes environments, Futudrill is designed
            with one goal: to give your team total command of every drill site.
          </p>

          <div className="pd-grid-2">
            <div className="pd-why-card">
              <div className="pd-why-icon">🛡️</div>
              <h3>FIELD-PROVEN RELIABILITY</h3>
              <p>
                Built to withstand extreme temperatures, vibration, and harsh downhole conditions. Futudrill
                hardware meets international oil &amp; gas standards including ATEX and IECEx certifications.
              </p>
            </div>

            <div className="pd-why-card">
              <div className="pd-why-icon">⚡</div>
              <h3>RAPID DEPLOYMENT</h3>
              <p>
                Our plug-and-play hardware and pre-configured software reduces commissioning time dramatically.
                Get your site connected and streaming live data within hours, not weeks.
              </p>
            </div>

            <div className="pd-why-card">
              <div className="pd-why-icon">🔒</div>
              <h3>ENTERPRISE-GRADE SECURITY</h3>
              <p>
                End-to-end encrypted data transmission, role-based access control, and compliance with ISO
                27001 standards ensure your operational data stays secure and private.
              </p>
            </div>

            <div className="pd-why-card">
              <div className="pd-why-icon">🤝</div>
              <h3>DEDICATED SUPPORT</h3>
              <p>
                A specialist support team available around the clock. From initial installation through to
                ongoing optimization, our engineers are always on hand to ensure peak performance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pd-cta">
          <div className="pd-cta-bg-text">FUTUDRILL</div>
          <h2>READY TO TAKE CONTROL OF YOUR WELLSITE?</h2>
          <p>
            Speak with a Futudrill specialist and discover how our platform can
            transform your drilling operations — from the first sensor to the final report.
          </p>
          <button className="btn-primary large">GET IN TOUCH →</button>
        </section>

        {/* FOOTER */}
        <footer className="pd-footer">
          <div className="pd-footer-brand">
            <h3>FUTU<span>DRILL</span></h3>
            <p>
              Intelligent drilling instrumentation and remote monitoring solutions for
              the global oil &amp; gas industry.
            </p>
          </div>

          <div>
            <h4>SOLUTIONS</h4>
            <p>Drilling Instrumentation</p>
            <p>Fuel &amp; Energy Monitoring</p>
            <p>Remote Data Monitoring</p>
            <p>ESG Reporting</p>
          </div>

          <div>
            <h4>PLATFORM</h4>
            <p>Custom Branding</p>
            <p>I/O Compatibility</p>
            <p>System Integration</p>
            <p>API Access</p>
          </div>

          <div>
            <h4>COMPANY</h4>
            <p>About Futudrill</p>
            <p>Case Studies</p>
            <p>Certifications</p>
            <p>Contact Us</p>
          </div>

          <div className="pd-footer-bottom">
            © 2026 Futudrill. All rights reserved.<br />
            Privacy Policy | Terms of Use | Cookie Policy
          </div>
        </footer>

      </div>
    );
  }

  return <div>Product Not Found</div>;
}