import React, { useState } from 'react';
import { ArrowUpRight, Filter, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Mobile Apps', 'Design Systems', 'Web Platforms'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="selected-works" className="relative pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24 md:pb-32 border-t border-zinc-200/90 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header: Clear visual separation & Type Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 sm:mb-3">
              <span>01</span>
              <span>/</span>
              <span>Portfolio Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
              Selected works
            </h2>
          </div>

          {/* Interactive Filter Tabs (Zero-Pill: functional segmented controls with mobile horizontal scroll) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100/90 rounded-xl border border-zinc-200/80 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer min-h-[34px] flex items-center shrink-0 ${
                    isActive
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Project Grid: Dynamic Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-zinc-50/70 hover:bg-zinc-100/80 border border-zinc-200/80 hover:border-zinc-300 rounded-2xl sm:rounded-3xl p-4 sm:p-7 transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-zinc-950"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-900 rounded-2xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/95 text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Floating Category Tag inside image corner (Unboxed metadata tag) */}
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                  {project.category}
                </div>
              </div>

              {/* Unboxed Metadata (Zero-Pill Discipline: clean typography with separators) */}
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-2">
                <span>{project.client}</span>
                <span aria-hidden="true">·</span>
                <span>{project.role}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{project.year}</span>
              </div>

              {/* Project Title & Trigger Arrow */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors">
                  {project.title}
                </h3>
                <div className="w-9 h-9 rounded-full bg-white border border-zinc-200 group-hover:border-zinc-900 flex items-center justify-center shrink-0 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Supporting Summary */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 flex-1">
                {project.summary}
              </p>

              {/* Quantitative Impact Metrics (Adjacent Proof) */}
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-mono font-bold text-zinc-950 tabular-nums">
                    {project.metrics[0].value}
                  </span>
                  <span className="text-zinc-500 ml-1.5">
                    {project.metrics[0].label}
                  </span>
                </div>
                <span className="text-xs font-semibold text-zinc-900 group-hover:underline flex items-center">
                  Read Study <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
