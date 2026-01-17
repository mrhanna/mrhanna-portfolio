import { IconType } from 'react-icons';
import {
  TbBlocks,
  TbBriefcase,
  TbDeviceDesktopCheck,
  TbDevices,
  TbFileStack,
} from 'react-icons/tb';

interface ApproachPoint {
  title: string;
  description: string;
  icon: IconType;
}

const approachPoints: ApproachPoint[] = [
  {
    title: 'Component-Driven Development',
    description: 'Designing interfaces as composable, testable units.',
    icon: TbBlocks,
  },
  {
    title: 'Responsive Design',
    description: 'Layouts that adapt intentionally, not incidentally.',
    icon: TbDevices,
  },
  {
    title: 'Accessibility-First Thinking',
    description: 'WCAG 2.1 AA considerations built in from the start.',
    icon: TbDeviceDesktopCheck,
  },
  {
    title: 'Content-First CMS Architecture',
    description:
      'Modeling content so it survives redesigns and platform changes.',
    icon: TbFileStack,
  },
  {
    title: 'Platform Pragmatism',
    description:
      'Comfortable supporting existing systems when that’s the reality.',
    icon: TbBriefcase,
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-ui-blue-900">
      <div className="px-4 container sideline pt-8 pb-16">
        <h2 className="Text text-ui-blue-100 font-black py-4">
          Principles &amp; Approach
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {approachPoints.map((point) => (
            <div key={point.title} className="pr-4">
              <point.icon
                aria-hidden="true"
                className="text-4xl my-4 stroke-ui-blue-400"
              />
              <h3 className="text-sm font-bold text-ui-blue-50 border-l-2 border-l-accent-orange-500 pl-3.5 -ml-4 mb-4">
                {point.title}
              </h3>
              <p className="text-sm text-ui-blue-100">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
