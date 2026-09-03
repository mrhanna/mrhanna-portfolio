import { IconType } from 'react-icons';
import {
  TbShieldCheck,
  TbFileCode2,
  TbNetwork,
  TbSearch,
  TbUserCheck,
  TbMessage2Code,
} from 'react-icons/tb';

interface ApproachPoint {
  title: string;
  description: string;
  icon: IconType;
}

const approachPoints: ApproachPoint[] = [
  {
    title: 'Systems-First Mindset',
    description:
      'Thinking about how the code, the network, and the hardware talk to each other.',
    icon: TbNetwork,
  },
  {
    title: 'Reliability',
    description:
      'Writing config and software that are stable, predictable, and built to last.',
    icon: TbShieldCheck,
  },
  {
    title: 'Clear Documentation',
    description:
      "Writing down IP schemas and code logic so the next person doesn't have to guess.",
    icon: TbFileCode2,
  },
  {
    title: 'Methodical Troubleshooting',
    description:
      'Thinking through problems layer by layer instead of throwing random fixes at the wall.',
    icon: TbSearch,
  },
  {
    title: 'End-User Focus',
    description:
      'Remembering that systems should serve real people and prioritizing usability.',
    icon: TbUserCheck,
  },
  {
    title: 'Clear Communication',
    description: 'Translating the tech into plain English.',
    icon: TbMessage2Code,
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
