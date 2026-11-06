import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectItem, PROJECTS } from '../data/content';
import { Serif, FadeUp } from './Shared';
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, Layers, Smartphone, Calendar, User } from 'lucide-react';

interface CaseStudyPageProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

export default function CaseStudyPage({
  project,
  onBack,
  onSelectProject
}: CaseStudyPageProps): React.JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="min-h-screen bg-bg text-ink pb-32 pt-20 sm:pt-24 selection:bg-lime selection:text-black">
      {/* Top Floating Apple/Google Style Glass Bar */}
      <div className="sticky top-4 z-40 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border border-line bg-surface/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <button
            onClick={onBack}
            data-testid="casestudy-back-btn"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-mut hover:text-ink hover:bg-white/5 transition-all duration-200"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>All Projects</span>
          </button>

          <span className="text-xs font-medium text-faint hidden md:inline-block">
            {project.title.split('—')[0].trim()} · Case Study
          </span>

          <div className="flex items-center gap-2">
            {project.figma ? (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lime text-black text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shadow-xs"
              >
                <span>Open in Figma</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-mut hover:text-ink transition-colors"
              >
                <span>Back</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 pt-10 sm:pt-16 space-y-16 sm:space-y-24">
        {/* Editorial Headline Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-lime/30 bg-lime/10 text-xs font-medium uppercase tracking-wider text-accenttext">
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-ink">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-mut leading-relaxed max-w-3xl font-light">
            {project.summary}
          </p>

          {/* Refined Metadata Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-2xl border border-line bg-surface/40 hover:border-lime/60 hover:shadow-[0_0_20px_rgba(240,179,66,0.12)] transition-all duration-300 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-faint uppercase">
                <User size={12} className="text-accenttext" />
                <span>Role</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink line-clamp-1">
                {project.role}
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-line bg-surface/40 hover:border-lime/60 hover:shadow-[0_0_20px_rgba(240,179,66,0.12)] transition-all duration-300 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-faint uppercase">
                <Smartphone size={12} className="text-accenttext" />
                <span>Platform</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink line-clamp-1">
                {project.platform.split('·')[0].trim()}
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-line bg-surface/40 hover:border-lime/60 hover:shadow-[0_0_20px_rgba(240,179,66,0.12)] transition-all duration-300 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-faint uppercase">
                <Calendar size={12} className="text-accenttext" />
                <span>Timeline</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink line-clamp-1">
                {project.timeline}
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-line bg-surface/40 hover:border-lime/60 hover:shadow-[0_0_20px_rgba(240,179,66,0.12)] transition-all duration-300 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-faint uppercase">
                <Layers size={12} className="text-accenttext" />
                <span>Deliverables</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink line-clamp-1">
                Design System &amp; UI
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cinematic Showcase Hero Image */}
        <FadeUp y={32}>
          <div className="relative rounded-3xl border border-line/80 overflow-hidden bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[640px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </FadeUp>

        {/* Measured Impact & Quantified Metrics */}
        <FadeUp y={32}>
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accenttext">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span>Quantified Impact &amp; Metrics</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.k}
                  className="p-6 rounded-3xl border border-line bg-surface/50 hover:bg-surface/80 hover:border-lime/70 hover:shadow-[0_0_25px_rgba(240,179,66,0.15)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-accenttext mb-2">
                    {m.k}
                  </div>
                  <div className="text-xs sm:text-sm text-mut leading-relaxed">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Structured Storytelling Narrative */}
        <FadeUp y={32}>
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accenttext">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span>Design Rationale &amp; Problem Solving</span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {project.deep.slice(0, 2).map((d) => (
                <div
                  key={d.label}
                  className="p-7 rounded-3xl border border-line bg-surface/40 hover:border-lime/60 hover:shadow-[0_0_25px_rgba(240,179,66,0.12)] transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <CheckCircle2 size={16} className="text-lime" />
                    <span>{d.label}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-mut leading-relaxed font-light">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>

            {project.deep[2] && (
              <div className="p-7 sm:p-8 rounded-3xl border border-line hover:border-lime/60 hover:shadow-[0_0_25px_rgba(240,179,66,0.12)] transition-all duration-300 bg-gradient-to-r from-surface/60 via-surface/40 to-surface/20 space-y-3">
                <div className="text-xs font-medium uppercase tracking-wider text-accenttext">
                  {project.deep[2].label}
                </div>
                <blockquote className="text-base sm:text-lg text-ink font-serif italic leading-relaxed">
                  {project.deep[2].detail}
                </blockquote>
              </div>
            )}
          </div>
        </FadeUp>

        {/* Up Next: Google / Apple Style Project Switcher */}
        <FadeUp y={32}>
          <div className="pt-10 border-t border-line space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-faint">
                Next Case Study
              </span>
              <button
                onClick={onBack}
                className="text-xs font-medium text-accenttext hover:underline cursor-pointer"
              >
                Back to All Projects ↑
              </button>
            </div>

            <div
              onClick={() => onSelectProject(nextProject)}
              className="group rounded-3xl border border-line bg-surface/40 p-6 sm:p-8 hover:bg-surface/80 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-medium text-accenttext">
                  {nextProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink group-hover:text-accenttext transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-mut max-w-lg line-clamp-1 font-light">
                  {nextProject.summary}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-line text-xs font-semibold text-ink group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300 shrink-0">
                <span>View Project</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
