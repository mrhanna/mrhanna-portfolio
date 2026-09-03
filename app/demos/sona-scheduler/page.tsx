import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoNA Mentors Scheduler | Michael Hanna - Full-Stack Developer',
  description:
    'A React frontend for Google Workspace that simplifies session planning for the SoNA mentors by automating school schedule math and flagging calendar conflicts.',
  authors: [{ name: 'Michael Hanna' }],
  creator: 'Michael Hanna',
  openGraph: {
    title: 'SoNA Mentors Scheduler',
    description:
      'A React frontend for Google Workspace that simplifies session planning for the SoNA mentors by automating school schedule math and flagging calendar conflicts.',
    url: 'https://mrhanna.dev/demos/sona-scheduler',
    siteName: 'Michael Hanna - Portfolio',
    images: [
      {
        url: '/images/sona-scheduler.jpg',
        width: 1280,
        height: 720,
        alt: 'SoNA Mentors Scheduler screenshot',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SonaSchedulerPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <iframe
        src="/sona-scheduler.html"
        className="w-full h-full border-0"
        title="SoNA Mentors Scheduler Demo"
      />
    </div>
  );
}
