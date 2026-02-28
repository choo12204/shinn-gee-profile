import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Skill bar animation on scroll
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const fill = target.querySelector('.skill-bar-fill') as HTMLElement;
          const pct = target.getAttribute('data-pct');
          if (fill && pct) {
            fill.style.transform = `scaleX(${pct})`;
          }
          target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    skillItems.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeNav = () => setIsMenuOpen(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <link 
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" 
        rel="stylesheet"
      />

      <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="knob"><span>{isDark ? "🌙" : "☀️"}</span></div>
      </button>

      <nav className={`nav-drawer ${isMenuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeNav}>Home</a>
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#projects" onClick={closeNav}>Projects</a>
        <a href="#skills" onClick={closeNav}>Skills</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
      </nav>
      
      <div 
        className={`overlay ${isMenuOpen ? "visible" : ""}`} 
        onClick={closeNav}
      ></div>

      <div className="signature">SG</div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero" id="hero">
        <div className="bg-name">
          <span>SHINN</span>
          <span>GEE</span>
        </div>
        <div className="avatar-wrap">
          <img 
            src="https://raw.githubusercontent.com/choo12204/my-portfolio/main/IMG_4185.JPG" 
            alt="Shinn Gee" 
          />
        </div>
        <div className="scroll-cue">&#8964;</div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className="page-section" id="about">
        <div className="section-label" aria-hidden="true">ABOUT</div>
        <div className="section-title">About Me</div>
        <div className="about-grid">
          <div className="about-text">
            <p>Hey, I'm <em>Shinn Gee</em> — a developer and designer who believes great products live at the intersection of clean code and thoughtful design.</p>
            <p>I build fast, accessible, and visually striking experiences for the web. Whether it's a polished UI, a full-stack application, or a creative side project — I care deeply about the details.</p>
            <p>When I'm not coding, you'll find me exploring design trends, gaming, or hunting for the best coffee in town.</p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <div className="label">Based In</div>
              <div className="value">Malaysia</div>
            </div>
            <div className="fact">
              <div className="label">Role</div>
              <div className="value">Frontend Developer & UI Designer</div>
            </div>
            <div className="fact">
              <div className="label">Experience</div>
              <div className="value">3+ Years</div>
            </div>
            <div className="fact">
              <div className="label">Available For</div>
              <div className="value">Freelance & Full-time Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section className="page-section" id="projects">
        <div className="section-label" aria-hidden="true">PROJECTS</div>
        <div className="section-title">Projects</div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="proj-num">01</div>
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built from scratch with custom animations, dark/light theming, and a bold typographic identity.</p>
            <div className="proj-tags"><span>HTML</span><span>CSS</span><span>JS</span></div>
          </div>
          <div className="project-card">
            <div className="proj-num">02</div>
            <h3>E-Commerce Dashboard</h3>
            <p>A responsive admin dashboard with real-time charts, product management, and a clean minimal UI for an online store.</p>
            <div className="proj-tags"><span>React</span><span>Tailwind</span><span>Node.js</span></div>
          </div>
          <div className="project-card">
            <div className="proj-num">03</div>
            <h3>Mobile Weather App</h3>
            <p>A sleek weather app with live forecasts, animated backgrounds based on conditions, and location-aware data.</p>
            <div className="proj-tags"><span>React Native</span><span>API</span></div>
          </div>
          <div className="project-card">
            <div className="proj-num">04</div>
            <h3>Brand Identity System</h3>
            <p>A complete visual identity for a local café — logo, typography, colour palette, and social media templates.</p>
            <div className="proj-tags"><span>Figma</span><span>Illustrator</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section className="page-section" id="skills" ref={skillsRef}>
        <div className="section-label" aria-hidden="true">SKILLS</div>
        <div className="section-title">Skills</div>
        <div className="skills-container">
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.92">
                <span className="skill-name">HTML & CSS</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">92%</span>
              </div>
              <div className="skill-item" data-pct="0.85">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">85%</span>
              </div>
              <div className="skill-item" data-pct="0.78">
                <span className="skill-name">React</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">78%</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Design</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.88">
                <span className="skill-name">Figma</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">88%</span>
              </div>
              <div className="skill-item" data-pct="0.72">
                <span className="skill-name">Illustrator</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">72%</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend & Tools</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.70">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">70%</span>
              </div>
              <div className="skill-item" data-pct="0.80">
                <span className="skill-name">Git & GitHub</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">80%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section className="page-section" id="contact">
        <div className="section-label" aria-hidden="true">CONTACT</div>
        <div className="section-title">Get In Touch</div>
        <div className="contact-wrap">
          <p className="contact-intro">I'm always open to new opportunities, collaborations, or just a good conversation. Drop me a line through any of the channels below.</p>
          <div className="contact-links">
            <a href="mailto:shinngee@email.com" className="contact-link">
              <span className="icon">✉️</span>
              <div className="details">
                <div className="ctype">Email</div>
                <div className="cval">shinngee@email.com</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/shinngee" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💼</span>
              <div className="details">
                <div className="ctype">LinkedIn</div>
                <div className="cval">linkedin.com/in/shinngee</div>
              </div>
            </a>
            <a href="https://github.com/shinngee" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🐙</span>
              <div className="details">
                <div className="ctype">GitHub</div>
                <div className="cval">github.com/shinngee</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>© 2026 Shinn Gee — Built with passion</footer>
    </div>
  );
}
