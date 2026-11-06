import React from 'react';
import { EMAIL, SOCIALS, SocialLink } from '../data/content';
import { Serif, FadeUp } from './Shared';
import { ICONS, XIcon } from './Navbar';
import { Copy, Check, Mail, ExternalLink, Sparkles } from 'lucide-react';

export default function Contact({
  onCopyEmail
}: {
  onCopyEmail: () => void;
}): React.JSX.Element {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Product%20Design%20Inquiry%20%E2%80%94%20Vinay%20Sawant&body=Hi%20Vinay%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20We%20would%20love%20to%20discuss%20a%20Product%20Design%20role%20%2F%20collaboration%20with%20you.%0A%0AProject%20%2F%20Role%20Details%3A%0A-%20Role%20Type%3A%20%5BFull-time%20%2F%20Contract%5D%0A-%20Timeline%3A%20%0A-%20Key%20Objectives%3A%20%0A%0ALooking%20forward%20to%20connecting%21%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D`;

  return (
    <footer
      id="contact"
      className="relative px-6 sm:px-12 lg:px-24 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 border-t border-line overflow-hidden bg-bg"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -bottom-36 -right-36 w-[560px] h-[560px] rounded-full bg-lime/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute top-10 -left-40 w-[420px] h-[420px] rounded-full bg-lime/[0.02] blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Contact Header & Call to Action */}
        <div className="max-w-4xl mb-14 sm:mb-18">
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-surface/80 text-[11px] font-mono uppercase tracking-[0.18em] text-accenttext mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>Get in Touch</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2
              data-testid="contact-headline"
              className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.02] mb-8 text-ink"
            >
              Have a product that feels like friction? <br />
              <Serif>Let’s make it calm &amp; intuitive.</Serif>
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="text-base sm:text-lg text-mut max-w-2xl leading-relaxed mb-9 font-light">
              Open to full-time product design roles, design systems leadership, and select consultancy projects. Let’s connect and talk through your product challenge.
            </p>
          </FadeUp>

          {/* Unified Contact Action Bar — Clean, no duplication */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-xl">
              {/* Primary: Direct Compose in Gmail */}
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-gmail-btn"
                className="group flex-1 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-lime text-black font-semibold text-sm hover:brightness-105 active:scale-[0.98] transition-all duration-200 shadow-[0_0_35px_rgba(240,179,66,0.24)]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:scale-110"
                >
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                  <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                  <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                  <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C8.132,7.551,5.635,8.127,4.428,9.992L3,12.298z" />
                  <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341c1.744-1.308,4.241-0.732,5.448,1.133L45,12.298z" />
                </svg>
                <span>Compose in Gmail</span>
                <span className="text-black/70 font-bold transition-transform group-hover:translate-x-1">→</span>
              </a>

              {/* Utility: Copy Email */}
              <button
                type="button"
                onClick={handleCopy}
                data-testid="contact-copy-email"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-line bg-surface/80 backdrop-blur-md text-xs sm:text-sm font-medium text-ink hover:text-white hover:border-white/25 hover:bg-surface active:scale-[0.98] transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-lime" />
                    <span className="text-accenttext font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-faint group-hover:text-accenttext transition-colors" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Streamlined Social Capsules & Minimal Clean Footer */}
        <FadeUp delay={0.25}>
          <div className="relative rounded-3xl border border-line bg-gradient-to-b from-surface/80 to-surface/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-widest text-faint mb-5 flex items-center gap-2">
              <Sparkles size={12} className="text-accenttext" />
              <span>Connect &amp; Social Channels</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {SOCIALS.map((s: SocialLink) => {
                const Icon = ICONS[s.icon] || (s.icon === 'x' ? XIcon : ICONS.linkedin);
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${s.icon}`}
                    className="group flex items-center gap-3 p-3 rounded-2xl border border-line bg-bg/40 hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-xl border border-line bg-surface text-mut group-hover:text-accenttext group-hover:border-lime/30 transition-colors shrink-0">
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-ink group-hover:text-accenttext transition-colors truncate">
                        {s.name}
                      </div>
                      <div className="text-[11px] font-mono text-faint truncate">
                        {s.handle || 'Visit profile'}
                      </div>
                    </div>
                    <ExternalLink size={12} className="text-faint group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-line/60 flex items-center justify-between text-xs text-faint">
              <span>© {new Date().getFullYear()} Vinay Sawant</span>
              <span className="font-mono">Maharashtra, India</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
