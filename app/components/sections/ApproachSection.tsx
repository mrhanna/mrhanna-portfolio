import { Feature } from 'next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin';
import { IconType } from 'react-icons';
import {
  TbBlocks,
  TbBriefcase,
  TbDeviceDesktopCheck,
  TbDevices,
  TbFileStack,
} from 'react-icons/tb';
import FeatureGrid, { FeatureGridItem } from '../ui/FeatureGrid';

const approachPoints: FeatureGridItem[] = [
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

        <FeatureGrid items={approachPoints} />
      </div>
    </section>
  );
}
