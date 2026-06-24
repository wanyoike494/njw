"use client";

import { useEffect, useRef, useState } from "react";

export default function WdaShowcase2() {
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

  const literacyData = [
    { label: "EUR", width: 99, val: "99%", grad: "linear-gradient(90deg, var(--blue-mid), var(--blue-sky))" },
    { label: "AME", width: 94, val: "94%", grad: "linear-gradient(90deg, var(--green-mid), var(--green-light))" },
    { label: "ASI", width: 85, val: "85%", grad: "linear-gradient(90deg, var(--brown-mid), var(--brown-light))" },
    { label: "AFR", width: 65, val: "65%", grad: "linear-gradient(90deg, #e65100, #ff8f00)" },
    { label: "OCE", width: 96, val: "96%", grad: "linear-gradient(90deg, #7b1fa2, #ab47bc)" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-cream" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-10 reveal ${animate ? "visible" : ""}`}>
          <div className="section-label justify-center">From the WDA Project</div>
          <h2 className="section-title">Global Insights Dashboard</h2>
        </div>

        {/* Dashboard Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 reveal ${animate ? "visible" : ""}`}>
          
          {/* Energy Donut Chart */}
          <div className="chart-card">
            <div className="font-semibold text-sm mb-3 text-[#4a4a4a]">⚡ Global Energy Mix 2024</div>
            <div className="flex items-center gap-4">
              <svg width="90" height="90" viewBox="0 0 90 90" className="flex-shrink-0">
                <circle cx="45" cy="45" r="34" fill="none" stroke="#e8e2d8" strokeWidth="12" />
                <circle
                  cx="45"
                  cy="45"
                  r="34"
                  fill="none"
                  stroke="#a1887f"
                  strokeWidth="12"
                  strokeDasharray="213 231"
                  strokeDashoffset="0"
                  transform="rotate(-90 45 45)"
                />
                <circle
                  cx="45"
                  cy="45"
                  r="34"
                  fill="none"
                  stroke="#52b788"
                  strokeWidth="12"
                  strokeDasharray="133 311"
                  strokeDashoffset="-213"
                  transform="rotate(-90 45 45)"
                />
                <circle
                  cx="45"
                  cy="45"
                  r="34"
                  fill="none"
                  stroke="#4a9fd4"
                  strokeWidth="12"
                  strokeDasharray="67 377"
                  strokeDashoffset="-346"
                  transform="rotate(-90 45 45)"
                />
                <circle
                  cx="45"
                  cy="45"
                  r="34"
                  fill="none"
                  stroke="#ffd54f"
                  strokeWidth="12"
                  strokeDasharray="31 413"
                  strokeDashoffset="-413"
                  transform="rotate(-90 45 45)"
                />
                <text x="45" y="49" textAnchor="middle" fontSize="11" fontFamily="var(--font-dm-mono)" fill="#4a4a4a">
                  52%
                </text>
                <text x="45" y="38" textAnchor="middle" fontSize="8" fill="#7a7a7a">
                  clean
                </text>
              </svg>
              <div className="text-[0.72rem] flex flex-col gap-1.5 font-medium text-[#4a4a4a]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52b788]" />
                  Solar/Wind 30%
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4a9fd4]" />
                  Hydro 15%
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd54f]" />
                  Nuclear 7%
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#a1887f]" />
                  Fossil 48%
                </div>
              </div>
            </div>
          </div>

          {/* CO2 Line Sparkline */}
          <div className="chart-card">
            <div className="font-semibold text-sm mb-1 text-[#4a4a4a]">🌡 CO₂ Concentration (ppm)</div>
            <div className="text-[0.7rem] text-[#7a7a7a] mb-2">Atmospheric — rising trend</div>
            <div className="h-[90px]">
              <svg viewBox="0 0 240 90" width="100%" height="90">
                <defs>
                  <linearGradient id="co2grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e53935" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#e53935" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="240" y2="20" stroke="#f0ede8" strokeWidth="1" />
                <line x1="0" y1="50" x2="240" y2="50" stroke="#f0ede8" strokeWidth="1" />
                <line x1="0" y1="80" x2="240" y2="80" stroke="#e0e0e0" strokeWidth="1" />
                
                <path
                  d="M0,78 L40,72 L80,64 L120,54 L160,40 L200,26 L240,12 L240,80 L0,80Z"
                  fill="url(#co2grad)"
                  style={{
                    transformOrigin: "bottom",
                    transform: animate ? "scaleY(1)" : "scaleY(0)",
                    transition: "transform 1.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                />
                <polyline
                  points="0,78 40,72 80,64 120,54 160,40 200,26 240,12"
                  fill="none"
                  stroke="#e53935"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 260,
                    strokeDashoffset: animate ? 0 : 260,
                    transition: "stroke-dashoffset 1.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                />
                
                <circle cx="240" cy="12" r="4" fill="#e53935" opacity={animate ? 1 : 0} style={{ transition: "opacity 0.4s 1.4s" }} />
                
                <text x="222" y="8" fontSize="9" fill="#e53935" fontFamily="var(--font-dm-mono)">421</text>
                <text x="0" y="88" fontSize="8" fill="#aaa" fontFamily="var(--font-dm-mono)">1960</text>
                <text x="100" y="88" fontSize="8" fill="#aaa" fontFamily="var(--font-dm-mono)">1990</text>
                <text x="210" y="88" fontSize="8" fill="#aaa" fontFamily="var(--font-dm-mono)">2025</text>
              </svg>
            </div>
          </div>

          {/* Literacy Rate Regional Bars */}
          <div className="chart-card">
            <div className="font-semibold text-sm mb-3 text-[#4a4a4a]">📚 Literacy Rate by Region</div>
            <div className="flex flex-col gap-2">
              {literacyData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-[0.65rem] font-mono text-[#7a7a7a] w-[30px]">{item.label}</div>
                  <div className="flex-1 h-[18px] bg-[#f0ede8] rounded overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-[1400ms] ease-out"
                      style={{
                        width: animate ? `${item.width}%` : "0%",
                        background: item.grad,
                      }}
                    />
                  </div>
                  <div className="text-[0.65rem] font-mono text-[#4a4a4a] w-7">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
