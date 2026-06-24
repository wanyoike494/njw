"use client";

import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      class: "li",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254725455307",
      class: "wa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp Business",
      url: "#",
      class: "wab",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "#",
      class: "fb",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      url: "#",
      class: "x",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      url: "#",
      class: "th",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.017-3.481.874-6.351 2.499-8.431C5.867 1.354 8.619.176 12.19.176h.014c3.505.024 6.262 1.212 8.191 3.509 1.64 1.972 2.49 4.871 2.505 8.399.016 3.566-.872 6.448-2.556 8.432-1.92 2.235-4.678 3.457-8.158 3.484zm-.029-22.824h-.007c-3.048.02-5.286.96-6.846 2.796C3.86 5.93 3.17 8.437 3.156 11.996v.07c.013 3.595.706 6.127 2.152 8.049 1.552 2.04 3.79 3.073 6.852 3.096 2.988-.019 5.22-.961 6.832-2.879 1.483-1.771 2.213-4.44 2.199-7.933-.016-3.526-.754-6.125-2.193-7.888-1.553-1.898-3.79-2.862-6.841-2.335z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "#",
      class: "ig",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 2.978 1.522 5.398 1.522 5.398.093.313.34.53.647.575.305.045.617-.1.79-.365l2.18-2.301 4.512 3.682.077.06c.959.72 2.249.206 2.498-.969l3.337-15.998c.197-.948-.156-1.832-.92-2.176zm-3.023 4.48-8.416 7.99-1.02 2.977-.636-2.327-1.57-5.527 11.642-3.113z" />
        </svg>
      ),
    },
    {
      name: "Snapchat",
      url: "#",
      class: "sc",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.49-.104.28 0 .54.094.667.326.126.232.076.517-.1.7-.176.184-.55.289-.95.358-.136.023-.276.044-.402.089-.311.13-.568.376-.692.621-.12.238-.18.5-.163.77l.003.04c.032.403.105 1.286 1.17 1.572.39.108.699.427.699.752 0 .325-.31.643-.699.752-1.065.286-1.138 1.169-1.17 1.572l-.003.04c-.017.27-.042.533-.163.77-.124.246-.38.492-.692.622-.126.044-.266.065-.402.088-.4.07-.774.174-.95.358-.176.184-.226.469-.1.7.127.232.386.326.667.326.146 0 .325-.016.49-.104.374-.18.733-.285 1.033-.301.198 0 .326.045.401.09-.008.165-.018.33-.03.51l.003.06c.104 1.628.23 3.654-.299 4.847-1.583 3.545-4.94 3.821-5.93 3.821H11.794c-.99 0-4.347-.276-5.93-3.821-.529-1.193-.403-3.219-.299-4.847l.003-.06c-.012-.18-.022-.345-.03-.51.075-.045.203-.09.401-.09.3.016.659.12 1.033.301.165.088.344.104.49.104.28 0 .54-.094.667-.326.126-.232.076-.517-.1-.7-.176-.184-.55-.289-.95-.358-.136-.023-.276-.044-.402-.089-.311-.13-.568-.376-.692-.621-.12-.238-.18-.5-.163-.77l.003-.04c.032-.403.105-1.286 1.17-1.572.39-.108.699-.427.699-.752 0-.325-.31-.643-.699-.752-1.065-.286-1.138-1.169-1.17-1.572l-.003-.04c-.017-.27-.042-.533-.163-.77-.124-.246-.38-.492-.692-.622-.126-.044-.266-.065-.402-.088-.4-.07-.774-.174-.95-.358-.176-.184-.226-.469-.1-.7.127-.232.386-.326.667-.326.146 0 .325.016.49.104.374.18.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l.003-.06c-.104-1.628-.23-3.654.299-4.847C7.46 1.07 10.816.793 11.806.793h.4z" />
        </svg>
      ),
    },
    {
      name: "Messenger",
      url: "#",
      class: "ms",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.259 5.889-3.259-6.56 6.963z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "#",
      class: "tt",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="hero-section flex items-center py-16 px-4 sm:px-6 relative">
      <div className="hero-orb1"></div>
      <div className="hero-orb2"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text Info */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="section-label mb-4">Portfolio — Lead Developer & Analyst</div>

            <h1 className="font-display font-black leading-tight mb-3 text-green-deep text-[clamp(2.4rem,5vw,3.8rem)]">
              Joseph<br />
              <span className="text-blue-mid">Wanyoike</span><br />
              Njoroge
            </h1>

            {/* Animated badges/titles */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-pale text-green-deep">
                📊 Data Analyst
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-pale text-blue-deep">
                💻 Full Stack Developer
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-brown-pale text-brown-deep">
                💰 Finance Analyst
              </span>
            </div>

            {/* WDA Role card */}
            <div className="rounded-2xl p-4 mb-6 text-white bg-gradient-to-br from-green-deep to-blue-deep shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-semibold text-sm text-green-pale">
                    World Data Analysis Project
                  </div>
                  <div className="text-[0.72rem] text-white/55">
                    www.worlddataanalysis.com
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/80 space-y-0.5">
                <div>🔹 Lead Full Stack Web Developer</div>
                <div>🔹 Lead Data Analyst</div>
              </div>
            </div>

            {/* WDA Button */}
            <div className="mb-6">
              <a
                href="http://www.worlddataanalysis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="wda-btn inline-flex"
              >
                <span className="globe-spin">🌍</span>
                Visit World Data Analysis
              </a>
            </div>

            {/* Social media connections */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7a7a7a]">
              Connect with me
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {socialLinks.slice(0, 6).map((link) => (
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
            <div className="flex flex-wrap gap-2">
              {socialLinks.slice(6).map((link) => (
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

          {/* RIGHT: Profile picture + floating badges */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: "forwards" }}>
            <div className="relative w-[320px]">
              
              {/* Profile Wrapper */}
              <div className="profile-wrap w-[200px] h-[200px]">
                <div className="profile-ring"></div>
                <div className="profile-ring-inner"></div>
                <div className="profile-img overflow-hidden">
                  <Image
                    src="/joseph.jpg"
                    alt="Joseph Wanyoike Njoroge Profile Picture"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="floating-badge top-[-10px] right-0 text-green-deep" style={{ animationDelay: "0.5s" }}>
                <span className="text-[0.8rem]">🌍 WDA Project Lead</span>
              </div>
              <div className="floating-badge bottom-[30px] left-[-10px] text-blue-deep" style={{ animationDelay: "1.2s" }}>
                <span className="text-[0.8rem]">📊 Data Analyst</span>
              </div>
              <div className="floating-badge bottom-[-10px] right-[10px] text-brown-deep" style={{ animationDelay: "0.8s" }}>
                <span className="text-[0.8rem]">💻 Full Stack Dev</span>
              </div>

              {/* Mini orbiting lines visualization */}
              <div className="absolute top-4 left-0" style={{ animation: "float 5s ease-in-out infinite 1.5s" }}>
                <svg width="50" height="50" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--green-light)" strokeWidth="2" opacity=".4" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="var(--blue-sky)" strokeWidth="1.5" opacity=".3" />
                  <circle cx="50" cy="50" r="20" fill="var(--green-pale)" opacity=".3" />
                  <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="var(--green-mid)" strokeWidth="1.5" opacity=".35" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
