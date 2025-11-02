import React from 'react';
import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">AIML + MERN</span>
          </a>
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a className="hover:text-white" href="#stack">Stack</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#resume">Resume</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
