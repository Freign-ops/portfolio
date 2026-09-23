import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Main Grid: Clean 2-column desktop split; on mobile, text is clean and directly leads to works */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-14 items-center">
          
          {/* Typographic Hierarchy Lockup (Eyebrow -> H1 -> Paragraph -> CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            
            {/* 1. Eyebrow Text (Minimalist Swiss aesthetic, no clunky emoji) */}
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-zinc-900 mb-3 sm:mb-4">
              Hello! I'm Ivan.
            </p>

            {/* 2. Rebalanced Hero H1 Headline with Natural Phrase Boundaries */}
            {/* On mobile: wraps at natural semantic phrases ("Designing digital product" / "with emphasis" / "on visual design") */}
            <h1 className="text-[2.25rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.5rem] font-extrabold tracking-[-0.035em] text-zinc-950 leading-[1.08] sm:leading-[1.06] mb-5 sm:mb-7">
              <span className="block sm:inline">Designing digital product </span>
              <span className="block sm:inline">with emphasis </span>
              <span className="text-zinc-400 font-extrabold block sm:inline transition-colors hover:text-zinc-600 cursor-default">
                on visual design
              </span>
            </h1>

            {/* 3. Supporting Paragraph (Comfortable measure, fully visible on both desktop and mobile) */}
            <p className="text-[15px] sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl mb-6 sm:mb-9">
              A multidisciplinary designer focusing on visual design and digital products to achieve online growth and measurable business impact.
            </p>

            {/* 4. Action CTAs (Primary Filled vs. Secondary Outlined with mobile touch-friendly layout) */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              
              {/* Primary Filled CTA */}
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-sm sm:text-base font-semibold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-zinc-950 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Outlined CTA */}
              <a
                href="#selected-works"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-50 text-sm sm:text-base font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-zinc-900 group"
              >
                <span>Selected works</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

            </div>

            {/* 5. Qualitative Trust Metrics (Zero-Pill Discipline) */}
            <div className="pt-5 border-t border-zinc-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
                <span className="text-zinc-900 font-semibold">10+ Years</span>
                <span>Experience</span>
              </div>
              <span aria-hidden="true" className="text-zinc-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
                <span className="text-zinc-900 font-semibold">40+ Shipped</span>
                <span>Projects</span>
              </div>
              <span aria-hidden="true" className="text-zinc-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
                <span className="text-zinc-900 font-semibold">4.9/5.0</span>
                <span>Satisfaction</span>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup Frame (Shown on desktop view where it frames the page cleanly without overlapping text) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end items-center relative">
            {/* Subtle glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-zinc-200/50 rounded-full blur-2xl -z-10 opacity-70" />
            
            <div className="w-full max-w-[340px] transform transition-transform hover:scale-[1.01] duration-300">
              <PhoneMockup />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
