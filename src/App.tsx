import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <link 
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Bebas+Neue&family=Cormorant+Garamond:wght@300;400&display=swap" 
        rel="stylesheet"
      />

      <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="knob"><span>{isDark ? "🌙" : "☀️"}</span></div>
      </button>

      <nav className={`nav-drawer ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      
      <div 
        className={`overlay ${isMenuOpen ? "visible" : ""}`} 
        onClick={closeMenu}
      ></div>

      <div className="signature">SG</div>

      <section className="hero">
        {/* Massive neon name behind image */}
        <div className="bg-name">
          <span>SHINN</span>
          <span>GEE</span>
        </div>

        {/* Small rounded-top-bottom image on top */}
        <div className="avatar-wrap">
          <img 
            src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG" 
            alt="Shinn Gee" 
          />
        </div>
      </section>
    </div>
  );
}
