import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

/* ── SOLUTION DETAIL PAGES ── */
function DrillInstrumentation({ onBack }) {
  return (
    <div className="product-detail">
      <nav className="pd-nav">
        <div className="pd-nav-logo">FUTU<span>DRILL</span></div>
        <button className="btn-back" onClick={onBack}>← BACK</button>
      </nav>
      <div className="sol-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bg20.png'})` }}>
        <div className="sol-hero-overlay" />
        <div className="sol-hero-inner">
          <p className="pd-tag">CORE SOLUTION — 01</p>
          <h1 className="pd-title">DRILLING<br /><span>INSTRUMENTATION</span></h1>
          <p className="pd-desc">Precision-grade sensors and downhole tools deliver accurate measurements of weight-on-bit, torque, rotary speed, and formation data — engineered to perform in the harshest environments.</p>
        </div>
      </div>
      <section className="sol-section">
        <div className="sol-two-col">
          <div className="sol-image-block" style={{ backgroundImage: "url('bg20.jpg')" }} />
          <div className="sol-text-block">
            <p className="pd-section-label">OVERVIEW</p>
            <h2 className="big-title">PRECISION WHERE<br />IT MATTERS MOST</h2>
            <p className="pd-desc">Futudrill's instrumentation portfolio covers every critical downhole parameter. Our sensors are ruggedized for high-temperature, high-pressure environments and deliver real-time data streams with sub-second latency to surface systems.</p>
            <p className="pd-desc">From weight-on-bit and torque measurement to directional drilling assistance, every instrument is designed and tested to international oil & gas standards.</p>
          </div>
        </div>
      </section>
      <section className="sol-features-section">
        <p className="pd-section-label">KEY CAPABILITIES</p>
        <h2 className="big-title">BUILT FOR THE<br />DOWNHOLE ENVIRONMENT</h2>
        <div className="sol-feature-grid">
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg20.jpg')" }} /><div className="sol-feat-body"><h3>WEIGHT-ON-BIT SENSORS</h3><p>High-accuracy load cells measure real-time weight-on-bit and torque, enabling optimal drilling parameters and reducing bit wear by up to 25%.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg20.jpg')" }} /><div className="sol-feat-body"><h3>ROTARY SPEED MONITORING</h3><p>Continuous RPM and rotation tracking across all drilling modes, with configurable threshold alerts to prevent mechanical failures before they occur.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg20.jpg')" }} /><div className="sol-feat-body"><h3>FORMATION DATA LOGGING</h3><p>Real-time lithology and formation evaluation data streamed from downhole to surface, enabling faster decisions during critical drilling intervals.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg20.jpg')" }} /><div className="sol-feat-body"><h3>VIBRATION & SHOCK DETECTION</h3><p>Three-axis accelerometers detect harmful vibration events and stick-slip conditions, protecting your BHA and extending tool life in challenging formations.</p></div></div>
        </div>
      </section>
      <section className="sol-stats-section">
        <div className="sol-stat"><h2>±0.1%</h2><p>MEASUREMENT ACCURACY</p></div>
        <div className="sol-stat"><h2>175°C</h2><p>MAX OPERATING TEMP</p></div>
        <div className="sol-stat"><h2>20,000 PSI</h2><p>PRESSURE RATING</p></div>
        <div className="sol-stat"><h2>500+ hrs</h2><p>MTBF RATED</p></div>
      </section>
      <section className="sol-section">
        <div className="sol-cert-block">
          <p className="pd-section-label">CERTIFICATIONS</p>
          <h2 className="big-title">MEETS GLOBAL<br />STANDARDS</h2>
          <div className="sol-cert-grid">
            <div className="sol-cert-card"><span>ATEX</span><p>Zone 1 & 2 certified for hazardous areas</p></div>
            <div className="sol-cert-card"><span>IECEx</span><p>International explosive atmospheres standard</p></div>
            <div className="sol-cert-card"><span>API 11D1</span><p>Packers and bridge plugs conformance</p></div>
            <div className="sol-cert-card"><span>ISO 9001</span><p>Quality management system certified</p></div>
          </div>
        </div>
      </section>
      <section className="pd-cta">
        <div className="pd-cta-bg-text">INSTRUMENTATION</div>
        <h2>TALK TO AN INSTRUMENTATION SPECIALIST</h2>
        <p>Get a tailored recommendation for your well profile and formation type.</p>
        <button className="btn-primary large">REQUEST A DEMO →</button>
      </section>
      <footer className="pd-footer">
        <div className="pd-footer-brand"><h3>FUTU<span>DRILL</span></h3><p>Intelligent drilling instrumentation and remote monitoring solutions for the global oil & gas industry.</p></div>
        <div><h4>SOLUTIONS</h4><p>Drilling Instrumentation</p><p>Fuel &amp; Energy Monitoring</p><p>Remote Data Monitoring</p><p>ESG Reporting</p></div>
        <div><h4>PLATFORM</h4><p>Custom Branding</p><p>I/O Compatibility</p><p>System Integration</p><p>API Access</p></div>
        <div><h4>COMPANY</h4><p>About Futudrill</p><p>Case Studies</p><p>Certifications</p><p>Contact Us</p></div>
        <div className="pd-footer-bottom">© 2026 Futudrill. All rights reserved.<br />Privacy Policy | Terms of Use | Cookie Policy</div>
      </footer>
    </div>
  );
}

function FuelEnergyMonitoring({ onBack }) {
  return (
    <div className="product-detail">
      <nav className="pd-nav">
        <div className="pd-nav-logo">FUTU<span>DRILL</span></div>
        <button className="btn-back" onClick={onBack}>← BACK</button>
      </nav>
      <div className="sol-hero" style={{ backgroundImage: "url('bg21.jpg')" }}>
        <div className="sol-hero-overlay" />
        <div className="sol-hero-inner">
          <p className="pd-tag">CORE SOLUTION — 02</p>
          <h1 className="pd-title">FUEL &amp; ENERGY<br /><span>MONITORING</span></h1>
          <p className="pd-desc">Gain full visibility into fuel consumption across rigs, generators, and ancillary equipment — identifying inefficiencies in real time for significant cost reduction and ESG compliance.</p>
        </div>
      </div>
      <section className="sol-section">
        <div className="sol-two-col">
          <div className="sol-image-block" style={{ backgroundImage: "url('bg21.jpg')" }} />
          <div className="sol-text-block">
            <p className="pd-section-label">OVERVIEW</p>
            <h2 className="big-title">VISIBILITY INTO<br />EVERY LITRE</h2>
            <p className="pd-desc">Futudrill's energy monitoring platform tracks consumption at the asset level — from main prime movers to auxiliary generators — delivering a unified view of your site's energy footprint.</p>
            <p className="pd-desc">Automated anomaly detection flags consumption spikes instantly, while trend analytics support continuous efficiency improvement and ESG target reporting.</p>
          </div>
        </div>
      </section>
      <section className="sol-features-section">
        <p className="pd-section-label">KEY CAPABILITIES</p>
        <h2 className="big-title">SMARTER ENERGY<br />MANAGEMENT</h2>
        <div className="sol-feature-grid">
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg21.jpg')" }} /><div className="sol-feat-body"><h3>REAL-TIME FUEL FLOW</h3><p>Ultrasonic and turbine flow meters measure consumption at each asset continuously, streaming data to the Futudrill cloud with millisecond resolution.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg21.jpg')" }} /><div className="sol-feat-body"><h3>MULTI-ASSET AGGREGATION</h3><p>Consolidate fuel data from every generator, rig engine, and support vehicle into a single dashboard — with per-asset and total-site breakdowns at a glance.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg21.jpg')" }} /><div className="sol-feat-body"><h3>ESG REPORTING INTEGRATION</h3><p>Automatically calculate CO₂ equivalent emissions from fuel consumption data and export structured reports for your ESG, GHG, and sustainability frameworks.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg21.jpg')" }} /><div className="sol-feat-body"><h3>THEFT & LOSS DETECTION</h3><p>Cross-referencing tank levels with flow meter readings identifies unauthorized removal or unaccounted losses, protecting your fuel assets around the clock.</p></div></div>
        </div>
      </section>
      <section className="sol-stats-section">
        <div className="sol-stat"><h2>30%</h2><p>AVG. FUEL SAVINGS</p></div>
        <div className="sol-stat"><h2>±0.5%</h2><p>FLOW MEASUREMENT ACCURACY</p></div>
        <div className="sol-stat"><h2>50+</h2><p>ASSETS PER SITE</p></div>
        <div className="sol-stat"><h2>AUTO</h2><p>ESG REPORT GENERATION</p></div>
      </section>
      <section className="sol-section">
        <div className="sol-cert-block">
          <p className="pd-section-label">COMPLIANCE</p>
          <h2 className="big-title">ESG &amp; REGULATORY<br />READY</h2>
          <div className="sol-cert-grid">
            <div className="sol-cert-card"><span>GHG PROTOCOL</span><p>Scope 1 emissions calculation built-in</p></div>
            <div className="sol-cert-card"><span>ISO 50001</span><p>Energy management system alignment</p></div>
            <div className="sol-cert-card"><span>IOGP S-593</span><p>Oil & gas environmental KPI framework</p></div>
            <div className="sol-cert-card"><span>TCFD</span><p>Climate-related financial disclosure support</p></div>
          </div>
        </div>
      </section>
      <section className="pd-cta">
        <div className="pd-cta-bg-text">ENERGY</div>
        <h2>REDUCE YOUR FUEL SPEND FROM DAY ONE</h2>
        <p>See how Futudrill's energy monitoring delivers measurable ROI within the first operational quarter.</p>
        <button className="btn-primary large">GET IN TOUCH →</button>
      </section>
      <footer className="pd-footer">
        <div className="pd-footer-brand"><h3>FUTU<span>DRILL</span></h3><p>Intelligent drilling instrumentation and remote monitoring solutions for the global oil & gas industry.</p></div>
        <div><h4>SOLUTIONS</h4><p>Drilling Instrumentation</p><p>Fuel &amp; Energy Monitoring</p><p>Remote Data Monitoring</p><p>ESG Reporting</p></div>
        <div><h4>PLATFORM</h4><p>Custom Branding</p><p>I/O Compatibility</p><p>System Integration</p><p>API Access</p></div>
        <div><h4>COMPANY</h4><p>About Futudrill</p><p>Case Studies</p><p>Certifications</p><p>Contact Us</p></div>
        <div className="pd-footer-bottom">© 2026 Futudrill. All rights reserved.<br />Privacy Policy | Terms of Use | Cookie Policy</div>
      </footer>
    </div>
  );
}

function RemoteMonitoring({ onBack }) {
  return (
    <div className="product-detail">
      <nav className="pd-nav">
        <div className="pd-nav-logo">FUTU<span>DRILL</span></div>
        <button className="btn-back" onClick={onBack}>← BACK</button>
      </nav>
      <div className="sol-hero" style={{ backgroundImage: "url('bg23.jpg')" }}>
        <div className="sol-hero-overlay" />
        <div className="sol-hero-inner">
          <p className="pd-tag">CORE SOLUTION — 03</p>
          <h1 className="pd-title">REAL-TIME REMOTE<br /><span>MONITORING</span></h1>
          <p className="pd-desc">Monitor every parameter of your drilling operation from any device, anywhere in the world — with secure cloud streaming, instant alerts, and full historical trend analysis.</p>
        </div>
      </div>
      <section className="sol-section">
        <div className="sol-two-col">
          <div className="sol-image-block" style={{ backgroundImage: "url('bg23.jpg')" }} />
          <div className="sol-text-block">
            <p className="pd-section-label">OVERVIEW</p>
            <h2 className="big-title">YOUR WELLSITE.<br />ANYWHERE.</h2>
            <p className="pd-desc">Futudrill's secure cloud platform streams live operational data with ultra-low latency from any wellsite — onshore, offshore, or in remote locations — to your operations centre, mobile device, or executive dashboard.</p>
            <p className="pd-desc">Role-based access ensures the right data reaches the right person, while automated reporting removes manual effort from your shift workflows entirely.</p>
          </div>
        </div>
      </section>
      <section className="sol-features-section">
        <p className="pd-section-label">KEY CAPABILITIES</p>
        <h2 className="big-title">TOTAL COMMAND<br />FROM ANYWHERE</h2>
        <div className="sol-feature-grid">
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg23.jpg')" }} /><div className="sol-feat-body"><h3>LIVE DATA STREAMING</h3><p>Sub-second latency data delivery from wellsite to cloud, supporting decisions in real time regardless of your location or device type.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg23.jpg')" }} /><div className="sol-feat-body"><h3>CONFIGURABLE ALERTS</h3><p>Set threshold-based or AI-assisted anomaly alerts for any parameter. Receive instant notifications via SMS, email, or in-app — before issues become incidents.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg23.jpg')" }} /><div className="sol-feat-body"><h3>HISTORICAL TREND ANALYSIS</h3><p>Full data historian with configurable retention periods. Query, chart, and export any parameter across any time range for post-well analysis and benchmarking.</p></div></div>
          <div className="sol-feature-card"><div className="sol-feat-img" style={{ backgroundImage: "url('bg23.jpg')" }} /><div className="sol-feat-body"><h3>AUTOMATED SHIFT REPORTS</h3><p>Scheduled report generation summarising key KPIs, events, and performance metrics — delivered automatically to the right stakeholders at shift handover.</p></div></div>
        </div>
      </section>
      <section className="sol-stats-section">
        <div className="sol-stat"><h2>&lt;1s</h2><p>DATA LATENCY</p></div>
        <div className="sol-stat"><h2>99.7%</h2><p>PLATFORM UPTIME</p></div>
        <div className="sol-stat"><h2>ANY</h2><p>DEVICE &amp; BROWSER</p></div>
        <div className="sol-stat"><h2>24/7</h2><p>MONITORING COVERAGE</p></div>
      </section>
      <section className="sol-section">
        <div className="sol-cert-block">
          <p className="pd-section-label">SECURITY</p>
          <h2 className="big-title">ENTERPRISE-GRADE<br />DATA SECURITY</h2>
          <div className="sol-cert-grid">
            <div className="sol-cert-card"><span>ISO 27001</span><p>Information security management certified</p></div>
            <div className="sol-cert-card"><span>TLS 1.3</span><p>End-to-end encrypted data transmission</p></div>
            <div className="sol-cert-card"><span>RBAC</span><p>Role-based access control for all users</p></div>
            <div className="sol-cert-card"><span>SOC 2 TYPE II</span><p>Third-party security audit compliance</p></div>
          </div>
        </div>
      </section>
      <section className="pd-cta">
        <div className="pd-cta-bg-text">REMOTE</div>
        <h2>SEE YOUR WELLSITE LIVE IN MINUTES</h2>
        <p>Request a live demo and watch your data stream in real time from a connected wellsite.</p>
        <button className="btn-primary large">REQUEST A DEMO →</button>
      </section>
      <footer className="pd-footer">
        <div className="pd-footer-brand"><h3>FUTU<span>DRILL</span></h3><p>Intelligent drilling instrumentation and remote monitoring solutions for the global oil & gas industry.</p></div>
        <div><h4>SOLUTIONS</h4><p>Drilling Instrumentation</p><p>Fuel &amp; Energy Monitoring</p><p>Remote Data Monitoring</p><p>ESG Reporting</p></div>
        <div><h4>PLATFORM</h4><p>Custom Branding</p><p>I/O Compatibility</p><p>System Integration</p><p>API Access</p></div>
        <div><h4>COMPANY</h4><p>About Futudrill</p><p>Case Studies</p><p>Certifications</p><p>Contact Us</p></div>
        <div className="pd-footer-bottom">© 2026 Futudrill. All rights reserved.<br />Privacy Policy | Terms of Use | Cookie Policy</div>
      </footer>
    </div>
  );
}

/* ── ALL SOLUTION CARDS DATA ── */
const SOLUTIONS = [
  {
    id: "drilling",
    num: "01",
    badge: "CORE SOLUTION",
    title: "DRILLING\nINSTRUMENTATION",
    desc: "Precision-grade sensors and downhole tools deliver accurate measurements of weight-on-bit, torque, rotary speed, and formation data. Engineered to perform in the harshest downhole environments.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: "fuel",
    num: "02",
    badge: "CORE SOLUTION",
    title: "FUEL & ENERGY\nMONITORING",
    desc: "Gain full visibility into fuel consumption across rigs, generators, and ancillary equipment. Our intelligent energy monitoring platform identifies inefficiencies in real time, enabling significant cost reductions and ESG compliance.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: "remote",
    num: "03",
    badge: "CORE SOLUTION",
    title: "REAL-TIME REMOTE\nMONITORING",
    desc: "Monitor every parameter of your drilling operation from any device, anywhere in the world. Secure cloud platform with ultra-low latency, instant alerts, automated reporting, and historical trend analysis.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: null,
    num: "04",
    badge: "SAFETY",
    title: "GAS DETECTION\nSYSTEM",
    desc: "Advanced fixed and portable gas detection with PLC integration, designed to ensure safety and compliance in drilling operations across all rig types and site configurations.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: null,
    num: "05",
    badge: "PREDICTIVE",
    title: "CONDITION\nMONITORING",
    desc: "Real-time monitoring solutions for critical equipment, enabling predictive maintenance, performance optimization, and improved reliability. Reduce unplanned downtime before it impacts operations.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: null,
    num: "06",
    badge: "STRIDEIND INNOVATIONS",
    title: "CCTV\nSYSTEMS",
    desc: "Explosion-proof and IP-based CCTV systems for drilling rigs, enabling real-time monitoring, recording, and remote access. Ruggedized for hazardous area classification and 24/7 operation.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: null,
    num: "07",
    badge: "SURVEILLANCE",
    title: "COLLISION\nAVOIDANCE SYSTEM",
    desc: "Re-programmable collision avoidance systems designed for safe operation across various rig types and operational environments. Prevent incidents with configurable detection zones and instant alerts.",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600",
    cta: "LEARN MORE →",
  },
  {
    id: null,
    num: "08",
    badge: "COMMUNICATION",
    title: "INTERCOM &\nTALKBACK",
    desc: "Industrial intercom and talkback systems with satellite connectivity and comprehensive IT & networking solutions for seamless coordination across every level of rig operations.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
    cta: "LEARN MORE →",
  },
];

/* ── MAIN COMPONENT ── */
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSolution, setActiveSolution] = useState(null);
  const scrollRef = useRef(null);

  // Drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Mousewheel horizontal scroll
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY + e.deltaX;
  };

  const scrollCards = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  if (activeSolution === "drilling") return <DrillInstrumentation onBack={() => setActiveSolution(null)} />;
  if (activeSolution === "fuel")     return <FuelEnergyMonitoring onBack={() => setActiveSolution(null)} />;
  if (activeSolution === "remote")   return <RemoteMonitoring onBack={() => setActiveSolution(null)} />;

  if (id === "futudrill") {
    return (
      <div className="product-detail">

        {/* NAV */}
        <nav className="pd-nav">
          <div className="pd-nav-logo">FUTU<span>DRILL</span></div>
        </nav>

        {/* IMAGE HERO */}
        <div className="pd-image-hero">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400" alt="Futudrill" />
          <div className="pd-image-overlay" />
          <div className="pd-hero-inner">
            <p className="pd-tag">OIL &amp; GAS TECHNOLOGY</p>
            <p className="pd-hero-eyebrow">FLAGSHIP PLATFORM</p>
            <h1 className="pd-title">FUTU<span>DRILL</span></h1>
            <p className="pd-desc">
              Futudrill is a unified software and hardware architecture designed for complete drilling
              operations. It integrates multiple control and monitoring systems into a single platform,
              enabling seamless operation without interruption. The system allows real-time monitoring
              and control of all rig activities while ensuring operational continuity even during system
              failures. By digitalizing every movement and process, Futudrill enhances decision-making,
              simplifies troubleshooting, and improves operational efficiency.
            </p>
          </div>
        </div>

        {/* STATS BAR */}
        <section className="pd-stats">
          <div><h2>25%</h2><p>COST &amp; DOWNTIME REDUCTION</p></div>
          <div><h2>50%</h2><p>LESS MANPOWER DEPENDENCY</p></div>
          <div><h2>75%</h2><p>REMOTE DECISION IMPROVEMENT</p></div>
          <div><h2>24/7</h2><p>TECHNICAL SUPPORT</p></div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="pd-section">
          <p className="pd-section-label">CORE CAPABILITIES</p>
          <div className="pd-capabilities-grid">
            <div className="pd-capability-card">
              <div className="pd-cap-header"><h3>Critical Operation Monitoring &amp; Control</h3></div>
              <div className="pd-cap-body"><p>Real-time monitoring and full control of all critical rig activities with fault-tolerant continuity.</p></div>
            </div>
            <div className="pd-capability-card">
              <div className="pd-cap-header"><h3>Non-Critical Operation Monitoring</h3></div>
              <div className="pd-cap-body"><p>Full visibility across auxiliary and support operations, reducing workload for crew and management.</p></div>
            </div>
            <div className="pd-capability-card">
              <div className="pd-cap-header"><h3>Personnel &amp; Asset Tracking</h3></div>
              <div className="pd-cap-body"><p>Comprehensive tracking of all personnel and equipment assets across site and camp areas.</p></div>
            </div>
            <div className="pd-capability-card">
              <div className="pd-cap-header"><h3>Camp &amp; Site Monitoring Systems</h3></div>
              <div className="pd-cap-body"><p>End-to-end monitoring of camp, site, and environmental systems for complete operational awareness.</p></div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INTEGRATED SOLUTIONS — HORIZONTAL SCROLL
        ══════════════════════════════════════ */}
        <section className="pd-integrated-section">
          <div className="pd-integrated-header">
            <div className="pd-integrated-header-left">
              <p className="pd-section-label">INTEGRATED SOLUTIONS</p>
              <h2 className="big-title">SOLUTIONS FOR<br />EVERY LAYER.</h2>
              <p className="pd-integrated-desc">
                Futudrill transforms complex drilling operations into streamlined, data-driven workflows —
                from downhole instrumentation to cloud-connected dashboards accessible from anywhere on Earth.
              </p>
            </div>
            <div className="pd-scroll-nav">
              <button className="pd-scroll-btn" onClick={() => scrollCards(-1)} aria-label="Scroll left">←</button>
              <button className="pd-scroll-btn" onClick={() => scrollCards(1)} aria-label="Scroll right">→</button>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div
            className="pd-solutions-scroll"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
          >
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.num}
                className="pd-sol-card"
                onClick={() => sol.id && setActiveSolution(sol.id)}
                style={{ cursor: sol.id ? "pointer" : "default" }}
              >
                {/* Top image */}
                <div className="pd-sol-card-img-wrap">
                  <img
                    className="pd-sol-card-img"
                    src={sol.img}
                    alt={sol.title.replace("\n", " ")}
                    draggable={false}
                  />
                  <div className="pd-sol-card-num">{sol.num}</div>
                </div>

                {/* Body */}
                <div className="pd-sol-card-content">
                  <div className="pd-sol-card-badge">{sol.badge}</div>
                  <h3>{sol.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                  ))}</h3>
                  <p>{sol.desc}</p>
                  <span className="pd-sol-card-cta">{sol.cta}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* I/O BOX */}
        <section className="pd-section">
          <div className="pd-io-box">
            <div className="pd-io-block">
              <p className="mini-title">UNIFIED I/O COMPATIBILITY</p>
              <div className="pd-io-grid">
                <div>4–20mA ANALOG</div>
                <div>RS-485 / MODBUS</div>
                <div>HART PROTOCOL</div>
                <div>PROFIBUS DP</div>
                <div>ETHERNET / IP</div>
                <div>OPC-UA SERVER</div>
              </div>
            </div>
            <div className="pd-io-divider" />
            <div className="pd-io-block">
              <p className="mini-title">THIRD-PARTY INTEGRATIONS</p>
              <div className="pd-integrations-grid">
                <div className="integ-card">OSPI / EDR <span className="dot connected">● CONNECTED</span></div>
                <div className="integ-card">WITS / WITSML <span className="dot streaming">● STREAMING</span></div>
                <div className="integ-card">SAP PM MODULE <span className="dot synced">● SYNCED</span></div>
                <div className="integ-card">CUSTOM REST API <span className="dot connected">● AVAILABLE</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pd-cta">
          <div className="pd-cta-bg-text">FUTUDRILL</div>
          <h2>READY TO TRANSFORM YOUR DRILLING OPERATIONS?</h2>
          <p>Schedule a platform walkthrough with a Futudrill specialist today.</p>
          <button className="btn-primary large">REQUEST A DEMO →</button>
        </section>

        {/* FOOTER */}
        <footer className="pd-footer">
          <div className="pd-footer-brand">
            <h3>FUTU<span>DRILL</span></h3>
            <p>Intelligent drilling instrumentation and remote monitoring solutions for the global oil & gas industry.</p>
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

  return null;
}