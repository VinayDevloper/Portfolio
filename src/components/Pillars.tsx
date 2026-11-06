import React from 'react';
import { PILLARS, COMPETENCIES } from '../data/content';
import { SectionHead, Serif, FadeUp } from './Shared';
import { Sparkles } from 'lucide-react';

export function Pillars(): React.JSX.Element {
  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
      <SectionHead
        label="About &amp; Approach"
        title={
          <>
            Design grounded in <Serif>systems &amp; research</Serif>.
          </>
        }
        sub="Building product foundations that withstand contact with real users, edge cases, and cross-functional teams."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {PILLARS.map((p, i) => (
          <FadeUp key={p.num} delay={i * 0.1} className="h-full">
            <div className="interactive-card h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-surface/50">
              <span className="block text-xs font-semibold text-accenttext mb-4">
                0{i + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-tight mb-2.5 text-ink">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-mut font-light">{p.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Empathy(): React.JSX.Element {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 border-t border-line">
      <SectionHead
        label="Core Competencies"
        title={
          <>
            Disciplined craft across <Serif>every product stage</Serif>.
          </>
        }
        sub="From discovery synthesis and tokenized architectures to micro-interactions and developer-ready design specifications."
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {COMPETENCIES.map((c, i) => (
          <FadeUp key={c.num} delay={i * 0.08} className="h-full">
            <div className="interactive-card h-full rounded-3xl bg-surface/50 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-semibold text-accenttext uppercase tracking-wider">{c.num}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                    {c.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-mut pl-0 sm:pl-7 font-light mb-6">
                  {c.body}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 flex flex-wrap gap-2 pl-0 sm:pl-7">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-line bg-bg/50 text-[11px] font-medium text-mut"
                  >
                    <Sparkles size={11} className="text-accenttext" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
