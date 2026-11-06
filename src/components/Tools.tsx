import React from 'react';
import { TOOLS } from '../data/content';
import { SectionHead, Serif, FadeUp } from './Shared';

export default function Tools(): React.JSX.Element {
  return (
    <section id="tools" className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 border-t border-line">
      <SectionHead
        label="Tools & Stack"
        title={
          <>
            A focused stack, <Serif>mastered</Serif>.
          </>
        }
        sub="Tools that actively shape the design and engineering workflows I deliver."
      />

      <div className="max-w-4xl">
        {TOOLS.map((t, i) => (
          <FadeUp key={t.category} delay={i * 0.05}>
            <div className="group grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-7 border-b border-line items-baseline first:border-t">
              <div className="text-xs font-semibold uppercase tracking-wider text-faint group-hover:text-accenttext transition-colors duration-300">
                {t.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full border border-line bg-surface/60 text-xs sm:text-sm text-ink hover:border-faint transition-colors"
                  >
                    {item}
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
