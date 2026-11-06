import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EMAIL, PROJECTS } from '../data/content';
import { Printer, X, FileText } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-6 border-b border-black/10 last:border-b-0">
    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-black/40 mb-3">
      {title}
    </h3>
    {children}
  </div>
);

export default function ResumeModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}): React.JSX.Element {
  const print = () => window.print();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-testid="resume-modal"
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white text-[#131312] shadow-2xl p-6 sm:p-10"
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div className="flex items-center gap-2.5">
                <FileText size={16} className="text-black/60" />
                <span className="font-mono text-xs uppercase tracking-wider text-black/60 font-medium">
                  Resume · Vinay Sawant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={print}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 text-xs font-mono hover:bg-black/5 transition-colors"
                >
                  <Printer size={13} />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 rounded-full text-black/50 hover:text-black hover:bg-black/5 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div id="resume-print" className="pt-6">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
                  Vinay Sawant
                </h2>
                <p className="text-sm mt-1 text-black/70 font-medium">
                  Product Designer &amp; Problem Solver · B.Tech in Information Technology
                </p>
                <div className="text-xs mt-2 font-mono text-black/50 flex flex-wrap gap-x-3 gap-y-1">
                  <span>{EMAIL}</span>
                  <span>·</span>
                  <span>Maharashtra, India</span>
                  <span>·</span>
                  <span>linkedin.com/in/sawantvinay</span>
                  <span>·</span>
                  <span>github.com/sawantvinay</span>
                </div>
              </div>

              {/* Summary */}
              <Section title="Profile & Systems Philosophy">
                <p className="text-sm leading-relaxed text-black/80">
                  Product Designer with an engineering spine in Information Technology. I bridge quantitative research, systems architecture, and frontend reality — translating raw behavioral insights into high-retention consumer mobile apps and enterprise SaaS workflows. Expert in Auto-Layout 5.0, tokenized design systems, and seamless developer handoff with zero rework.
                </p>
              </Section>

              {/* Core Competencies */}
              <Section title="Core Competencies">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-semibold block mb-0.5">UX Research &amp; Synthesis</span>
                    <span className="text-black/65">Quantitative surveys (78+ respondents), usability testing, sentiment clustering.</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-0.5">Design Systems &amp; Tokens</span>
                    <span className="text-black/65">Figma Auto-Layout 5.0, token variables matching React props &amp; Tailwind config.</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-0.5">Engineering Reality</span>
                    <span className="text-black/65">DOM box model, REST state machines, empty/error/loading edge cases.</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-0.5">Prototyping &amp; Interaction</span>
                    <span className="text-black/65">Interactive logic prototypes, responsive layouts, micro-animations, user testing.</span>
                  </div>
                </div>
              </Section>

              {/* Key Case Studies */}
              <Section title="Featured Product Case Studies">
                <div className="space-y-4">
                  {PROJECTS.map((p) => (
                    <div key={p.id} className="text-xs">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <span className="font-semibold text-sm text-black">{p.title}</span>
                        <span className="font-mono text-[11px] text-black/50">{p.timeline}</span>
                      </div>
                      <div className="font-mono text-[11px] text-black/50 mb-1">
                        {p.role} · {p.platform}
                      </div>
                      <p className="text-black/75 leading-relaxed">{p.summary}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Work Experience */}
              <Section title="Work Experience">
                <div className="space-y-3.5 text-xs">
                  <div>
                    <div className="flex items-baseline justify-between font-semibold text-sm text-black">
                      <span>Tech Support Executive — Softmate Systems LLP</span>
                      <span className="font-mono text-[11px] font-normal text-black/60">Oct 2026 — Present</span>
                    </div>
                    <p className="text-black/70 mt-1 leading-relaxed">
                      Delivering technical troubleshooting, system workflow coordination, and customer escalation management — aligning customer support insights with product reliability and performance.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between font-semibold text-sm text-black">
                      <span>Product Designer — Silicon Mount</span>
                      <span className="font-mono text-[11px] font-normal text-black/60">Dec 2025 — Present</span>
                    </div>
                    <p className="text-black/70 mt-1 leading-relaxed">
                      Leading end-to-end user experience and interface design across web and mobile products. Designing tokenized Figma component libraries, conducting usability research, and partnering closely with engineers for implementation.
                    </p>
                  </div>
                </div>
              </Section>

              {/* Education */}
              <Section title="Education">
                <div className="text-xs">
                  <div className="flex items-baseline justify-between font-semibold text-sm text-black">
                    <span>Bachelor of Technology (B.Tech) — Information Technology</span>
                    <span className="font-mono text-[11px] font-normal text-black/60">Nov 2022 — July 2026</span>
                  </div>
                  <div className="text-black/60 font-mono text-[11px] mt-0.5">
                    Maharashtra, India · Computer science foundation, systems architecture, and frontend design
                  </div>
                </div>
              </Section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
