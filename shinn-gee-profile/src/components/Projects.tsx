import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A cutting-edge SaaS platform built with React and Node.js.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      id: 1
    },
    {
      title: 'Project Beta',
      description: 'An AI-driven data visualization tool for large-scale datasets.',
      tags: ['Python', 'D3.js', 'GraphQL', 'AWS'],
      id: 2
    },
    {
      title: 'Project Gamma',
      description: 'A mobile-first e-commerce application with real-time inventory.',
      tags: ['Next.js', 'Stripe', 'Tailwind', 'Redis'],
      id: 3
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
