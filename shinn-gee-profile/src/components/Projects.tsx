import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Self-Balancing Robot',
      description: 'Two-wheeled robot using Arduino, MPU6050, and PID control. Simulated in Simulink before hardware implementation.',
      tags: ['Arduino', 'C++', 'PID Control', 'Simulink'],
      id: 1
    },
    {
      title: 'Multilayer PCB Design',
      description: 'Designed a 4-layer microphone amplifier with dedicated GND/Power planes for noise reduction using OrCAD.',
      tags: ['OrCAD', 'DFM', 'Thermal Design', 'Signal Integrity'],
      id: 2
    },
    {
      title: '1D Heat Transfer Simulation',
      description: 'Transient thermal behavior analysis using explicit and implicit numerical methods in MATLAB.',
      tags: ['MATLAB', 'Thermodynamics', 'Numerical Methods'],
      id: 3
    },
    {
      title: 'ML-based PID Prediction',
      description: 'Multi-output regression model using scikit-learn to predict optimal control system parameters.',
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Control Theory'],
      id: 4
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.title.charAt(0)}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
