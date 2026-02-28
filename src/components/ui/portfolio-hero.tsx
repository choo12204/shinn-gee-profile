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
      className="h-screen w-full text-foreground transition-colors relative overflow-hidden font-sans flex flex-col items-center justify-center"
      style={{
        backgroundColor: isDark ? "#050505" : "#fdfdfd",
        color: isDark ? "#ffffff" : "#0a0a0a",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto relative w-full h-full">
          
          {/* Menu Button - Top Left - Clickable area enabled */}
          <div className="relative pointer-events-auto">
            <button
              ref={buttonRef}
              type="button"
              className="p-3 transition-colors duration-300 z-50 text-neutral-400 hover:text-white bg-transparent"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[240px] bg-black/95 backdrop-blur-2xl border border-white/10 mt-4 p-10 rounded-2xl z-[100] flex flex-col gap-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-2xl font-bold tracking-[0.2em] text-white/50 hover:text-[#C3E41D] transition-colors duration-300 uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature - Top Middle - Absolute Centered in viewport */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 text-4xl font-serif font-black italic tracking-tighter pointer-events-auto" style={{ color: isDark ? "#ffffff" : "#0a0a0a" }}>
            SG
          </div>

          {/* Theme Toggle - Top Right */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors pointer-events-auto"
            aria-label="Toggle theme"
          >
            <div className={`w-5 h-5 rounded-full transition-all duration-500 ${isDark ? 'bg-white shadow-[0_0_10px_#fff]' : 'bg-black shadow-[0_0_10px_#000]'}`} />
          </button>
        </nav>
      </header>

      {/* Hero Section - Perfect Center Container */}
      <main className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Background Bold Text - High Impact & Perfectly Centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h1 className="font-['Anton'] text-[20vw] leading-none text-white/[0.07] dark:text-white/[0.08] uppercase tracking-tighter whitespace-nowrap">
            SHINN GEE
          </h1>
        </div>

        {/* Centered Oval Portrait - Forced aspect ratio and rounded-full */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-[280px] h-[420px] sm:w-[340px] sm:h-[510px] md:w-[450px] md:h-[675px] rounded-[200px] sm:rounded-[250px] md:rounded-[300px] overflow-hidden border-[8px] border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-1000 hover:scale-[1.02] group">
            <img
              src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG"
              alt="Shinn Gee Portrait"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Subtle Tagline Below Oval */}
          <div className="mt-16 text-center max-w-md px-6">
            <p className="font-['Oswald'] text-[12px] sm:text-[14px] uppercase tracking-[0.8em] text-white/40 leading-loose">
              Designing the future of robotics through code.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ChevronDown className="w-10 h-10 text-[#C3E41D]" />
        </div>
      </main>
    </div>
  );
}
