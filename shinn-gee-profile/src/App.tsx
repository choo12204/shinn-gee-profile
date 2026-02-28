import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <header className="header" style={{
        height: 'var(--header-height)', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 100, 
        background: 'rgba(5, 5, 5, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
          <div className="logo" style={{fontSize: '1.5rem', fontWeight: 700}}>SG.</div>
          <nav className="nav" style={{display: 'flex', gap: '2rem'}}>
            <a href="#about" style={{fontSize: '0.9rem', fontWeight: 500, color: '#a3a3a3'}}>About</a>
            <a href="#projects" style={{fontSize: '0.9rem', fontWeight: 500, color: '#a3a3a3'}}>Projects</a>
            <a href="#contact" style={{fontSize: '0.9rem', fontWeight: 500, color: '#a3a3a3'}}>Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
