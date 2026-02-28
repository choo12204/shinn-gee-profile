import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 
    'GraphQL', 'Next.js', 'PostgreSQL', 
    'Docker', 'AWS', 'UI/UX Design'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I am a dedicated software engineer with a passion for building robust and scalable 
              applications. My journey in the tech world has been driven by a constant 
              desire to learn and innovate. 
            </p>
            <p>
              With several years of experience in full-stack development, I specialize in 
              bridging the gap between design and technology. I believe in writing 
              clean, maintainable code that solves real-world problems.
            </p>
          </div>
          <div className="about-skills">
            <h3 className="section-subtitle">Technical Expertise</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
