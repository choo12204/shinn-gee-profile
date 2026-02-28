import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <span className="hero-tagline">Software Engineer & Designer</span>
        <h1 className="hero-title">
          Crafting digital <br /> experiences with Shinn Gee
        </h1>
        <p className="hero-description">
          I build high-performance, accessible, and visually stunning web applications. 
          Focused on modern technologies and user-centric design.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn" style={{border: '1px solid var(--border-color)'}}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
