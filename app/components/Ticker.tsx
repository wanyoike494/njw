"use client";

import { useEffect, useState } from "react";

export default function Ticker() {
  const [population, setPopulation] = useState(8120000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPopulation((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const displayPop = (population / 1e9).toFixed(3) + "B";

  const tickerText = (
    <>
      <span className="text-green-light">↑</span> World Population:{" "}
      <span className="live-pop font-semibold">{displayPop}</span> &nbsp;●&nbsp;{" "}
      <span className="text-green-light">↑</span> Global GDP: $105T &nbsp;●&nbsp;{" "}
      CO₂: 421ppm &nbsp;●&nbsp;{" "}
      <span className="text-green-light">↑</span> Renewables: 30% energy mix &nbsp;●&nbsp;{" "}
      Life Expectancy: 73.3 yrs &nbsp;●&nbsp;{" "}
      Internet Users: 5.4B &nbsp;●&nbsp;{" "}
      Forest Cover: 31% &nbsp;●&nbsp;{" "}
      WDA Project — Making data transparent for everyone &nbsp;●&nbsp;
    </>
  );

  return (
    <div
      className="py-1.5 overflow-hidden mt-16"
      style={{ backgroundColor: "var(--blue-deep)" }}
    >
      <div className="ticker-track font-mono text-[0.72rem] text-white/75">
        <span className="whitespace-nowrap pr-[60px]">{tickerText}</span>
        <span className="whitespace-nowrap pr-[60px]">{tickerText}</span>
        <span className="whitespace-nowrap pr-[60px]">{tickerText}</span>
        <span className="whitespace-nowrap pr-[60px]">{tickerText}</span>
      </div>
    </div>
  );
}
