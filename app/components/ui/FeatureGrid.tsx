import { IconType } from 'react-icons';

export interface FeatureGridItem {
  title?: string;
  description?: string;
  icon?: IconType;
}

export default function FeatureGrid({ items }: { items: FeatureGridItem[] }) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {items.map(({ title, description, icon: Icon }, index) => (
        <div className="pr-4" key={index}>
          {Icon && (
            <Icon
              aria-hidden="true"
              className="text-4xl my-4 stroke-ui-blue-400"
            />
          )}
          {title && (
            <h3 className="text-sm font-bold text-ui-blue-50 border-l-2 border-l-accent-orange-500 pl-3.5 -ml-4 mb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-ui-blue-100">{description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
