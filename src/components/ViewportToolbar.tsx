import React from 'react';
import { Monitor, Smartphone, Columns, Maximize2, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ViewportMode } from '../types';

interface ViewportToolbarProps {
  mode: ViewportMode;
  onModeChange: (mode: ViewportMode) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const ViewportToolbar: React.FC<ViewportToolbarProps> = ({
  mode,
  onModeChange,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      aria-label="UX Redesign Inspector"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 font-sans select-none"
    >
      {isCollapsed ? (
        <button
          onClick={onToggleCollapse}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-zinc-950/95 text-white rounded-full shadow-2xl border border-zinc-800 backdrop-blur-md hover:bg-zinc-900 transition-all text-xs font-semibold cursor-pointer active:scale-95"
          title="Open Viewport & Redesign Inspector"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Viewport Inspector</span>
          <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
        </button>
      ) : (
        <div className="bg-zinc-950/95 text-white rounded-2xl shadow-2xl border border-zinc-800 p-3.5 backdrop-blur-xl w-[calc(100vw-2rem)] max-w-[310px] space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-tight text-zinc-100">
                UX Redesign Inspector
              </span>
            </div>
            <button
              onClick={onToggleCollapse}
              className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors"
              title="Minimize inspector"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Viewport Mode Switcher */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
              Target Viewport Preview
            </span>
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
              
              {/* Native Fluid */}
              <button
                onClick={() => onModeChange('fluid')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                  mode === 'fluid'
                    ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fluid Web</span>
              </button>

              {/* Desktop 1440px */}
              <button
                onClick={() => onModeChange('desktop-1440')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                  mode === 'desktop-1440'
                    ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>1440px Desk</span>
              </button>

              {/* Mobile 390px */}
              <button
                onClick={() => onModeChange('mobile-390')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                  mode === 'mobile-390'
                    ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>390px Mob</span>
              </button>

              {/* Side-by-Side Comparison */}
              <button
                onClick={() => onModeChange('side-by-side')}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                  mode === 'side-by-side'
                    ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>

            </div>
          </div>

          {/* Key Improvements Checklist */}
          <div className="pt-2 border-t border-zinc-800 space-y-1.5 text-[11px] text-zinc-300">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Headline fits cleanly, zero clipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mockup never overlaps paragraph</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mobile natural phrase boundaries</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Sticky navbar & 44px+ touch targets</span>
            </div>
          </div>

        </div>
      )}
    </aside>
  );
};
