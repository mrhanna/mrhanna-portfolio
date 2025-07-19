'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { useSearchParams } from 'next/navigation';
import ContactModal from './components/ContactModal';

export default function SimplePortfolio() {
	const shouldShowContact = useSearchParams().has('contact');

	return (
		<>
			<ContactModal isOpen={shouldShowContact} />
			<main className="min-h-screen bg-background-50 pt-12">
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}
