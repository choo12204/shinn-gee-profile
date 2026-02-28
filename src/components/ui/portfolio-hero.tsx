import React, { useState, useEffect, useRef } from "react";

export default function Component() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => setIsDark(!isDark);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative">
      {/* HAMBURGER BUTTON */}
      <button
        ref={buttonRef}
        className="fixed top-[26px] left-[26px] z-[100] cursor-pointer bg-transparent border-none flex flex-col gap-[6px] p-[6px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className="block w-[28px] h-[2px] bg-[var(--bar-color)] transition-colors duration-400" />
        <span className="block w-[28px] h-[2px] bg-[var(--bar-color)] transition-colors duration-400" />
        <span className="block w-[28px] h-[2px] bg-[var(--bar-color)] transition-colors duration-400" />
      </button>

      {/* THEME TOGGLE */}
      <button
        className="theme-toggle fixed top-[22px] right-[26px] z-[100] cursor-pointer bg-[var(--toggle-bg)] border-none rounded-[50px] w-[54px] h-[28px] flex items-center padding-[3px] transition-colors duration-400"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div 
          className="knob w-[22px] h-[22px] rounded-full bg-[var(--toggle-fg)] flex items-center justify-center text-[11px] transition-transform duration-350"
          style={{ transform: isDark ? 'translateX(3px)' : 'translateX(29px)' }}
        >
          {isDark ? '🌙' : '☀️'}
        </div>
      </button>

      {/* NAV DRAWER */}
      <nav
        ref={menuRef}
        className={`nav-drawer fixed top-0 left-0 h-full w-[230px] bg-[var(--drawer-bg)] backdrop-blur-[16px] z-[90] transition-transform duration-450 flex flex-col justify-center pl-[44px] gap-[4px] border-r border-[var(--neon)] border-opacity-10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-['Bebas_Neue'] text-[2rem] tracking-[0.14em] text-[var(--drawer-text)] no-underline py-[10px] border-b border-gray-500 border-opacity-10 transition-all duration-200 hover:text-[var(--neon)] hover:tracking-[0.22em]"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[80] transition-opacity duration-400"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* SIGNATURE */}
      <div className="fixed top-[14px] left-1/2 -translate-x-1/2 z-[50] font-['Dancing_Script'] italic text-[2.3rem] text-[var(--sig-color)] tracking-[0.04em] transition-colors duration-400 whitespace-nowrap after:content-[''] after:block after:h-[1.5px] after:bg-[var(--neon)] after:w-[70%] after:mx-auto after:mt-[2px] after:shadow-[0_0_8px_var(--neon-glow)]">
        SG
      </div>

      <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* BIG neon name behind image */}
        <div className="bg-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[-0.05em] leading-[0.82] select-none pointer-events-none z-[1]">
          <span className="font-['Bebas_Neue'] text-[clamp(8rem,24vw,22rem)] tracking-[0.1em] text-[var(--neon)] shadow-[0_0_18px_var(--neon-glow),0_0_50px_var(--neon-glow),0_0_100px_rgba(198,241,53,0.18)] block whitespace-nowrap transition-all duration-400">
            SHINN
          </span>
          <span className="font-['Bebas_Neue'] text-[clamp(8rem,24vw,22rem)] tracking-[0.1em] text-[var(--neon)] shadow-[0_0_18px_var(--neon-glow),0_0_50px_var(--neon-glow),0_0_100px_rgba(198,241,53,0.18)] block whitespace-nowrap transition-all duration-400">
            GEE
          </span>
        </div>

        {/* Small rounded-top-bottom image on top */}
        <div className="avatar-wrap relative z-[2] w-[115px] h-[155px] animate-fadeUp flex-shrink-0">
          <img
            src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG"
            alt="Shinn Gee"
            className="w-full h-full object-cover shadow-[0_0_0_2px_rgba(198,241,53,0.25),0_8px_40px_rgba(0,0,0,0.7)]"
            style={{ borderRadius: "50% 50% 50% 50% / 38% 38% 38% 38%" }}
          />
        </div>
      </section>
    </div>
  );
}
