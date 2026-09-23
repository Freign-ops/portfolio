import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Zurich/Central European Time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Zurich',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ivan@showcasy.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-zinc-800/80">
          
          {/* Brand & Studio Location */}
          <div className="lg:col-span-6 space-y-4">
            <a href="#" className="text-3xl font-extrabold tracking-tight text-white inline-block">
              showcasy<span className="text-zinc-500">.</span>
            </a>
            <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
              Designing digital products with uncompromising emphasis on visual clarity, typography, and human ergonomics.
            </p>
            
            {/* Live Studio Time indicator */}
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio Zurich</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-200 tabular-nums">{localTime || '09:41:00'} CEST</span>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#selected-works" className="hover:text-white transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Ivan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Design Services
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left"
                >
                  Initiate Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Direct Contact
            </h4>
            
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors font-mono py-1"
            >
              <Mail className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
              <span>ivan@showcasy.design</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" />
              )}
            </button>

            <div className="pt-2 flex items-center gap-4 text-sm text-zinc-400">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                X / Twitter
              </a>
              <span>·</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <span>·</span>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Dribbble
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} showcasy. All rights reserved. Crafted with precision.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors py-1 group"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
              <ArrowUp className="w-3 h-3 text-zinc-400 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
