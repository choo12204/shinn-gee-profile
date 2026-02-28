import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('sg-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem('sg-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  if (!project) {
    return <div className="p-20 text-center text-2xl">Project not found.</div>;
  }

  const prevProject = projects.find(p => parseInt(p.id) === parseInt(project.id) - 1);
  const nextProject = projects.find(p => parseInt(p.id) === parseInt(project.id) + 1);

  return (
    <div className="min-h-screen transition-colors duration-400">
      <div className="topbar">
        <Link className="back-btn" to="/">
          <span className="arrow">←</span> Back
        </Link>
        <span className="sig">SG</span>
        <button className="theme-toggle" onClick={toggleTheme}>
          <div className="knob"><span>{isDark ? "☀️" : "🌙"}</span></div>
        </button>
      </div>

      <div className="page-wrap">
        <div className="proj-hero">
          <div className="img-placeholder">
            <span className="icon-large">🖼️</span>
            <div>HERO BANNER IMAGE</div>
            <div className="img-hint">Placeholder for {project.title}</div>
          </div>
        </div>

        <div className="proj-num-label">PROJECT {project.num}</div>
        <h1 className="proj-title">
          {project.title} <em>{project.titleEm}</em>
        </h1>

        <div className="proj-meta">
          {project.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        <div className="divider"></div>

        <div className="section-heading">Overview</div>
        <p className="body-text">{project.overview}</p>
        {project.overviewExtra && <p className="body-text">{project.overviewExtra}</p>}

        <div className="info-row">
          <div className="info-card">
            <div className="ic-label">Role</div>
            <div className="ic-value">{project.role}</div>
          </div>
          <div className="info-card">
            <div className="ic-label">Duration</div>
            <div className="ic-value">{project.duration}</div>
          </div>
          <div className="info-card">
            <div className="ic-label">Type</div>
            <div className="ic-value">{project.type}</div>
          </div>
          <div className="info-card">
            <div className="ic-label">Status</div>
            <div className="ic-value">{project.status}</div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-heading">Screenshots</div>
        <div className="image-grid cols-2">
          <div className="img-slot">
            <div className="slot-label"><span>📸</span>SCREENSHOT 1</div>
          </div>
          <div className="img-slot">
            <div className="slot-label"><span>📸</span>SCREENSHOT 2</div>
          </div>
        </div>
        <div className="img-wide">
          <div className="slot-label"><span>🖼️</span>FULL PAGE / WIDE SCREENSHOT</div>
        </div>

        <div className="divider"></div>

        <div className="section-heading">Key Features</div>
        <ul className="feature-list">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="divider"></div>

        <div className="section-heading">Design Details</div>
        <div className="image-grid cols-3">
          <div className="img-slot">
            <div className="slot-label"><span>📸</span>DETAIL 1</div>
          </div>
          <div className="img-slot">
            <div className="slot-label"><span>📸</span>DETAIL 2</div>
          </div>
          <div className="img-slot">
            <div className="slot-label"><span>📸</span>DETAIL 3</div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="section-heading">Process & Challenges</div>
        <p className="body-text">{project.process}</p>
        {project.processExtra && <p className="body-text">{project.processExtra}</p>}

        <div className="cta-row">
          {project.liveLink && (
            <a className="cta-btn primary" href={project.liveLink} target="_blank" rel="noreferrer">
              View Live Site
            </a>
          )}
          {project.githubLink && (
            <a className="cta-btn outline" href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          )}
        </div>

        <div className="proj-nav">
          {prevProject ? (
            <Link to={`/project-${prevProject.id}`}>← Previous Project</Link>
          ) : (
            <span style={{ color: "var(--fg-muted)", fontFamily: "'Bebas Neue'", letterSpacing: "0.14em", fontSize: "1rem" }}>
              — First Project
            </span>
          )}
          {nextProject ? (
            <Link to={`/project-${nextProject.id}`}>Next Project →</Link>
          ) : (
            <span style={{ color: "var(--fg-muted)", fontFamily: "'Bebas Neue'", letterSpacing: "0.14em", fontSize: "1rem" }}>
              Last Project —
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
