import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { SelectedWorks } from './SelectedWorks';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { Footer } from './Footer';
import { Project } from '../types';

interface PortfolioSiteProps {
  onOpenContact: () => void;
  onSelectProject: (project: Project) => void;
  isSimulatedMobile?: boolean;
}

export const PortfolioSite: React.FC<PortfolioSiteProps> = ({
  onOpenContact,
  onSelectProject,
  isSimulatedMobile = false,
}) => {
  return (
    <div className={`min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white ${isSimulatedMobile ? 'text-sm' : ''}`}>
      <Navbar onOpenContact={onOpenContact} />
      <main id="main-content">
        <Hero onOpenContact={onOpenContact} />
        <SelectedWorks onSelectProject={onSelectProject} />
        <AboutSection />
        <ServicesSection onOpenContact={onOpenContact} />
      </main>
      <Footer onOpenContact={onOpenContact} />
    </div>
  );
};
