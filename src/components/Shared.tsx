import React from 'react';
import { motion } from 'framer-motion';

export const FadeUp: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}> = ({ children, delay = 0, className = "", y = 36 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHead: React.FC<{
  label: string;
  title: React.ReactNode;
  sub?: string;
  index?: string;
}> = ({ label, title, sub }) => (
  <div className="mb-10 sm:mb-14">
    <FadeUp>
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-surface/80 text-xs font-semibold uppercase tracking-wider text-accenttext mb-5 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        <span>{label}</span>
      </div>
    </FadeUp>
    <FadeUp delay={0.08}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl">
        {title}
      </h2>
    </FadeUp>
    {sub && (
      <FadeUp delay={0.16}>
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-mut max-w-2xl leading-relaxed">{sub}</p>
      </FadeUp>
    )}
  </div>
);

export const Serif: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <em className="font-serif italic font-normal">{children}</em>
);

export const Check: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 mt-1"
  >
    <path
      d="M2.5 8.5L6 12L13.5 4"
      stroke="#CCFF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Mark: React.FC<{ size?: number }> = ({ size = 30 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <rect width="64" height="64" rx="14" fill="var(--ink)" />
    <path
      d="M18 17 L32 47 L46 17"
      stroke="var(--bg)"
      strokeWidth="7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="43" r="4" fill="#CCFF00" />
  </svg>
);
