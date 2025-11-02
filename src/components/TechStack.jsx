import React from 'react';
import { Cpu, Database, Brain, Code } from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-5 w-5 text-teal-400" />, 
    title: 'MERN Stack',
    items: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite', 'Tailwind']
  },
  {
    icon: <Brain className="h-5 w-5 text-cyan-400" />, 
    title: 'AI/ML',
    items: ['Python', 'PyTorch', 'scikit-learn', 'Transformers', 'LangChain']
  },
  {
    icon: <Database className="h-5 w-5 text-indigo-400" />, 
    title: 'Data & Cloud',
    items: ['PostgreSQL', 'MongoDB Atlas', 'Docker', 'AWS', 'Vercel']
  },
  {
    icon: <Cpu className="h-5 w-5 text-violet-400" />, 
    title: 'Systems',
    items: ['FastAPI', 'REST', 'WebSockets', 'CI/CD', 'Testing']
  }
];

const TechStack = () => {
  return (
    <section id="stack" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tech Stack</h2>
        <p className="mt-2 max-w-2xl text-slate-300">A balanced toolkit across full‑stack and machine learning to ship reliable, intelligent products.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:bg-white/10">
              <div className="flex items-center gap-2">
                {s.icon}
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
