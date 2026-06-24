"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -70;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      class: "li",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254725455307",
      class: "wa",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "#",
      class: "fb",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      url: "#",
      class: "x",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "var(--brown-deep)" }} className="text-white/75">
      
      {/* Footer Top — WDA Mini Data Strip */}
      <div
        className="py-5 px-4 sm:px-12 bg-gradient-to-r from-green-deep to-blue-deep border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌍</div>
            <div>
              <div className="font-display font-bold text-sm text-green-pale">
                World Data Analysis Project
              </div>
              <div className="text-[0.68rem] text-white/45">
                Data transparency · Global insights
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="text-center">
              <div className="font-mono font-medium text-white text-sm">8.12B</div>
              <div className="text-[0.6rem] text-white/40">Population</div>
            </div>
            <div className="text-center">
              <div className="font-mono font-medium text-white text-sm">$105T</div>
              <div className="text-[0.6rem] text-white/40">World GDP</div>
            </div>
            <div className="text-center">
              <div className="font-mono font-medium text-white text-sm">150+</div>
              <div className="text-[0.6rem] text-white/40">Datasets</div>
            </div>
            <div className="text-center">
              <div className="font-mono font-medium text-white text-sm">100+</div>
              <div className="text-[0.6rem] text-white/40">Articles</div>
            </div>
          </div>
          <a
            href="http://www.worlddataanalysis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 bg-white/12 border border-white/20 text-white"
          >
            Visit WDA →
          </a>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shadow-sm"
                style={{ background: "linear-gradient(135deg, var(--green-mid), var(--blue-sky))" }}
              >
                👨🏾‍💻
              </div>
              <div>
                <div className="font-display font-bold text-brown-pale">
                  Joseph Wanyoike Njoroge
                </div>
                <div className="font-mono text-xs text-brown-light">
                  Data Analyst · Full Stack Developer · Finance Analyst
                </div>
              </div>
            </div>
            
            <p className="text-[0.82rem] text-white/45 leading-relaxed max-w-[320px]">
              Building data-driven platforms that make complex world information transparent, accessible and beautiful. Lead Developer of the World Data Analysis Project.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-btn ${link.class}`}
                  style={{ width: "36px", height: "36px" }}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-bold uppercase tracking-wider text-brown-light mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="footer-link">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#wda" onClick={(e) => handleNavClick(e, "wda")} className="footer-link">
                  🌍 WDA Data
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e) => handleNavClick(e, "education")} className="footer-link">
                  🎓 Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="footer-link">
                  💻 Projects
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleNavClick(e, "blog")} className="footer-link">
                  📰 Blog
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="footer-link">
                  ✉️ Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-bold uppercase tracking-wider text-brown-light mb-3.5">
              Platforms
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="http://www.worlddataanalysis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  🌍 World Data Analysis
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="footer-link">
                  📊 World Finance Dashboard
                </a>
              </li>
              <li>
                <a href="mailto:email@josephwanyoike.com" className="footer-link">
                  ✉️ email@josephwanyoike.com
                </a>
              </li>
              <li>
                <a href="mailto:info@worlddataanalysis.com" className="footer-link">
                  📧 info@worlddataanalysis.com
                </a>
              </li>
              <li>
                <a href="tel:+254725455307" className="footer-link">
                  📞 +254 725 455 307
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="text-[0.75rem] text-white/30">
              © {currentYear} All rights reserved.{" "}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-green-pale font-semibold hover:underline"
              >
                Joseph Wanyoike Njoroge
              </a>
              {" "}·{" "}
              <a
                href="http://www.worlddataanalysis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-pale font-semibold hover:underline"
              >
                World Data Analysis
              </a>
            </div>
            <div className="text-[0.72rem] text-white/25">
              Built with Next.js · React 19 · TypeScript · Tailwind v4
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
