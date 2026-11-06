import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { SectionHead, Serif, FadeUp } from './Shared';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials(): React.JSX.Element {
  return (
    <section id="testimonials" className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 border-t border-line relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-lime/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <SectionHead
        label="Recommendations"
        title={
          <>
            Colleague &amp; collaborator <Serif>feedback</Serif>.
          </>
        }
        sub="First-hand perspectives from product managers, engineering leads, and design peers who have built products alongside me."
      />

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={t.id} delay={i * 0.08} className="h-full">
            <article
              data-testid={`testimonial-${t.id}`}
              className="interactive-card relative h-full rounded-2xl sm:rounded-3xl bg-surface/50 p-5 sm:p-6 lg:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header: Subtle Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-7 h-7 rounded-full border border-line bg-surface flex items-center justify-center text-accenttext">
                    <Quote size={13} className="text-accenttext" />
                  </div>
                </div>

                {/* Quote narrative */}
                <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-ink/90 font-light mb-5 italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-5 border-t border-line/60 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-semibold tracking-tight text-ink">
                      {t.name}
                    </h4>
                    <span title="Verified Colleague Collaboration">
                      <CheckCircle2 size={14} className="text-accenttext" />
                    </span>
                  </div>
                  <p className="text-xs text-mut font-light">
                    {t.role} · <span className="text-ink/80">{t.company}</span>
                  </p>
                  <p className="text-[11px] font-mono text-faint mt-0.5">
                    {t.relationship}
                  </p>
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
