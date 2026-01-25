'use client';

import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ContactModal from './components/ContactModal';
import { Suspense } from 'react';
import ApproachSection from './components/sections/ApproachSection';

export default function SimplePortfolio() {
  return (
    <>
      <Suspense>
        <ContactModal />
      </Suspense>
      <main className="min-h-screen">
        <HeroSection />
        <SkillsSection />
        <ApproachSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
