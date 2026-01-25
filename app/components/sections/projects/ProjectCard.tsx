import Link from 'next/link';
import Badge, { BadgeSlug } from './Badge';
import StatusBadge, { Status } from './StatusBadge';
import Card from '../../ui/Card';

export interface Project {
  name: string;
  status?: Status;
  description: string;
  stack?: BadgeSlug[];
  imageURL?: string;
  projectURL?: string;
  demoURL?: string;
}

interface Props {
  project: Project;
  as?: React.ElementType;
  className?: string;
}

export default function ProjectCard({ project, as = 'div', className }: Props) {
  return (
    <Card
      as={as}
      className={className}
      imageSrc={project.imageURL}
      imageAlt={`Project ${project.name} screenshot`}
      imageOverlay={project.status && <StatusBadge status={project.status} />}
    >
      <h3 className="text-base sm:text-lg font-semibold text-ui-blue-950 mb-2">
        {project.name}
      </h3>
      <p className="text-sm sm:text-base text-ui-blue-900 mb-4">
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
            target={isRelativeURL(project.projectURL) ? '_self' : '_blank'}
            className="text-ui-blue-700 hover:text-ui-blue-800 font-medium text-sm sm:text-base"
          >
            View Project <span className="sr-only">{project.name}</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
        {project.demoURL && (
          <Link
            href={project.demoURL}
            target={isRelativeURL(project.demoURL) ? '_self' : '_blank'}
            className="text-ui-blue-700 hover:text-ui-blue-800 font-medium text-sm sm:text-base"
          >
            Live Demo <span className="sr-only">of {project.name}</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </Card>
  );
}

function isRelativeURL(url: string) {
  return !url.includes('://') && !url.startsWith('//');
}
