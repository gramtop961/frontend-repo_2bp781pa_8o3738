import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Support Chatbot',
    desc: 'RAG-based assistant with vector search and analytics dashboard. Built with FastAPI, React, and Transformers.',
    tags: ['RAG', 'FastAPI', 'React', 'Pinecone'],
    link: '#'
  },
  {
    title: 'Vision Quality Inspector',
    desc: 'Real-time defect detection for manufacturing using CNNs and WebSockets for live inference.',
    tags: ['PyTorch', 'WebSockets', 'Docker'],
    link: '#'
  },
  {
    title: 'Realtime Collab Board',
    desc: 'Full-stack whiteboard with presence, comments, and AI summarization.',
    tags: ['MERN', 'Socket.io', 'OpenAI'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Highlighted Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">A selection of recent work across ML and full‑stack. Links available on request.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative flex flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-sm transition hover:from-white/20">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/15">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-teal-300">
                <a href={p.link} className="inline-flex items-center gap-1 hover:underline">
                  View details <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
