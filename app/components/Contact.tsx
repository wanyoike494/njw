"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        msg: "⚠️ Please fill in all required fields.",
      });
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({
        type: "error",
        msg: "⚠️ Please enter a valid email address.",
      });
      return;
    }

    // Build mailto Link
    const mailtoSubject = subject.trim() || "Portfolio Contact";
    const mailtoBody = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    
    window.location.href = `mailto:email@josephwanyoike.com?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(mailtoBody)}`;

    setFeedback({
      type: "success",
      msg: "✅ Opening your email client... Thank you!",
    });

    // Reset Form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      class: "li",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com",
      class: "gh",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254725455307",
      class: "wa",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp Business",
      url: "#",
      class: "wab",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "#",
      class: "fb",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      url: "#",
      class: "x",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "#",
      class: "ig",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--cream)" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--cream)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      url: "#",
      class: "tg",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 2.978 1.522 5.398 1.522 5.398.093.313.34.53.647.575.305.045.617-.1.79-.365l2.18-2.301 4.512 3.682.077.06c.959.72 2.249.206 2.498-.969l3.337-15.998c.197-.948-.156-1.832-.92-2.176zm-3.023 4.48-8.416 7.99-1.02 2.977-.636-2.327-1.57-5.527 11.642-3.113z" />
        </svg>
      ),
    },
    {
      name: "Messenger",
      url: "#",
      class: "ms",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.259 5.889-3.259-6.56 6.963z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-warm-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 reveal ${animate ? "visible" : ""}`}>
          <div className="section-label justify-center">Get In Touch</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-3 text-sm text-[#7a7a7a] max-w-[480px] mx-auto">
            Available for projects, collaborations, consulting, and data partnerships.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Form Column */}
          <div className={`reveal-left ${animate ? "visible" : ""}`}>
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-display font-bold text-xl mb-6 text-green-deep">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Project Collaboration"
                  />
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[120px]"
                    rows={5}
                    placeholder="Tell me about your project, idea or inquiry..."
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="submit-btn mt-2">
                  Send Message ✉️
                </button>
                {feedback.type && (
                  <div
                    className="mt-3 px-3.5 py-2.5 rounded-lg text-[0.82rem] font-semibold"
                    style={{
                      backgroundColor: feedback.type === "success" ? "#e8f5e9" : "#fce4ec",
                      color: feedback.type === "success" ? "#2e7d32" : "#c62828",
                    }}
                  >
                    {feedback.msg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Info Column */}
          <div className={`reveal-right flex flex-col gap-5 ${animate ? "visible" : ""}`}>
            
            {/* Direct Contact info */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: "linear-gradient(135deg, var(--green-mid), var(--blue-sky))" }}
                >
                  👨🏾‍💻
                </div>
                <div>
                  <div className="font-bold text-sm text-green-deep">Joseph Wanyoike Njoroge</div>
                  <div className="text-[0.72rem] text-[#7a7a7a]">Data Analyst · Full Stack Developer</div>
                </div>
              </div>
              
              <div className="space-y-3 font-medium">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <a href="tel:+254725455307" className="text-sm text-green-mid hover:underline">
                    +254 725 455 307
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:email@josephwanyoike.com" className="text-sm text-blue-mid hover:underline">
                    email@josephwanyoike.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <a href="http://www.josephwanyoike.com" className="text-sm text-green-mid hover:underline">
                    www.josephwanyoike.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span className="text-sm text-[#7a7a7a]">Nairobi, Kenya 🇰🇪</span>
                </div>
              </div>
            </div>

            {/* WDA contact info */}
            <div className="rounded-2xl p-6 text-white bg-gradient-to-br from-green-deep to-blue-deep shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-white/15">
                  🌍
                </div>
                <div>
                  <div className="font-bold text-sm text-green-pale">World Data Analysis Project</div>
                  <div className="text-[0.72rem] text-white/50">Data partnerships & media enquiries</div>
                </div>
              </div>
              
              <div className="space-y-3 font-medium text-white/90">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:info@worlddataanalysis.com" className="text-sm text-blue-pale hover:underline">
                    info@worlddataanalysis.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <a
                    href="http://www.worlddataanalysis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-pale hover:underline"
                  >
                    www.worlddataanalysis.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <a href="tel:+254702130630" className="text-sm text-white/80 hover:underline">
                    +254 702 130 630
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
              <div className="font-mono text-xs uppercase tracking-widest mb-3 text-green-mid">
                All Social Platforms
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-btn ${link.class}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
