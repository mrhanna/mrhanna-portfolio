'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import { Suspense } from 'react';

export default function SimplePortfolio() {
  return (
    <>
      <Suspense>
        <ContactModal />
      </Suspense>
      <main className="min-h-screen">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
