import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, ProjectItem } from '../data/content';
import { Serif, FadeUp } from './Shared';
import { ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';

interface WorkPageProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onBackToHome: () => void;
}

export default function WorkPage({
  onOpenCaseStudy,
  onBackToHome
}: WorkPageProps): React.JSX.Element {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'system', label: 'Design Systems' },
    { id: 'enterprise', label: 'Enterprise SaaS' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'mobile') return p.category.toLowerCase().includes('mobile');
    if (filter === 'system') return p.category.toLowerCase().includes('system') || p.category.toLowerCase().includes('community');
    if (filter === 'enterprise') return p.category.toLowerCase().includes('enterprise') || p.category.toLowerCase().includes('saas');
    return true;
  });

  return (
    <div className="min-h-screen bg-bg text-ink pb-32 pt-24 sm:pt-28 selection:bg-lime selection:text-black">
      {/* Top Glass Navigation Bar */}
      <div className="sticky top-4 z-40 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border border-line bg-surface/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <button
            onClick={onBackToHome}
            data-testid="workpage-back-btn"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-mut hover:text-ink hover:bg-white/5 transition-all duration-200"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs font-medium text-faint hidden sm:inline-block">
            Selected Case Studies ({PROJECTS.length})
          </span>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
              setTimeout(() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lime text-black text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shadow-xs"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-10 sm:pt-14 space-y-12">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-lime/30 bg-lime/10 text-accenttext text-xs font-medium uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Portfolio Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ink leading-tight">
            Work &amp; <Serif>Case Studies</Serif>.
          </h1>

          <p className="text-base sm:text-lg text-mut leading-relaxed font-light">
            End-to-end product design across consumer mobile applications, systems architecture, and enterprise field SaaS — engineered with empathy and production feasibility.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  filter === c.id
                    ? 'bg-ink text-bg font-semibold shadow-xs'
                    : 'bg-surface/60 border border-line text-mut hover:text-ink hover:border-white/20'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid of Projects */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-testid={`workpage-project-${p.id}`}
                onClick={() => onOpenCaseStudy(p)}
                className="group project-card relative rounded-3xl bg-surface/60 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Media Bezel */}
                <div className="relative overflow-hidden aspect-[16/10] max-h-[260px] bg-black/60 m-3 sm:m-3.5 rounded-2xl border border-white/5 group-hover:border-lime/30 transition-colors duration-300">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90">
                      {p.category.split('&')[0].trim()}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-lime group-hover:text-black group-hover:border-lime group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-accenttext">
                      {p.timeline} · {p.platform.split('·')[0].trim()}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-accenttext transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-mut leading-relaxed line-clamp-2">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                    <span className="text-xs text-faint">
                      {p.platform}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-line bg-surface/70 text-xs font-semibold text-ink group-hover:border-lime/40 group-hover:text-accenttext transition-all duration-300">
                      <span>Explore Case Study</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
