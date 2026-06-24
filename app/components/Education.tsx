"use client";

import { useEffect, useRef, useState } from "react";

export default function Education() {
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

  const webSkills = [
    { name: "HTML5 / CSS3", level: 95, grad: "linear-gradient(90deg, var(--green-mid), var(--green-light))" },
    { name: "JavaScript (ES6+)", level: 88, grad: "linear-gradient(90deg, #f57f17, #ffd54f)" },
    { name: "Next.js / React", level: 82, grad: "linear-gradient(90deg, var(--blue-mid), var(--blue-sky))" },
    { name: "Django / Python", level: 78, grad: "linear-gradient(90deg, #1b5e20, var(--green-mid))" },
    { name: "Tailwind CSS", level: 90, grad: "linear-gradient(90deg, #0284c7, #38bdf8)" },
    { name: "D3.js / Plotly.js", level: 80, grad: "linear-gradient(90deg, #7b1fa2, #ce93d8)" },
  ];

  const dataSkills = [
    { name: "Data Analysis (Python/Pandas)", level: 85, grad: "linear-gradient(90deg, var(--blue-mid), var(--blue-sky))" },
    { name: "Data Visualisation", level: 88, grad: "linear-gradient(90deg, var(--green-mid), var(--green-light))" },
    { name: "Financial Modelling", level: 82, grad: "linear-gradient(90deg, var(--brown-mid), var(--brown-light))" },
    { name: "SQL / Databases", level: 78, grad: "linear-gradient(90deg, #0277bd, #4fc3f7)" },
    { name: "Investment Analysis", level: 84, grad: "linear-gradient(90deg, #4e342e, var(--brown-mid))" },
    { name: "REST APIs / Backend", level: 76, grad: "linear-gradient(90deg, #1a3c2e, var(--green-mid))" },
  ];

  const techStack = [
    { name: "HTML5", bg: "#fff3e0", color: "#e65100", border: "#ffe0b2" },
    { name: "CSS3", bg: "#e3f2fd", color: "#1565c0", border: "#bbdefb" },
    { name: "JavaScript", bg: "#fff9c4", color: "#f57f17", border: "#fff176" },
    { name: "Next.js", bg: "#e8f5e9", color: "#2e7d32", border: "#c8e6c9" },
    { name: "Django", bg: "#e8f5e9", color: "#1b5e20", border: "#a5d6a7" },
    { name: "Tailwind CSS", bg: "#e0f2f1", color: "#00695c", border: "#b2dfdb" },
    { name: "D3.js", bg: "#e8eaf6", color: "#283593", border: "#c5cae9" },
    { name: "Plotly.js", bg: "#fce4ec", color: "#880e4f", border: "#f8bbd0" },
    { name: "Python", bg: "#e8f5e9", color: "#2d6a4f", border: "var(--green-pale)" },
    { name: "REST API", bg: "#e3f2fd", color: "#0d47a1", border: "var(--blue-pale)" },
    { name: "PostgreSQL", bg: "#ede7f6", color: "#4527a0", border: "#d1c4e9" },
    { name: "Git / GitHub", bg: "#fbe9e7", color: "#bf360c", border: "#ffccbc" },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-warm-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 reveal ${animate ? "visible" : ""}`}>
          <div className="section-label justify-center">Education & Skills</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="mt-3 text-sm text-[#7a7a7a] max-w-[480px] mx-auto">
            Grounded in economics and technology — built to analyse, develop, and innovate.
          </p>
        </div>

        {/* Education grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* JKUAT Card */}
          <div className={`edu-card reveal-left ${animate ? "visible" : ""}`}>
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm"
                style={{ background: "linear-gradient(135deg, #1a3c2e, #2d6a4f)" }}
              >
                <div className="text-center p-1">
                  <div className="text-[0.45rem] font-black text-green-pale font-display leading-tight">JKUAT</div>
                  <div className="text-[0.35rem] text-white/60 leading-tight mt-0.5">KENYA</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-widest mb-1 text-green-mid">2018 – 2023</div>
                <h3 className="font-display font-bold text-lg text-green-deep">BSc Economics</h3>
                <p className="text-sm font-semibold mb-1 text-[#4a4a4a]">
                  Jomo Kenyatta University of Agriculture & Technology
                </p>
                <p className="text-[0.78rem] text-[#7a7a7a] leading-relaxed">
                  Econometrics · Macroeconomics · Statistics · Financial Markets · Research Methods · Development Economics
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-green-pale text-green-deep">Economics</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-pale text-blue-deep">Econometrics</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-brown-pale text-brown-deep">Statistics</span>
                </div>
              </div>
            </div>
          </div>

          {/* KASNEB / CIFA Card */}
          <div className={`edu-card reveal-right ${animate ? "visible" : ""}`}>
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ background: "linear-gradient(135deg, var(--blue-deep), var(--blue-mid))" }}
              >
                <div className="text-center p-1">
                  <div className="text-[0.42rem] font-black text-blue-pale font-display leading-tight">KASNEB</div>
                  <div className="text-[0.32rem] text-white/60 leading-tight mt-0.5">CIFA</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-widest mb-1 text-blue-mid">Professional Certification</div>
                <h3 className="font-display font-bold text-lg text-blue-deep">
                  CIFA — Certified Investment & Financial Analyst
                </h3>
                <p className="text-sm font-semibold mb-1 text-[#4a4a4a]">
                  KASNEB — Kenya Accountants & Secretaries National Examinations Board
                </p>
                <p className="text-[0.78rem] text-[#7a7a7a] leading-relaxed">
                  Investment Analysis · Portfolio Management · Financial Derivatives · Capital Markets · Risk Management
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-pale text-blue-deep">Finance</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-green-pale text-green-deep">Investment</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-[#fff3e0] text-[#e65100]">Capital Markets</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Skills Section */}
        <div className={`reveal mb-4 ${animate ? "visible" : ""}`}>
          <div className="section-label">Technical Skills</div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 reveal ${animate ? "visible" : ""}`}>
          
          {/* Column 1: Web Dev */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-green-deep">💻 Web Development</h3>
            <div className="space-y-4">
              {webSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[0.82rem] font-semibold text-[#4a4a4a]">{skill.name}</span>
                    <span className="font-mono text-xs text-green-mid">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                        background: skill.grad,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Data & Finance */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-blue-deep">📊 Data & Finance</h3>
            <div className="space-y-4">
              {dataSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[0.82rem] font-semibold text-[#4a4a4a]">{skill.name}</span>
                    <span className="font-mono text-xs text-blue-mid">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                        background: skill.grad,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tech stack badges */}
        <div className={`mt-10 reveal ${animate ? "visible" : ""}`}>
          <div className="font-mono text-xs uppercase tracking-widest mb-3 text-green-mid">Tech Stack</div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: tech.bg,
                  color: tech.color,
                  borderColor: tech.border,
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
