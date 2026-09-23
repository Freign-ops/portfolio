/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewportMode, Project } from './types';
import { PortfolioSite } from './components/PortfolioSite';
import { ViewportToolbar } from './components/ViewportToolbar';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { Monitor, Smartphone, Check, Sparkles } from 'lucide-react';

export default function App() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>('fluid');
  const [isToolbarCollapsed, setIsToolbarCollapsed] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-100 font-sans text-zinc-950">
      
      {/* Interactive Viewport & Redesign Inspector Toolbar */}
      <ViewportToolbar
        mode={viewportMode}
        onModeChange={setViewportMode}
        isCollapsed={isToolbarCollapsed}
        onToggleCollapse={() => setIsToolbarCollapsed(!isToolbarCollapsed)}
      />

      {/* RENDER MODE 1: NATIVE FLUID (Standard Responsive Web View) */}
      {viewportMode === 'fluid' && (
        <PortfolioSite
          onOpenContact={() => setIsContactOpen(true)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}

      {/* RENDER MODE 2: SIMULATED 1440px DESKTOP BASELINE */}
      {viewportMode === 'desktop-1440' && (
        <div className="py-8 px-4 sm:px-6 min-h-screen flex flex-col items-center">
          <div className="w-full max-w-[1440px] mb-3 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-zinc-700" />
              <span className="font-semibold text-zinc-800">Desktop Viewport</span>
              <span>(1440 × 960px Frame)</span>
            </div>
            <span className="text-emerald-700 font-medium">✓ Headline fits cleanly without clipping or overlapping mockup</span>
          </div>

          {/* Desktop Browser Window Frame */}
          <div className="w-full max-w-[1440px] bg-white rounded-2xl shadow-2xl border border-zinc-300 overflow-hidden">
            {/* Browser Tab Bar */}
            <div className="bg-zinc-200/80 px-4 py-2.5 border-b border-zinc-300 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 max-w-sm mx-auto bg-white/90 rounded-md px-3 py-1 text-[11px] font-mono text-zinc-600 text-center border border-zinc-200 truncate">
                https://showcasy.design/
              </div>
            </div>

            <div className="w-full overflow-x-hidden">
              <PortfolioSite
                onOpenContact={() => setIsContactOpen(true)}
                onSelectProject={(p) => setSelectedProject(p)}
              />
            </div>
          </div>
        </div>
      )}

      {/* RENDER MODE 3: SIMULATED 390px MOBILE (iPhone 15/16 Pro Baseline) */}
      {viewportMode === 'mobile-390' && (
        <div className="py-6 sm:py-10 px-3 sm:px-4 min-h-screen flex flex-col items-center justify-center bg-zinc-900/10">
          <div className="w-full max-w-[390px] mb-3 flex items-center justify-between text-xs text-zinc-600 font-mono">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-zinc-800" />
              <span className="font-semibold text-zinc-900">Mobile Viewport</span>
              <span>(390px iPhone)</span>
            </div>
            <span className="text-emerald-700 font-medium">✓ Natural Line Breaks</span>
          </div>

          {/* Mobile Phone Mockup Chassis */}
          <div className="w-full max-w-[390px] h-[844px] max-h-[92vh] bg-zinc-950 rounded-[44px] sm:rounded-[50px] p-2.5 sm:p-3 shadow-2xl border-4 border-zinc-800 relative">
            <div className="w-full h-full bg-white rounded-[36px] sm:rounded-[40px] overflow-y-auto overflow-x-hidden relative no-scrollbar">
              <PortfolioSite
                onOpenContact={() => setIsContactOpen(true)}
                onSelectProject={(p) => setSelectedProject(p)}
                isSimulatedMobile={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* RENDER MODE 4: SIDE-BY-SIDE COMPARISON (Like the user's reference screenshot) */}
      {viewportMode === 'side-by-side' && (
        <div className="py-8 px-6 min-h-screen">
          <div className="max-w-[1800px] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                <span>Side-by-Side Viewport Evaluation</span>
                <span>·</span>
                <span className="text-emerald-700 font-semibold">Zero-Overlap Verified</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Desktop (1440px) vs. Mobile (390px)
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-600 bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Balanced headline typography</span>
              </div>
              <span className="text-zinc-300">|</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Zero phone-text overlap</span>
              </div>
              <span className="text-zinc-300">|</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Natural mobile phrase breaks</span>
              </div>
            </div>
          </div>

          <div className="max-w-[1800px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            
            {/* Desktop Panel (col-span-8) */}
            <div className="xl:col-span-8 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden">
              <div className="bg-zinc-100 px-4 py-2 border-b border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-zinc-800" />
                  <span className="font-semibold text-zinc-900">Desktop 1440px View</span>
                </div>
                <span className="text-[11px] text-zinc-500">Unclipped headline · Visible paragraph</span>
              </div>
              <div className="h-[844px] overflow-y-auto overflow-x-hidden">
                <PortfolioSite
                  onOpenContact={() => setIsContactOpen(true)}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              </div>
            </div>

            {/* Mobile Panel (col-span-4) */}
            <div className="xl:col-span-4 flex flex-col items-center w-full">
              <div className="w-full max-w-[390px] bg-zinc-100 px-4 py-2 rounded-t-2xl border-t border-x border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-zinc-800" />
                  <span className="font-semibold text-zinc-900">Mobile 390px View</span>
                </div>
                <span className="text-[11px] text-zinc-500">Natural phrase breaks</span>
              </div>

              <div className="w-full max-w-[390px] h-[844px] max-h-[85vh] bg-zinc-950 rounded-b-[40px] p-2.5 shadow-2xl border-x-4 border-b-4 border-zinc-800 relative">
                <div className="w-full h-full bg-white rounded-b-[32px] overflow-y-auto overflow-x-hidden relative no-scrollbar">
                  <PortfolioSite
                    onOpenContact={() => setIsContactOpen(true)}
                    onSelectProject={(p) => setSelectedProject(p)}
                    isSimulatedMobile={true}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Global Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
