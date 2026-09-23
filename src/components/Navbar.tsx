import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ExternalLink, Mail, Copy, Check } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('ivan@showcasy.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: 'Selected Works', href: '#selected-works' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200/80 py-3 sm:py-3.5'
            : 'bg-white/80 backdrop-blur-xs py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-zinc-900 rounded-sm"
          >
            showcasy<span className="text-zinc-400">.</span>
          </a>

          {/* Center Navigation Links (Zone 2 - Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-zinc-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-zinc-950 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group (Zone 3 - Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Primary "Let's Talk" CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 sm:h-11 sm:px-5 rounded-full border border-zinc-900 bg-transparent text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-200 text-xs sm:text-sm font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-zinc-950 group min-h-[44px] touch-manipulation cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Circular Hamburger Button (Accessible 44x44px minimum tap target) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 sm:w-11 sm:h-11 min-w-[44px] min-h-[44px] rounded-full border border-zinc-300 hover:border-zinc-900 bg-white flex flex-col items-center justify-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-zinc-900 cursor-pointer active:scale-90 touch-manipulation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`w-4 h-[2px] bg-zinc-900 transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`w-4 h-[2px] bg-zinc-900 transition-transform duration-200 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </button>

          </div>

        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
              <span className="text-xl font-bold tracking-tight text-zinc-950">
                showcasy<span className="text-zinc-400">.</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-zinc-200 hover:border-zinc-900 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="py-8 space-y-6">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Navigation
              </p>
              <ul className="space-y-4">
                {navLinks.map((link, idx) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between py-2 text-2xl font-bold text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                        0{idx + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Status / Availability */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3" />
                  <span className="text-xs font-medium text-zinc-900">Available for projects</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Accepting select product design & design system partnerships for Q3/Q4 2026.
                </p>
              </div>
            </div>

            {/* Drawer Footer & Direct Actions */}
            <div className="pt-6 border-t border-zinc-200 space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full h-12 rounded-full bg-black text-white hover:bg-zinc-800 text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-500 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors font-mono py-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>ivan@showcasy.design</span>
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3 text-zinc-400" />
                  )}
                </button>
                <div className="flex items-center gap-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    X
                  </a>
                  <span>·</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
