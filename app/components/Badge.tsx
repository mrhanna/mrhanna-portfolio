import convert from 'color-convert';
import { IconType } from 'react-icons';
import {
    SiDocker,
    SiExpress,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedux,
    SiStrapi,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

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
} satisfies Record<string, [string, IconType, string]>;

export type BadgeSlug = keyof typeof badges;

function BadgeView({
    label,
    Icon,
    color,
}: {
    label: string;
    Icon: IconType;
    color: string;
}) {
    const luminence = convert.hex.hsl(color)[2];

    return (
        <div
            className={`${luminence > 70 ? 'text-black' : 'text-white'} inline-block rounded-lg shadow-sm hover:shadow-md font-bold text-sm py-1 px-2`}
            style={{ backgroundColor: color }}
        >
            <Icon
                className={`${luminence > 70 ? 'text-black' : 'text-white'} inline`}
            />{' '}
            {label}
        </div>
    );
}

export default function Badge({ slug }: { slug: BadgeSlug }) {
    const badge = badges[slug];

    return <BadgeView label={badge[0]} Icon={badge[1]} color={badge[2]} />;
}
