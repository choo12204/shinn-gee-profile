import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('sg-theme');
    return saved ? saved === 'dark' : true;
  });
  const skillsRef = useRef<HTMLDivElement>(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem('sg-theme', isDark ? 'dark' : 'light');
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
      <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="knob"><span>{isDark ? "☀️" : "🌙"}</span></div>
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
        <div className="scroll-cue">⌵</div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section className="page-section" id="about">
        <div className="section-label" aria-hidden="true">ABOUT</div>
        <div className="section-title">About Me</div>
        <div className="about-grid">
          <div className="about-text" style={{ textAlign: 'justify' }}>
            <p>I’m a <em>Robotics Engineering MEng</em> student at the University of Bath who builds systems where software, electronics, and mechanics meet.</p>
            <p>My focus is <em>control systems, embedded robotics, and autonomous platforms</em>. I design and simulate dynamic systems, implement control algorithms in C++ and MATLAB, and bring them to life on real hardware — from ROS2 robotic arms to closed-loop prosthetic devices and vehicle dynamic simulation models.</p>
            <p>Beyond technical depth, I lead and build. I’ve directed multi-university sporting events with 250+ participants and contributed to high-performance teams like Team Bath Racing Electric. I care about systems thinking, execution under constraints, and building things that work reliably — not just in simulation, but in the real world.</p>
            <p>I’m working toward becoming a robotics engineer who can design, model, control, and deploy intelligent physical systems end-to-end.</p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <div className="label">University</div>
              <div className="value">University of Bath</div>
            </div>
            <div className="fact">
              <div className="label">Role</div>
              <div className="value">Robotics Engineering MEng</div>
            </div>
            <div className="fact">
              <div className="label">Focus</div>
              <div className="value">Control, Embedded & ROS2</div>
            </div>
            <div className="fact">
              <div className="label">Leadership</div>
              <div className="value">Multi-University Event Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section className="page-section" id="projects">
        <div className="section-label" aria-hidden="true">PROJECTS</div>
        <div className="section-title">Projects</div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} className="project-card" to={`/project-${project.id}`}>
              <div className="proj-num">{project.num}</div>
              <h3>{project.title} {project.titleEm}</h3>
              <p>{project.description}</p>
              <div className="proj-tags">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section className="page-section" id="skills" ref={skillsRef}>
        <div className="section-label" aria-hidden="true">SKILLS</div>
        <div className="section-title">Skills</div>
        <div className="skills-container">
          <div className="skill-group">
            <h3>Robotics & Control Systems</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.90">
                <span className="skill-name">ROS2 (Gazebo, RViz)</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">90%</span>
              </div>
              <div className="skill-item" data-pct="0.88">
                <span className="skill-name">MATLAB/Simulink</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">88%</span>
              </div>
              <div className="skill-item" data-pct="0.85">
                <span className="skill-name">C++ for Control</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">85%</span>
              </div>
              <div className="skill-item" data-pct="0.82">
                <span className="skill-name">PID Tuning & MPCC</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">82%</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Embedded & Electronics</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.85">
                <span className="skill-name">ESP32 & PCB Design</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">85%</span>
              </div>
              <div className="skill-item" data-pct="0.80">
                <span className="skill-name">OrCAD & Thermal Layout</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">80%</span>
              </div>
              <div className="skill-item" data-pct="0.78">
                <span className="skill-name">Signal Filtering</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">78%</span>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3>Modelling & Software</h3>
            <div className="skill-bars">
              <div className="skill-item" data-pct="0.85">
                <span className="skill-name">Python & ML</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">85%</span>
              </div>
              <div className="skill-item" data-pct="0.80">
                <span className="skill-name">Linux (Arch) & Git</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">80%</span>
              </div>
              <div className="skill-item" data-pct="0.75">
                <span className="skill-name">Ansys HFSS & Numerical</span>
                <div className="skill-bar-track"><div className="skill-bar-fill"></div></div>
                <span className="skill-pct">75%</span>
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
          <p className="contact-intro">If you're working on robotics, control systems, or autonomous platforms and value thoughtful engineering execution, I’d be glad to connect. Whether it’s collaboration, research, internships, or building ambitious systems together, feel free to reach out and start a conversation.</p>
          <div className="contact-links">
            <a href="mailto:mail@shinn.uk" className="contact-link">
              <span className="icon">✉️</span>
              <div className="details">
                <div className="ctype">Email</div>
                <div className="cval">mail@shinn.uk</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/choosg" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💼</span>
              <div className="details">
                <div className="ctype">LinkedIn</div>
                <div className="cval">linkedin.com/in/choosg</div>
              </div>
            </a>
            <a href="https://github.com/choo12204" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">🐙</span>
              <div className="details">
                <div className="ctype">GitHub</div>
                <div className="cval">github.com/choo12204</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>© 2026 Shinn Gee — Built with passion</footer>
    </div>
  );
}
