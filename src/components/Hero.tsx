import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EMAIL, IMAGES } from '../data/content';
import { Serif } from './Shared';
import { SocialIcons } from './Navbar';
import { ArrowDown, Mail } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Line: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => (
  <span className="block overflow-hidden">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

const HeroActions: React.FC<{
  onOpenResume?: () => void;
  onCopyEmail: () => void;
  className?: string;
}> = ({ onOpenResume, onCopyEmail, className = "" }) => (
  <div className={className}>
    {/* Action CTAs: Explore Work and Copy Email */}
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5">
      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
        }}
        data-testid="hero-explore-work"
        className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-lime text-black font-semibold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(240,179,66,0.2)]"
      >
        <span>Explore Selected Work</span>
        <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
      </a>

      <button
        type="button"
        data-testid="hero-copy-email"
        onClick={onCopyEmail}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-line bg-surface/60 backdrop-blur-md text-xs sm:text-sm font-medium text-mut hover:text-ink hover:border-white/20 hover:bg-surface active:scale-95 transition-all duration-200"
      >
        <Mail size={14} className="text-accenttext" />
        <span>{EMAIL}</span>
      </button>
    </div>

    {/* Location badge & social links */}
    <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-1">
      <div className="inline-flex items-center gap-2 text-xs font-mono text-mut">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
        <span>Based in Maharashtra, India</span>
      </div>
      <span className="text-line hidden sm:inline">|</span>
      <SocialIcons />
    </div>
  </div>
);

export default function Hero({
  onCopyEmail,
  onOpenResume
}: {
  onCopyEmail: () => void;
  onOpenResume?: () => void;
}): React.JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const txtY = useTransform(scrollYProgress, [0, 1], [0, -12]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex flex-col justify-start pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* 12-column grid starting at md: items-start keeps both columns aligned right at the top */}
      <div className="w-full grid md:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left Column: Headline, Bio, and Desktop CTAs (Order-1) */}
        <motion.div style={{ y: txtY }} className="md:col-span-7 order-1 flex flex-col justify-start">
          <h1
            data-testid="hero-headline"
            className="text-3xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] leading-[1.04] tracking-tighter font-semibold mb-4 sm:mb-5 text-ink"
          >
            <Line delay={0.1}>Turning complex</Line>
            <Line delay={0.22}>problems into</Line>
            <Line delay={0.34}>
              <Serif>calm, intuitive</Serif>&nbsp;digital
            </Line>
            <Line delay={0.46}>products.</Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-mut max-w-xl mb-4 sm:mb-6 font-light"
          >
            I’m Vinay Sawant — Product Designer bridging user research, systems thinking, and engineering reality. Crafting intuitive consumer mobile apps, enterprise SaaS, and scalable design systems that users love and developers enjoy building.
          </motion.p>

          {/* Action CTAs & Location for Tablet and Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="hidden md:block"
          >
            <HeroActions onOpenResume={onOpenResume} onCopyEmail={onCopyEmail} />
          </motion.div>
        </motion.div>

        {/* Right Column: Cutout portrait sitting right beside text from the top, visible on landing across all devices */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="md:col-span-5 order-2 flex flex-col items-center md:items-end justify-start relative w-full pt-1 md:pt-0"
        >
          {/* Subtle warm ambient lighting glow behind the cutout */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-lime/20 via-amber-500/10 to-transparent blur-[70px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full bg-surface/50 blur-[50px] pointer-events-none" />

          {/* Cutout Portrait Container - pure image only, completely transparent, responsive across all devices */}
          <motion.div
            style={{ y: imgY }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center md:justify-end"
            // subtle floating and rotation animation
            animate={{ rotate: [0, 3, -3, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          >
            <div
              data-testid="hero-portrait"
              className="relative w-full flex items-center justify-center md:justify-end"
            >
              <img
                src={IMAGES.portrait}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = IMAGES.portraitFallback;
                }}
                alt="Vinay Sawant — Product Designer"
                className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[520px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 0%, black 82%, transparent 99%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 82%, transparent 99%)"
                }}
              />
            </div>
          </motion.div>

          {/* Action CTAs & Location for Mobile Screens (rendered right below portrait so both are visible immediately) */}
          <div className="block md:hidden w-full mt-5">
            <HeroActions onOpenResume={onOpenResume} onCopyEmail={onCopyEmail} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
