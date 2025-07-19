import convert from "color-convert";
import { IconType } from "react-icons";
import { SiReact, SiTypescript, SiVite } from "react-icons/si";

const badges = {
    react: ['React', SiReact, '#61DAFB'],
    typescript: ['TypeScript', SiTypescript, '#3178C6'],
    vite: ['Vite', SiVite, '#646CFF'],
} satisfies Record<string, [string, IconType, string]>

export type BadgeSlug = keyof typeof badges;

function BadgeView({
    label,
    Icon,
    color,
}: {
    label: string,
    Icon: IconType,
    color: string,
}) {
    const [_a, _b, luminence] = convert.hex.hsl(color);


    return (
        <div className={`${luminence > 70 ? 'text-black' : 'text-white'} inline-block rounded-lg shadow-sm hover:shadow-md font-bold text-sm py-1 px-2`} style={{ backgroundColor: color }}>
            <Icon className={`${luminence > 70 ? 'text-black' : 'text-white'} inline`} /> {label}
        </div>
    )
}

export default function Badge({ slug }: { slug: BadgeSlug }) {
    const badge = badges[slug];

    return <BadgeView label={badge[0]} Icon={badge[1]} color={badge[2]} />
}
