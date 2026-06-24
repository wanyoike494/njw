"use client";

import { useEffect, useRef, useState } from "react";

export default function WdaShowcase1() {
  // Live population counter
  const [popCount, setPopCount] = useState(8120000000);
  useEffect(() => {
    const interval = setInterval(() => {
      setPopCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const displayPop = (popCount / 1e9).toFixed(3) + "B";

  // Intersection Observer for animations
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
      { threshold: 0.15 }
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

  const stats = [
    { emoji: "🌍", val: displayPop, label: "World Population", extraClass: "live-pop" },
    { emoji: "💰", val: "$105T", label: "Global GDP" },
    { emoji: "🌡", val: "+1.2°C", label: "Global Warming", color: "#ef9a9a" },
    { emoji: "⚡", val: "30%", label: "Renewable Energy", color: "#ffd54f" },
    { emoji: "📡", val: "5.4B", label: "Internet Users", color: "var(--blue-pale)" },
    { emoji: "❤️", val: "73.3", label: "Life Expectancy", color: "var(--green-pale)" },
  ];

  const gdpData = [
    { label: "USA", width: 95, val: "$27T", grad: "linear-gradient(90deg, var(--blue-mid), var(--blue-sky))" },
    { label: "CHN", width: 76, val: "$18T", grad: "linear-gradient(90deg, var(--green-mid), var(--green-light))" },
    { label: "DEU", width: 38, val: "$4.4T", grad: "linear-gradient(90deg, var(--brown-mid), var(--brown-light))" },
    { label: "IND", width: 28, val: "$3.5T", grad: "linear-gradient(90deg, #e65100, #ff8f00)" },
    { label: "JPN", width: 24, val: "$4.2T", grad: "linear-gradient(90deg, #7b1fa2, #ab47bc)" },
  ];

  return (
    <section id="wda" className="data-strip py-14 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className={`text-center mb-10 reveal ${animate ? "visible" : ""}`}>
          <div className="font-mono text-xs uppercase tracking-widest mb-2 text-green-light">
            — World Data Analysis Project —
          </div>
          <h2 className="font-display font-black text-white text-[clamp(1.8rem,4vw,2.6rem)]">
            Data That Shapes Our World
          </h2>
          <p className="mt-2 text-sm text-white/55 max-w-[540px] mx-auto">
            Curated global statistics from the platform I built — making world data transparent and accessible.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 reveal ${animate ? "visible" : ""}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-tile text-center">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div
                className="font-mono text-lg font-medium"
                style={{ color: stat.color || "white" }}
              >
                {stat.val}
              </div>
              <div className="text-[0.65rem] text-white/45">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${animate ? "visible" : ""}`}>
          
          {/* Choropleth Simulation */}
          <div className="chart-card">
            <div className="inline-flex items-center gap-1 font-mono text-[0.7rem] font-medium text-blue-mid bg-blue-pale px-2.5 py-0.5 rounded-full mb-2.5">
              🗺 Population Map
            </div>
            <div className="font-display text-[0.95rem] font-bold text-[#1a1a1a] mb-1">
              Global Population Density
            </div>
            <div className="text-[0.75rem] text-[#7a7a7a] mb-3">
              Choropleth — country level
            </div>
            <div className="h-[140px] rounded-lg overflow-hidden relative bg-gradient-to-br from-[#ddeeff] via-[#c8e6c9] to-[#d7ccc8]">
              <div className="blob w-[35%] h-[50%] bg-green-mid top-[20%] left-[15%]" />
              <div className="blob w-[20%] h-[40%] bg-brown-mid top-[30%] left-[55%]" style={{ animationDelay: "2s" }} />
              <div className="blob w-[25%] h-[35%] bg-green-light top-[45%] left-[30%]" style={{ animationDelay: "1s" }} />
              <div className="blob w-[15%] h-[28%] bg-blue-mid top-[20%] left-[75%]" style={{ animationDelay: "3s" }} />
            </div>
          </div>

          {/* GDP Economy Bar Chart */}
          <div className="chart-card">
            <div className="inline-flex items-center gap-1 font-mono text-[0.7rem] font-medium text-green-deep bg-green-pale px-2.5 py-0.5 rounded-full mb-2.5">
              📊 Bar Chart
            </div>
            <div className="font-display text-[0.95rem] font-bold text-[#1a1a1a] mb-1">
              Top 5 Economies
            </div>
            <div className="text-[0.75rem] text-[#7a7a7a] mb-3">
              GDP in Trillions USD · 2024
            </div>
            <div className="h-[140px] flex flex-col justify-between">
              {gdpData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="text-[0.65rem] font-mono text-[#7a7a7a] w-7 text-right">
                    {item.label}
                  </div>
                  <div className="flex-1 h-5 bg-[#f0ede8] rounded overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-[1400ms] ease-out"
                      style={{
                        width: animate ? `${item.width}%` : "0%",
                        background: item.grad,
                      }}
                    />
                  </div>
                  <div className="text-[0.65rem] font-mono text-[#4a4a4a] w-[30px]">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Population Growth Line Chart */}
          <div className="chart-card">
            <div className="inline-flex items-center gap-1 font-mono text-[0.7rem] font-medium text-blue-mid bg-blue-pale px-2.5 py-0.5 rounded-full mb-2.5">
              📈 Line Chart
            </div>
            <div className="font-display text-[0.95rem] font-bold text-[#1a1a1a] mb-1">
              Population Growth
            </div>
            <div className="text-[0.75rem] text-[#7a7a7a] mb-2">
              1950–2025 · Billions
            </div>
            <div className="h-[140px] rounded-lg overflow-hidden relative bg-gradient-to-b from-[#f0f8ff] to-[#e8f5e9]">
              <svg viewBox="0 0 280 140" width="100%" height="100%">
                <defs>
                  <linearGradient id="popgrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1565c0" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#1565c0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="30" y1="10" x2="275" y2="10" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="30" y1="40" x2="275" y2="40" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="30" y1="70" x2="275" y2="70" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="30" y1="100" x2="275" y2="100" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="30" y1="128" x2="275" y2="128" stroke="#ccc" strokeWidth="1" />
                
                <text x="2" y="14" fontSize="8" fill="#999" fontFamily="var(--font-dm-mono)">8B</text>
                <text x="2" y="44" fontSize="8" fill="#999" fontFamily="var(--font-dm-mono)">7B</text>
                <text x="2" y="74" fontSize="8" fill="#999" fontFamily="var(--font-dm-mono)">6B</text>
                <text x="2" y="104" fontSize="8" fill="#999" fontFamily="var(--font-dm-mono)">4B</text>
                
                {/* SVG Area chart filled */}
                <path
                  d="M30,128 L75,120 L120,105 L165,82 L210,52 L255,22 L275,12 L275,128Z"
                  fill="url(#popgrad)"
                  style={{
                    transformOrigin: "bottom",
                    transform: animate ? "scaleY(1)" : "scaleY(0)",
                    transition: "transform 1.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                />
                
                {/* Stroke line path */}
                <polyline
                  points="30,128 75,120 120,105 165,82 210,52 255,22 275,12"
                  fill="none"
                  stroke="#1565c0"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 300,
                    strokeDashoffset: animate ? 0 : 300,
                    transition: "stroke-dashoffset 1.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                />
                
                <circle cx="275" cy="12" r="4" fill="#1565c0" opacity={animate ? 1 : 0} style={{ transition: "opacity 0.4s 1.4s" }} />
                
                <text x="22" y="138" fontSize="7" fill="#aaa" fontFamily="var(--font-dm-mono)">1950</text>
                <text x="200" y="138" fontSize="7" fill="#aaa" fontFamily="var(--font-dm-mono)">2010</text>
                <text x="255" y="138" fontSize="7" fill="#aaa" fontFamily="var(--font-dm-mono)">2025</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
