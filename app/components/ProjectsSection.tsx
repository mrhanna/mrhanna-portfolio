import Image from 'next/image';
import Badge, { BadgeSlug } from './Badge';
import StatusBadge, { Status } from './StatusBadge';
import Link from 'next/link';

interface Project {
  name: string;
  status?: Status;
  description: string;
  stack?: BadgeSlug[];
  imageURL?: string;
  projectURL?: string;
  demoURL?: string;
}

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
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Featured Projects
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
          {projects.map((project) => (
            <li
              key={project.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow col-span-2 sm:last:odd:col-start-2"
            >
              <article>
                <div className="aspect-video bg-gray-100 relative p-4 text-right">
                  {project.imageURL && (
                    <Image
                      src={project.imageURL}
                      alt={`Project ${project.name} screenshot`}
                      fill
                      className="object-cover"
                    />
                  )}
                  {project.status && <StatusBadge status={project.status} />}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="sr-only">Status: {project.status}</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {project.description}
                  </p>
                  {project.stack && (
                    <>
                      <h4 className="sr-only">Tech Stack</h4>
                      <ul className="flex gap-2 my-4 flex-wrap">
                        {project.stack.map((slug: BadgeSlug) => (
                          <Badge key={slug} slug={slug} />
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="flex gap-4">
                    {project.projectURL && (
                      <Link
                        href={project.projectURL}
                        target={
                          isRelativeURL(project.projectURL) ? '_self' : '_blank'
                        }
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                      >
                        View Project{' '}
                        <span className="sr-only">{project.name}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                    {project.demoURL && (
                      <Link
                        href={project.demoURL}
                        target={
                          isRelativeURL(project.demoURL) ? '_self' : '_blank'
                        }
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                      >
                        Live Demo{' '}
                        <span className="sr-only">of {project.name}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
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
