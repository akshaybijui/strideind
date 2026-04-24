import React, { useState, useRef, useEffect } from 'react';
import './StrideAI.css';

const INITIAL_MSG = {
  role: 'ai',
  text: "Hi! I'm StrideAI — your industrial solutions assistant. How can I help you today?",
};

/* 🧠 COMPANY CONTEXT */
const COMPANY_CONTEXT = {
  about:
    "Strideind is an industrial solutions company specializing in automation, engineering, and manufacturing systems. We help businesses improve efficiency and performance.",
  services:
    "We offer industrial automation, robotics integration, process optimization, cleanroom setup, and engineering solutions tailored to different industries.",
  industries:
    "We serve industries such as automotive, aerospace, and medical manufacturing.",
  contact:
    "You can contact us at hello@strideind.com or through the contact form on our website.",
};

export default function StrideAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);

    const lower = text.toLowerCase();

    let reply = "I'm not sure about that. You can contact us at support@strideind.com.";

    // 👋 Greeting
    if (['hi', 'hello', 'hey', 'hlo', 'hy'].includes(lower)) {
      reply = "Hi 👋 I'm StrideAI. How can I assist you today?";
    }

    // 🏢 About
    else if (lower.includes('about') || lower.includes('company') || lower.includes('stride')) {
      reply = COMPANY_CONTEXT.about;
    }

    // 🛠 Services
    else if (lower.includes('service') || lower.includes('what do you do')) {
      reply = COMPANY_CONTEXT.services;
    }

    // 🏭 Industries
    else if (lower.includes('industry')) {
      reply = COMPANY_CONTEXT.industries;
    }

    // 💰 Quote
    else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost')) {
      reply = "For a quote, please contact us and our team will provide a customized solution based on your requirements.";
    }

    // 📞 Contact
    else if (lower.includes('contact') || lower.includes('email')) {
      reply = COMPANY_CONTEXT.contact;
    }

    // 📂 Projects
    else if (lower.includes('project')) {
      reply = "We have completed projects in automation, quality inspection systems, and industrial engineering across multiple industries.";
    }

    // ⏳ Fake typing delay
    setLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
      setLoading(false);
    }, 700);
  };

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const quickReplies = [
    'Tell me about your services',
    'Request a quote',
    'Industries you serve',
  ];

  return (
    <>
      {/* FAB Button */}
      <button
        className={`stride-fab ${open ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="StrideAI Chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        <span className="fab-label">StrideAI</span>
      </button>

      {/* Chat Window */}
      <div className={`stride-chat ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-avatar">
              <img src="/logo.png" alt="StrideAI" />
            </div>
            <div>
              <div className="chat-name">StrideAI</div>
              <div className="chat-status">
                <span className="status-dot" />
                Online · Industrial Assistant
              </div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              {m.role === 'ai' && <div className="msg-avatar">S</div>}
              <div className="msg-bubble">{m.text}</div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg ai">
              <div className="msg-avatar">S</div>
              <div className="msg-bubble typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {messages.length === 1 && !loading && (
            <div className="quick-replies">
              {quickReplies.map(q => (
                <button
                  key={q}
                  className="quick-btn"
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => send(), 0);
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <textarea
            className="chat-input"
            placeholder="Ask StrideAI anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <button className="chat-send" onClick={send} disabled={!input.trim() || loading}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}