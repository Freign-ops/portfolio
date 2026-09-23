import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Case Study
            </span>
            <span className="text-zinc-300">/</span>
            <span className="text-sm font-semibold text-zinc-900 truncate">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-zinc-200 hover:border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-12 space-y-10">
          
          {/* Header Lockup */}
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 mb-3">
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{project.year}</span>
            </div>
            <h2 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quantitative Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950 tabular-nums mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-600 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-200">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-950" />
                The Strategic Solution
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white space-y-4">
              <Quote className="w-6 h-6 text-zinc-500" />
              <p className="text-base sm:text-lg italic font-normal text-zinc-200 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="pt-2 text-xs sm:text-sm">
                <span className="font-semibold text-white">{project.testimonial.author}</span>
                <span className="text-zinc-400"> — {project.testimonial.title}, {project.testimonial.company}</span>
              </div>
            </div>
          )}

          {/* Next Action in Modal */}
          <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-zinc-500">
              Need a similar solution for your product?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-semibold transition-colors active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
