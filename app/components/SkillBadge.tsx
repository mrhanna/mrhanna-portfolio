import { useCallback } from 'react';
import type { SimpleIcon } from 'simple-icons';

const INACTIVE_COLOR = 'var(--color-ui-blue-950)';

export type Skill = {
  name: string;
  icon: { hex: string | string[]; path: string | string[]; viewBox?: string };
  weight?: number;
  category?: string;
  cloudOrder?: number;
};

export default function SkillBadge({
  skill,
  isActive = false,
  setHoveredSkill,
}: {
  skill: Skill;
  isActive?: boolean;
  setHoveredSkill: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { name, icon, weight = 1, cloudOrder = 0 } = skill;

  const handleMouseEnter = useCallback(() => {
    setHoveredSkill(name);
  }, [name, setHoveredSkill]);

  const handleMouseLeave = useCallback(() => {
    setHoveredSkill('');
  }, [setHoveredSkill]);

  return (
    <li
      className="inline-flex font-bold text-sm overflow-hidden"
      style={{
        order: cloudOrder,
        gridColumn: `span ${weight}`,
        gridRow: `span ${weight}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center px-1">
        <div className="w-full aspect-square relative">
          {/* The colored SVG */}
          <svg
            role="img"
            viewBox={icon.viewBox ?? '0 0 24 24'}
            className="w-full h-full transition-opacity relative z-1"
            style={{
              opacity: isActive ? 1 : 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={Array.isArray(icon.hex) ? undefined : `#${icon.hex}`}
          >
            {Array.isArray(icon.path) ? (
              icon.path.map((p, i) => (
                <path
                  className="transition-[fill,opacity]"
                  key={i}
                  d={p}
                  fill={Array.isArray(icon.hex) ? `#${icon.hex[i]}` : undefined}
                />
              ))
            ) : (
              <path
                d={icon.path}
                fill={Array.isArray(icon.hex) ? `#${icon.hex[0]}` : undefined}
              />
            )}
          </svg>

          {/* The desaturated SVG */}
          <svg
            role="img"
            viewBox={icon.viewBox ?? '0 0 24 24'}
            className="w-full h-full absolute top-0 left-0 -z-1"
            style={{
              opacity: 0.3,
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill={INACTIVE_COLOR}
          >
            {Array.isArray(icon.path) ? (
              icon.path.map((p, i) => (
                <path className="transition-[fill,opacity]" key={i} d={p} />
              ))
            ) : (
              <path d={icon.path} />
            )}
          </svg>
        </div>
      </span>
      {/* <span className="block pl-2 pr-3">{name}</span> */}
    </li>
  );
}
