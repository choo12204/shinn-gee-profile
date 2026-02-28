import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Component() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

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

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div 
      className="min-h-screen text-foreground transition-colors relative overflow-hidden font-sans"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto relative">
          
          {/* Menu Button - Top Left */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-3 transition-colors duration-300 z-50 text-neutral-500 hover:text-white bg-transparent border border-white/10 rounded-lg backdrop-blur-sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[240px] bg-black/90 backdrop-blur-xl border border-white/10 mt-4 p-8 rounded-2xl z-[100] flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xl font-bold tracking-[0.2em] text-white/60 hover:text-[#C3E41D] transition-colors duration-300 uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature - Top Middle */}
          <div className="absolute left-1/2 -translate-x-1/2 text-4xl font-serif font-black italic tracking-tighter" style={{ color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)" }}>
            SG
          </div>

          {/* Theme Toggle - Top Right */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors border border-white/5"
            aria-label="Toggle theme"
          >
            <div className={`w-5 h-5 rounded-full transition-all duration-500 shadow-sm ${isDark ? 'bg-white shadow-white/50' : 'bg-black shadow-black/50'}`} />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center">
        
        {/* Background Bold Text - Massive & Centered Behind Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="font-['Anton'] text-[18vw] md:text-[22vw] leading-none text-white/[0.04] uppercase tracking-tighter whitespace-nowrap transition-all duration-1000">
            SHINN GEE
          </h1>
        </div>

        {/* Centered Oval Portrait */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[280px] h-[420px] sm:w-[340px] sm:h-[510px] md:w-[420px] md:h-[630px] rounded-full overflow-hidden border-[16px] border-white/[0.03] shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-all duration-1000 hover:scale-[1.03] group cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG"
              alt="Shinn Gee Portrait"
              className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
          </div>
          
          {/* Subtle Tagline Below Oval */}
          <div className="mt-12 text-center max-w-xs">
            <p className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/40 leading-loose">
              Designing the future of robotics through advanced code.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-25">
          <ChevronDown className="w-8 h-8 text-[#C3E41D]" />
        </div>
      </main>
    </div>
  );
}
