"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "wda", "education", "projects", "blog", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is currently active on screen
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -70; // Header height
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "wda", label: "World Data" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const mobileLinks = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "wda", label: "World Data Analysis", icon: "🌍" },
    { id: "education", label: "Education & Skills", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "💻" },
    { id: "blog", label: "Blog Briefs", icon: "📰" },
    { id: "contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <nav className={`nav-glass ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shadow-sm"
              style={{ background: "linear-gradient(135deg, var(--green-mid), var(--blue-sky))" }}
            >
              🌍
            </div>
            <div>
              <div className="font-display font-bold text-sm leading-tight text-green-deep">
                Joseph Wanyoike
              </div>
              <div className="font-mono text-xs text-green-mid">Njoroge</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://www.worlddataanalysis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta ml-2"
            >
              WDA Project
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-green-deep rounded transition-all duration-300 ${
                mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-green-deep rounded transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-green-deep rounded transition-all duration-300 ${
                mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu">
        {mobileLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className={`nav-link ${activeSection === link.id ? "active" : ""}`}
          >
            {link.icon} {link.label}
          </a>
        ))}
        <a
          href="http://www.worlddataanalysis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta text-center mt-2 block w-full"
        >
          🌍 WDA Project
        </a>
      </div>
    </nav>
  );
}
