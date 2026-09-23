import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-28 bg-white border-t border-zinc-200/90 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 sm:mb-3">
              <span>03</span>
              <span>/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
              Services & Expertise
            </h2>
          </div>
          <p className="text-xs sm:text-base text-zinc-600 max-w-md">
            Delivering bespoke design systems, high-conversion web platforms, and mobile apps with end-to-end craft.
          </p>
        </div>

        {/* Services List with Editorial Numbers */}
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-zinc-50/50 transition-colors px-1 sm:px-2 -mx-1 sm:-mx-2 rounded-xl"
            >
              {/* Number */}
              <div className="lg:col-span-2 text-xs sm:text-sm font-mono text-zinc-400 group-hover:text-zinc-950 transition-colors">
                {service.number} //
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-6 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-base text-zinc-600 leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Deliverables (Zero-Pill Discipline: clean unboxed list) */}
              <div className="lg:col-span-4 pt-2 lg:pt-0">
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 sm:mb-3">
                  Key Deliverables
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Service CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-zinc-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Have a custom project in mind?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Let's explore your timeline, scope, and product goals together.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-all shrink-0 active:scale-95"
          >
            Start a Conversation →
          </button>
        </div>

      </div>
    </section>
  );
};
