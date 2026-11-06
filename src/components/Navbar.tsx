import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Github,
  Youtube,
  Figma,
  Home,
  Briefcase,
  User,
  HelpCircle,
  Mail,
  FileText,
  Sun,
  Moon,
  Menu,
  Sparkles,
  X as CloseIcon
} from 'lucide-react';
import { NAV_LINKS, SOCIALS, SocialLink } from '../data/content';
import { Mark } from './Shared';

export const XIcon: React.FC<{ size?: number; className?: string; strokeWidth?: number }> = ({
  size = 14,
  className = ""
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  x: XIcon,
  twitter: XIcon,
  figma: Figma,
  home: Home,
  work: Briefcase,
  about: User,
  testimonials: Sparkles,
  faq: HelpCircle,
  contact: Mail
};

const MOBILE_LINKS = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "Work", href: "#work", icon: "work" },
  { label: "About", href: "#about", icon: "about" },
  { label: "Contact", href: "#contact", icon: "contact" }
];

export const ThemeToggle: React.FC<{
  theme: 'dark' | 'light';
  onToggle: () => void;
  compact?: boolean;
}> = ({ theme, onToggle, compact = false }) => (
  <button
    data-testid="theme-toggle"
    onClick={onToggle}
    aria-label="Toggle color theme"
    className={`relative flex items-center rounded-full border border-line bg-surface/60 backdrop-blur-md transition-colors hover:border-faint ${compact ? "w-9 h-9 justify-center" : "w-[52px] h-[26px] px-[3px]"
      }`}
  >
    {compact ? (
      theme === 'dark' ? (
        <Sun size={16} className="text-lime" />
      ) : (
        <Moon size={16} className="text-ink" />
      )
    ) : (
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className={`flex items-center justify-center rounded-full w-[20px] h-[20px] ${theme === 'dark' ? "bg-lime ml-auto" : "bg-ink mr-auto"
          }`}
      >
        {theme === 'dark' ? (
          <Sun size={11} className="text-black" />
        ) : (
          <Moon size={11} className="text-white" />
        )}
      </motion.span>
    )}
  </button>
);

export const SocialIcons: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
    {SOCIALS.map((s: SocialLink) => {
      const Icon = ICONS[s.icon] || Linkedin;
      return (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`social-${s.icon}`}
          aria-label={s.name}
          title={s.name}
          className="group relative flex items-center justify-center w-9 h-9 rounded-full border border-line bg-surface/80 text-mut hover:text-ink hover:border-white/20 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md shadow-xs"
        >
          <Icon size={15} strokeWidth={1.75} className="transition-transform group-hover:scale-110" />
        </a>
      );
    })}
  </div>
);

export default function Navbar({
  theme,
  onToggle,
  onOpenResume,
  onNavigateView
}: {
  theme: 'dark' | 'light';
  onToggle: () => void;
  onOpenResume?: () => void;
  onNavigateView?: (view: 'home' | 'work') => void;
}): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);

    if (href === '#work' && onNavigateView) {
      onNavigateView('work');
      return;
    }

    if (onNavigateView) {
      onNavigateView('home');
    }

    if (window.location.hash.startsWith('#case-study-')) {
      window.location.hash = '';
      window.history.pushState(null, '', window.location.pathname);
      window.dispatchEvent(new Event('hashchange'));
    }

    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar — Clean without logo mark or name */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[80] hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-glass shadow-[0_8px_40px_rgba(0,0,0,0.35)] border-white/15" : "bg-glass"
          }`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            data-testid={`nav-${l.href.slice(1)}`}
            className="px-3.5 py-1.5 text-[13px] font-medium text-mut hover:text-ink rounded-full hover:bg-line transition-colors duration-200 whitespace-nowrap"
          >
            {l.label}
          </a>
        ))}

        {onOpenResume && (
          <button
            type="button"
            onClick={onOpenResume}
            data-testid="nav-resume-btn"
            className="px-3 py-1.5 text-[13px] font-medium text-mut hover:text-accenttext rounded-full hover:bg-line transition-colors duration-200 whitespace-nowrap flex items-center gap-1.5"
          >
            <FileText size={13} className="text-accenttext" />
            <span>Resume</span>
          </button>
        )}

        <span className="w-px h-4 bg-line mx-1" />

        <a
          href="#contact"
          onClick={(e) => go(e, "#contact")}
          data-testid="nav-contact"
          className="px-4 py-1.5 text-[13px] font-semibold rounded-full bg-lime text-black hover:brightness-110 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-xs"
        >
          Get in Touch
        </a>

        <span className="w-px h-4 bg-line mx-1" />

        <ThemeToggle theme={theme} onToggle={onToggle} />
      </motion.header>

      {/* Mobile Top Header */}
      <div className="fixed top-0 left-0 right-0 z-[80] md:hidden flex items-center justify-between px-5 py-3.5 bg-bg/85 backdrop-blur-xl border-b border-line">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center"
          aria-label="Vinay Sawant"
        >
          <span className="text-base font-semibold tracking-tight text-ink">Vinay Sawant</span>
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggle} compact />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-full border border-line text-mut hover:text-ink transition-colors"
          >
            {open ? <CloseIcon size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[57px] z-[75] md:hidden bg-bg/95 backdrop-blur-2xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-2 pt-4">
              {MOBILE_LINKS.map((l) => {
                const Icon = ICONS[l.icon] || Home;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-lg font-medium text-mut hover:text-ink hover:bg-surface transition-colors"
                  >
                    <Icon size={18} />
                    <span>{l.label}</span>
                  </a>
                );
              })}

              {onOpenResume && (
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-lg font-medium text-mut hover:text-ink hover:bg-surface transition-colors text-left"
                >
                  <FileText size={18} />
                  <span>View Full Resume</span>
                </button>
              )}
            </div>

            <div className="pt-6 border-t border-line space-y-4 pb-8">
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                className="w-full block text-center py-3.5 rounded-full bg-lime text-black font-semibold text-sm"
              >
                Get in Touch
              </a>
              <div className="flex justify-center">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
