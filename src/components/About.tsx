import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'Python', 'C++', 'MATLAB/Simulink', 
    'OrCAD/PCB Design', 'LTspice', 'Autodesk Inventor', 
    'Linux (Arch)', 'Embedded Systems', 'Signal Processing'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I'm a passionate and curious MEng Robotics Engineering student at the University of Bath. 
              My journey blends creativity with technical problem-solving, from building quadruped robots 
              to designing high-performance PCBs and embedded systems.
            </p>
            <p>
              I thrive at the intersection of mechanical design, electronics, and software. 
              Through hands-on projects in CAD, control systems, power electronics, and machine learning, 
              I've developed a solid foundation in designing and simulating complex systems.
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
