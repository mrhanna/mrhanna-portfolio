export type Skill = {
  name: string;
  icon: { hex: string | string[]; path: string | string[]; viewBox?: string };
  weight?: number;
  category?: string;
  cloudOrder?: number;
};

export default function SkillIcon({
  skill,
  displayLevel = 2,
  onClick,
  onMouseEnter,
}: {
  skill: Skill;
  displayLevel?: 1 | 2 | 3 | 4;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const { icon, weight = 1, cloudOrder = 0 } = skill;

  return (
    <li
      className={`skill-icon level-${displayLevel}`}
      style={{
        order: cloudOrder,
        gridColumn: `span ${weight}`,
        gridRow: `span ${weight}`,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <span className="flex items-center px-1">
        <div className="w-full aspect-square relative">
          {/* The colored SVG */}
          <svg
            viewBox={icon.viewBox ?? '0 0 24 24'}
            className="svg-active"
            xmlns="http://www.w3.org/2000/svg"
            fill={Array.isArray(icon.hex) ? undefined : `#${icon.hex}`}
          >
            {Array.isArray(icon.path) ? (
              icon.path.map((p, i) => (
                <path
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
            viewBox={icon.viewBox ?? '0 0 24 24'}
            className="svg-inactive"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.isArray(icon.path) ? (
              icon.path.map((p, i) => <path key={i} d={p} />)
            ) : (
              <path d={icon.path} />
            )}
          </svg>
        </div>
      </span>
    </li>
  );
}
