import Image from 'next/image';
import Badge, { BadgeSlug } from './projects/Badge';
import StatusBadge, { Status } from './projects/StatusBadge';
import Link from 'next/link';
import ProjectCard from './projects/ProjectCard';
import type { Project } from './projects/ProjectCard';

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      name: '2048',
      status: 'completed',
      description:
        'A clean, responsive, PWA re-creation of the classic 2048 puzzle game.',
      stack: ['react', 'typescript', 'vite'],
      imageURL: '/images/2048.jpg',
      projectURL: 'https://github.com/mrhanna/2048',
      demoURL: 'https://mrhanna.dev/2048',
    },
    {
      name: 'HIIT the Deck',
      status: 'in-progress',
      description: 'A fitness card game, developed for mobile with Expo.',
      stack: ['expo', 'react', 'typescript'],
      imageURL: '/images/hiit-screenshot.png',
      projectURL: 'https://github.com/mrhanna/hiit-the-deck',
    },
    {
      name: 'TrophyBoard',
      status: 'in-progress',
      description: 'A gamified student management platform.',
      stack: [
        'typescript',
        'docker',
        'express',
        'postgres',
        'prisma',
        'nextjs',
      ],
      imageURL: '/images/trophyboard.png',
      projectURL: 'https://github.com/mrhanna/trophyboard',
    },
    {
      name: 'Uptown Alive',
      status: 'shelved',
      description:
        'A local business directory and content platform that blended directory data with social-style media to drive discovery and engagement.',
      stack: ['nextjs', 'tailwindcss', 'strapi'],
      imageURL: '/images/uptown1.png',
      projectURL: 'https://github.com/mrhanna/uptown-alive-nextjs',
    },
    {
      name: 'Health Care Dashboard',
      status: 'completed',
      description:
        'A pixel-perfect dashboard implementation based on an Adobe XD design, developed for a frontend skills assessment.',
      stack: ['react', 'tailwindcss', 'vite', 'redux'],
      imageURL: '/images/healthcaredashboard-card.png',
      projectURL: '/demos/health-care-dashboard',
    },
  ];

  return (
    <section className="bg-ui-blue-100">
      <div className="px-4 container sideline pb-16">
        <h2 className="Text text-ui-blue-800 font-black pt-12 py-4">
          Featured Projects
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
          {projects.map((project) => (
            <li
              key={project.name}
              className="col-span-2 sm:last:odd:col-start-2"
            >
              <ProjectCard project={project} as="article" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function isRelativeURL(url: string) {
  return !url.includes('://') && !url.startsWith('//');
}
