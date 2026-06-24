"use client";

import { useEffect, useRef, useState } from "react";

export default function Blog() {
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

  const briefs = [
    {
      emoji: "🌍",
      category: "Population",
      catBg: "var(--green-pale)",
      catColor: "var(--green-deep)",
      title: "World population crosses 8 billion",
      desc: "The world hit 8 billion people in November 2022. Asia holds over 60% of the global population, led by India and China — each with over 1.4 billion people.",
      stat: "8.12B",
      statLabel: "people on Earth · 2025",
      statColor: "var(--green-deep)",
    },
    {
      emoji: "🇷🇺",
      category: "Geography",
      catBg: "var(--blue-pale)",
      catColor: "var(--blue-deep)",
      title: "Russia remains the world's largest country",
      desc: "Russia covers 17.1 million km² — spanning 11 time zones and over one-eighth of Earth's inhabited land. It is nearly twice the size of Canada, the second largest country.",
      stat: "17.1M km²",
      statLabel: "total land area · Russia",
      statColor: "var(--blue-mid)",
    },
    {
      emoji: "🇺🇸",
      category: "Economy",
      catBg: "#fff3e0",
      catColor: "#e65100",
      title: "USA is the world's top economy",
      desc: "The United States leads global GDP with $27 trillion — making up about 25% of world output. China, at $18T, follows in second place and is projected to overtake by 2035.",
      stat: "$27T",
      statLabel: "USA GDP · World Bank 2024",
      statColor: "#e65100",
    },
    {
      emoji: "🌲",
      category: "Environment",
      catBg: "#e8f5e9",
      catColor: "#1b5e20",
      title: "World forest cover stands at 31%",
      desc: "Approximately 4.06 billion hectares of forest cover 31% of Earth's land. Deforestation claims 4.2 million hectares annually — primarily in tropical regions of Brazil and the Congo.",
      stat: "−4.2M ha",
      statLabel: "forest lost per year · FAO",
      statColor: "#1b5e20",
    },
    {
      emoji: "⚡",
      category: "Energy",
      catBg: "#e8eaf6",
      catColor: "#283593",
      title: "Renewables now 30% of global energy mix",
      desc: "Solar and wind capacity additions hit record highs in 2024, making renewables 30% of global electricity generation. Costs have fallen 89% for solar over the last decade.",
      stat: "−89%",
      statLabel: "solar cost reduction · 2010–2024",
      statColor: "#283593",
    },
    {
      emoji: "💊",
      category: "Health",
      catBg: "#fce4ec",
      catColor: "#880e4f",
      title: "Global life expectancy rises to 73.3 years",
      desc: "Average global life expectancy has increased by 6 years since 2000, reaching 73.3 years in 2024. Japan leads at 84 years; improvements are most dramatic in sub-Saharan Africa.",
      stat: "73.3 yrs",
      statLabel: "global average · WHO 2024",
      statColor: "#880e4f",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 bg-cream" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 reveal ${animate ? "visible" : ""}`}>
          <div className="section-label justify-center">World Data Briefs</div>
          <h2 className="section-title">Global Insights</h2>
          <p className="mt-3 text-sm text-[#7a7a7a] max-w-[540px] mx-auto">
            Data-driven snapshots of our world — excerpts from the World Data Analysis project.
          </p>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${animate ? "visible" : ""}`}>
          {briefs.map((brief, idx) => (
            <div key={idx} className="blog-brief flex flex-col justify-between h-full bg-white">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{brief.emoji}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: brief.catBg, color: brief.catColor }}
                  >
                    {brief.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base mb-2 text-green-deep">
                  {brief.title}
                </h3>
                <p className="text-[0.78rem] text-[#7a7a7a] leading-relaxed mb-4">
                  {brief.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-border mt-auto">
                <div
                  className="font-mono text-lg font-semibold"
                  style={{ color: brief.statColor }}
                >
                  {brief.stat}
                </div>
                <div className="text-[0.65rem] text-[#7a7a7a]">{brief.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className={`text-center mt-8 reveal ${animate ? "visible" : ""}`}>
          <a
            href="http://www.worlddataanalysis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: "var(--green-deep)", boxShadow: "0 4px 16px rgba(26,60,46,0.25)" }}
          >
            🌍 Read all analyses on WDA Project →
          </a>
        </div>

      </div>
    </section>
  );
}
