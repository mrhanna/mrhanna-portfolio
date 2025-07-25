import Image from 'next/image';
import Badge, { BadgeSlug } from './Badge';

interface Project {
    name: string;
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
            description:
                'A clean, responsive, PWA re-creation of the classic 2048 puzzle game.',
            stack: ['react', 'typescript', 'vite'],
            imageURL: '/images/2048.jpg',
            projectURL: 'https://github.com/mrhanna/2048',
            demoURL: 'https://mrhanna.dev/2048',
        },
        {
            name: 'TrophyBoard',
            description:
                'A gamified student management platform. (IN PROGRESS)',
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
    ];

    return (
        <section className="py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow col-span-2 sm:last:odd:col-start-2"
                        >
                            <div className="aspect-video bg-gray-100 relative">
                                {project.imageURL && (
                                    <Image
                                        src={project.imageURL}
                                        alt={`Project 2048`}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                {project.stack && (
                                    <div className="flex gap-2 my-4 flex-wrap">
                                        {project.stack.map(
                                            (slug: BadgeSlug) => (
                                                <Badge key={slug} slug={slug} />
                                            ),
                                        )}
                                    </div>
                                )}
                                <div className="flex gap-4">
                                    {project.projectURL && (
                                        <a
                                            href={project.projectURL}
                                            target="_blank"
                                            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                                        >
                                            View Project →
                                        </a>
                                    )}
                                    {project.demoURL && (
                                        <a
                                            href={project.demoURL}
                                            target="_blank"
                                            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                                        >
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
