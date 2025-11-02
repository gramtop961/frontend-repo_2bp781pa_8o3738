import React from 'react';
import { FileDown, FileText, Sparkles } from 'lucide-react';

const Resume = () => {
  const resumeUrl = '/resume.pdf'; // Place your resume at public/resume.pdf

  return (
    <section id="resume" className="relative overflow-hidden bg-slate-950 py-16 text-white">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" />
              Ready to collaborate
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Resume</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              A concise overview of my experience across MERN, data platforms, and applied machine learning. Download a copy or preview it below.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-teal-400 transition hover:bg-teal-400"
              >
                <FileText className="h-4 w-4" /> View PDF
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <FileDown className="h-4 w-4" /> Download
              </a>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3 shadow-lg">
          {/* Animated border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />

          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-900">
            <object data={resumeUrl} type="application/pdf" className="h-full w-full">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                <p className="text-slate-300">
                  PDF preview is not available in this browser. You can open it in a new tab or download it.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-teal-400 transition hover:bg-teal-400"
                  >
                    <FileText className="h-4 w-4" /> Open in new tab
                  </a>
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    <FileDown className="h-4 w-4" /> Download PDF
                  </a>
                </div>
              </div>
            </object>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Tip: place your file at public/resume.pdf to enable inline preview.</span>
            <span>PDF • Updated recently</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
