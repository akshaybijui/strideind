import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();

  if (id === "futudrill") {
    return (
      <div className="product-detail">
        <div className="pd-hero">
          <h1>Futudrill</h1>
          <p>Intelligent Drilling Instrumentation & Remote Monitoring</p>
        </div>

        <div className="pd-stats">
          <div>500+ Well Sites</div>
          <div>99.7% Uptime</div>
          <div>30% Fuel Savings</div>
          <div>24/7 Monitoring</div>
        </div>

        <div className="pd-section">
          <h2>Core Solutions</h2>

          <div className="pd-grid">
            <div>
              <h3>Drilling Instrumentation</h3>
              <p>
                Precision sensors for torque, speed, and formation data.
              </p>
            </div>

            <div>
              <h3>Fuel Monitoring</h3>
              <p>
                Real-time fuel tracking across rigs and generators.
              </p>
            </div>

            <div>
              <h3>Remote Monitoring</h3>
              <p>
                Monitor drilling operations from anywhere in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="pd-section">
          <h2>Advanced Capabilities</h2>

          <ul>
            <li>Custom Branding (White-label)</li>
            <li>Universal I/O Compatibility</li>
            <li>SCADA & ERP Integration</li>
            <li>AI Alerts & Predictive Analytics</li>
          </ul>
        </div>

        <div className="pd-section">
          <h2>Why Futudrill</h2>

          <ul>
            <li>Field-Proven Reliability</li>
            <li>Rapid Deployment</li>
            <li>Enterprise Security (ISO 27001)</li>
            <li>24/7 Dedicated Support</li>
          </ul>
        </div>
      </div>
    );
  }

  return <div>Product Not Found</div>;
}