import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Care Dashboard | Michael Hanna - Full-Stack Developer',
  description:
    'A pixel-perfect dashboard implementation based on an Adobe XD design, developed for a frontend skills assessment.',
  authors: [{ name: 'Michael Hanna' }],
  creator: 'Michael Hanna',
  openGraph: {
    title: 'Health Care Dashboard',
    description:
      'A pixel-perfect dashboard implementation based on an Adobe XD design, developed for a frontend skills assessment.',
    url: 'https://mrhanna.dev/demos/health-care-dashboard',
    siteName: 'Michael Hanna - Portfolio',
    images: [
      {
        url: '/images/healthcaredashboard-card.png',
        width: 1280,
        height: 720,
        alt: 'Health Care Dashboard screenshot',
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

export default function HCDPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b-2">
        Frontend Assessment Project: Health Care Dashboard
      </h1>
      <h2 className="text-xl font-semibold mb-2 mt-8">Stack</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Vite</li>
        <li>Redux</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">Overview</h2>
      <p>
        Built a pixel-perfect responsive dashboard from Adobe XD design
        specifications, demonstrating both visual accuracy and front-end
        engineering best practices. The project emphasized clean state
        management, accessibility, and performance within a modern toolchain.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">Highlights</h2>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>
          <strong>State Management:</strong> Implemented Redux slices for
          patient data and authentication, creating a scalable structure for
          managing asynchronous API requests and user session state.
        </li>
        <li>
          <strong>Accessibility (a11y):</strong> Designed the dashboard with
          semantic HTML and ARIA-conscious layouts. For example, diagnostic data
          was presented as a table for screen reader compatibility, styled with
          CSS to meet the visual spec while remaining accessible.
        </li>
        <li>
          <strong>Responsive Grid Layout:</strong> Structured the dashboard
          using CSS Grid, prioritizing semantic order of key content (e.g.,
          Profile Panel placed early in the DOM hierarchy) to improve
          accessibility and logical navigation.
        </li>
        <li>
          <strong>Design Fidelity:</strong> Delivered a pixel-perfect
          implementation, resolving gaps in the provided API (e.g., missing
          high-res profile images) with thoughtful fallbacks that matched the
          spec.
        </li>
        <li>
          <strong>Performance:</strong> Used Vite and vite-plugin-singlefile for
          optimized builds and efficient bundling.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-8">Outcome</h2>
      <p>
        The project showcases my ability to translate design specifications into
        fully functional, accessible interfaces using modern front-end tools.
        While the code and original spec are under NDA, a demo and case study
        are available privately upon request.
      </p>

      <figure className="my-6">
        <img
          src="/images/healthcaredashboard.png"
          alt="Health Care Dashboard screenshot"
          className="rounded-sm shadow-sm"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Screenshot of demo Health Care Dashboard
        </figcaption>
      </figure>
    </main>
  );
}
