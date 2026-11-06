import React from 'react';
import { EXPERIENCE } from '../data/content';
import { SectionHead, Serif, FadeUp } from './Shared';

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 border-t border-line">
      <SectionHead
        label="Experience &amp; Education"
        title={
          <>
            Professional <Serif>journey &amp; timeline</Serif>.
          </>
        }
        sub="Experience spanning technical support operations, end-to-end product design, and computer science foundations."
      />

      <div className="max-w-4xl">
        {EXPERIENCE.map((e, i) => (
          <FadeUp key={e.title} delay={i * 0.08}>
            <div
              data-testid={`exp-${i}`}
              className="group grid sm:grid-cols-[210px_1fr] gap-3 sm:gap-8 py-8 border-b border-line first:border-t items-start"
            >
              {/* Left Column: Uniform width & typography */}
              <div className="font-mono text-xs sm:text-[13px] font-medium text-accenttext tracking-tight tabular-nums pt-1 shrink-0">
                {e.period}
              </div>

              {/* Right Column: Title, Org, and Narrative */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                  {e.title}
                </h3>
                <div className="text-xs font-mono text-faint uppercase tracking-wider mt-1.5 mb-3.5">
                  {e.org}
                </div>
                <p className="text-sm leading-relaxed text-mut font-light max-w-2xl">
                  {e.body}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
