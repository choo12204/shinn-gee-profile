import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, <br /> 
            or opportunities to be part of your vision.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@shinngee.com" className="contact-link">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Shinn Gee. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
