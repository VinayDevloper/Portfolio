import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, ProjectItem } from '../data/content';
import { SectionHead, Serif, FadeUp } from './Shared';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface WorkProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenWorkPage?: () => void;
}

export default function Work({
  onOpenCaseStudy,
  onOpenWorkPage
}: WorkProps): React.JSX.Element {
  return (
    <section id="work" className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHead
          label="Selected Work"
          title={
            <>
              Featured <Serif>Case Studies</Serif>.
            </>
          }
          sub="Selected digital products across consumer mobile applications, healthcare, and enterprise field SaaS."
        />

        {onOpenWorkPage && (
          <FadeUp delay={0.1}>
            <button
              onClick={onOpenWorkPage}
              data-testid="home-view-all-work"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line bg-surface text-xs font-semibold text-ink hover:border-lime hover:text-accenttext transition-all duration-300 shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
          </FadeUp>
        )}
      </div>

      {/* Google / Apple grade 2-column bento card grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((p, i) => (
          <FadeUp key={p.id} delay={i * 0.08} y={24} className="h-full">
            <article
              data-testid={`project-${p.id}`}
              onClick={() => onOpenCaseStudy(p)}
              className="group project-card relative h-full rounded-3xl bg-surface/60 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Media Preview Bezel */}
              <div className="relative overflow-hidden aspect-[16/10] max-h-[250px] bg-black/60 m-3 sm:m-3.5 rounded-2xl border border-white/5 group-hover:border-lime/30 transition-colors duration-300">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90">
                    {p.category.split('&')[0].trim()}
                  </span>
                </div>

                {/* Apple-style floating corner action glyph */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-lime group-hover:text-black group-hover:border-lime group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Minimal Card Narrative & Modern Typography */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-accenttext">
                    {p.timeline} · {p.platform.split('·')[0].trim()}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-accenttext transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-mut leading-relaxed line-clamp-2 font-light">
                    {p.summary}
                  </p>
                </div>

                {/* Modern Sans Bottom Action Bar without Role Clutter */}
                <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                  <span className="text-xs text-faint font-medium">
                    {p.platform.split('·')[0].trim()}
                  </span>

                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface/70 text-xs font-semibold text-ink group-hover:border-lime/40 group-hover:text-accenttext transition-all duration-300">
                    <span>Explore Case Study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
