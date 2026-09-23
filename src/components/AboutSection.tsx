import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-zinc-50/70 border-t border-zinc-200/90 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 sm:mb-3">
            <span>02</span>
            <span>/</span>
            <span>Philosophy & Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
            Balancing Swiss aesthetic purity with rigorous commercial utility.
          </h2>
          <p className="text-sm sm:text-lg text-zinc-600 leading-relaxed">
            I am Ivan, an independent product & visual designer with two decades of experience designing software that feels effortless to use and impossible to ignore. I partner with ambitious founders, design leaders, and engineering teams to transform complex systems into clear, intuitive digital artifacts.
          </p>
        </div>

        {/* 3 Pillars Grid (8px grid aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20">
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-xs space-y-3 sm:space-y-4">
            <span className="text-xs font-mono font-bold text-zinc-400">01. PRINCIPLE</span>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950">Visual Hierarchy Over Clutter</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Every pixel must justify its presence. By using deliberate typographic scales and disciplined negative space, the user's focus is naturally guided toward what matters.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-xs space-y-3 sm:space-y-4">
            <span className="text-xs font-mono font-bold text-zinc-400">02. PRINCIPLE</span>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950">Mobile-First Touch Ergonomics</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Desktop layouts should breathe without clipping, while mobile viewports require comfortable phrase boundaries, generous 44px+ tap targets, and frictionless one-thumb navigation.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-xs space-y-3 sm:space-y-4">
            <span className="text-xs font-mono font-bold text-zinc-400">03. PRINCIPLE</span>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950">Measurable Growth Impact</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Great visual design is not decoration; it is a proven commercial lever. Intuitive workflows directly reduce churn, elevate conversion, and cement long-term brand equity.
            </p>
          </div>
        </div>

        {/* Client Trust Marquee Strip */}
        <div className="pt-10 border-t border-zinc-200">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 text-center sm:text-left">
            Trusted by founders and engineering teams worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client}
                className="py-4 px-3 rounded-xl bg-white border border-zinc-200/60 text-center text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
