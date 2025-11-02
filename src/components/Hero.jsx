import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, MapPin, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 md:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-teal-300" />
          Building intelligent web experiences
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          MERN + AI/ML Engineer
          <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Crafting scalable apps with intelligent features</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          I design and build full‑stack products powered by modern machine learning — fast APIs, delightful UIs, and data‑driven experiences.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-teal-400 transition hover:bg-teal-400 hover:ring-teal-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /> Open to remote</div>
          <div className="h-1 w-1 rounded-full bg-slate-500" />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 transition hover:bg-white/15"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 transition hover:bg-white/15"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white/10 p-2 ring-1 ring-white/15 transition hover:bg-white/15"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
