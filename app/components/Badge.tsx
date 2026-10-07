import { IconType } from 'react-icons';
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiGoogle,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiCisco,
  SiLinux,
  SiAnsible,
} from 'react-icons/si';

import clsx from 'clsx';

const badges = {
  react: ['React', SiReact, '#61DAFB'],
  typescript: ['TypeScript', SiTypescript, '#3178C6'],
  vite: ['Vite', SiVite, '#646CFF'],
  docker: ['Docker', SiDocker, '#2496ED'],
  express: ['Express', SiExpress, '#000000'],
  prisma: ['Prisma', SiPrisma, '#2D3748'],
  nextjs: ['Next.js', SiNextdotjs, '#000000'],
  postgres: ['PostgreSQL', SiPostgresql, '#336791'],
  strapi: ['Strapi', SiStrapi, '#4945FF'],
  redux: ['Redux', SiRedux, '#764ABC'],
  tailwindcss: ['TailwindCSS', SiTailwindcss, '#06B6D4'],
  expo: ['Expo', SiExpo, '#000020'],
  googleAppsScript: ['Google Apps Script', SiGoogle, '#4285F4'],
  containerlab: ['Containerlab', undefined],
  cisco: ['Cisco', SiCisco, '#1BA0D7'],
  linux: ['Linux', SiLinux, '#FCC624'],
  ansible: ['Ansible', SiAnsible, '#EE0000'],
  arista: ['Arista', undefined, '#0072C6'],
} satisfies Record<string, [string, IconType?, string?]>;

export type BadgeSlug = keyof typeof badges;

function BadgeView({
  label,
  Icon,
  color = 'var(--color-ui-blue-900)',
}: {
  label: string;
  Icon?: IconType;
  color?: string;
}) {
  return (
    <li
      className="inline-flex rounded-lg hover:shadow-md font-bold text-sm overflow-hidden"
      style={{
        border: `2px solid ${color}`,
      }}
    >
      {Icon && (
        <span
          className="flex items-center px-1"
          style={{
            backgroundColor: color,
            color: 'var(--color-ui-blue-50)',
          }}
        >
          <Icon aria-hidden="true" className="block" />
        </span>
      )}
      <span
        className={clsx('block pr-3 text-ui-blue-950', Icon ? 'pl-2' : 'pl-3')}
      >
        {label}
      </span>
    </li>
  );
}

export default function Badge({ slug }: { slug: string }) {
  const badge = badges[slug as BadgeSlug] ?? [
    slug,
    undefined,
    'var(--color-ui-blue-900)',
  ];

  return <BadgeView label={badge[0]} Icon={badge[1]} color={badge[2]} />;
}
