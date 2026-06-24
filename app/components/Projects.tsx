"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-warm-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 reveal ${animate ? "visible" : ""}`}>
          <div className="section-label justify-center">Featured Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 text-sm text-[#7a7a7a] max-w-[480px] mx-auto">
            Building platforms that make data transparent, accessible, and actionable.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: WDA */}
          <div className={`project-card reveal-left ${animate ? "visible" : ""}`}>
            <div
              className="project-card-banner relative"
              style={{ background: "linear-gradient(135deg, var(--green-deep) 0%, var(--blue-deep) 100%)" }}
            >
              <div className="overlay" />
              {/* Mini world viz in banner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25">
                <svg width="200" height="160" viewBox="0 0 200 160">
                  <circle cx="100" cy="80" r="60" fill="none" stroke="white" strokeWidth="1" />
                  <circle cx="100" cy="80" r="45" fill="none" stroke="white" strokeWidth=".5" />
                  <ellipse cx="100" cy="80" rx="20" ry="60" fill="none" stroke="white" strokeWidth=".7" />
                  <line x1="40" y1="80" x2="160" y2="80" stroke="white" strokeWidth=".5" />
                  <line x1="40" y1="55" x2="160" y2="55" stroke="white" strokeWidth=".3" />
                  <line x1="40" y1="105" x2="160" y2="105" stroke="white" strokeWidth=".3" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-white font-display font-bold text-xl">World Data Analysis</div>
                <div className="text-[0.75rem] text-white/65">www.worlddataanalysis.com</div>
              </div>
              <div className="absolute top-3.5 right-3.5 bg-green-light px-3 py-1 rounded-full text-xs font-bold text-green-deep animate-pulse-slow">
                🟢 LIVE
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-pale text-green-deep">Full Stack</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-pale text-blue-deep">Data Viz</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brown-pale text-brown-deep">Django</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#e8f5e9] text-[#1b5e20]">Next.js</span>
              </div>
              <p className="text-[0.82rem] text-[#4a4a4a] leading-relaxed mb-4">
                A comprehensive data journalism platform inspired by Our World in Data. Features interactive choropleth maps, real-time data feeds, long-form analysis articles, and animated charts built with D3.js and Plotly.js. Powered by Django REST API with World Bank data integration.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="http://www.worlddataanalysis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--green-deep), var(--blue-deep))" }}
                >
                  🌍 Visit Site
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border text-[#4a4a4a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Finance Dashboard */}
          <div className={`project-card reveal-right ${animate ? "visible" : ""}`}>
            <div
              className="project-card-banner relative"
              style={{ background: "linear-gradient(135deg, #1b5e20 0%, #0d47a1 50%, #4a148c 100%)" }}
            >
              <div className="overlay" />
              {/* Finance lines viz in banner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg width="200" height="100" viewBox="0 0 200 100">
                  <polyline points="0,80 20,70 40,75 60,55 80,60 100,40 120,45 140,25 160,30 180,15 200,18" fill="none" stroke="white" strokeWidth="2" />
                  <polyline points="0,90 20,88 40,85 60,80 80,75 100,65 120,60 140,50 160,45 180,35 200,30" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-white font-display font-bold text-xl">World Finance Dashboard</div>
                <div className="text-[0.75rem] text-white/65">Indexes · Crypto · Markets · Calculators</div>
              </div>
              <div className="absolute top-3.5 right-3.5 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white">
                🔨 In Development
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#e8eaf6] text-[#283593]">Finance</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#e8f5e9] text-[#1b5e20]">Next.js</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#fce4ec] text-[#880e4f]">Real-time APIs</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#e0f2f1] text-[#004d40]">Crypto</span>
              </div>
              <p className="text-[0.82rem] text-[#4a4a4a] leading-relaxed mb-4">
                A comprehensive global financial intelligence platform featuring live stock market indexes (NYSE, NSE, LSE), cryptocurrency dashboards, forex rates, commodity prices, financial calculators (compound interest, loan, ROI), and portfolio trackers.
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="rounded-lg p-2 text-center bg-green-pale">
                  <div className="text-[0.65rem] text-green-deep font-semibold">📈 Market Indexes</div>
                </div>
                <div className="rounded-lg p-2 text-center bg-blue-pale">
                  <div className="text-[0.65rem] text-blue-deep font-semibold">₿ Crypto Tracker</div>
                </div>
                <div className="rounded-lg p-2 text-center bg-brown-pale">
                  <div className="text-[0.65rem] text-brown-deep font-semibold">💱 Forex Rates</div>
                </div>
                <div className="rounded-lg p-2 text-center bg-[#e8f5e9]">
                  <div className="text-[0.65rem] text-[#1b5e20] font-semibold">🧮 Calculators</div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border text-[#4a4a4a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
