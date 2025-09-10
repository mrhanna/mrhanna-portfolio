import Image from 'next/image';

export default function SkillsSection() {
  const skills = [
    // Core Languages & Frameworks
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Expo',
    'PHP',
    'Symfony',

    // Styling & UI
    'TailwindCSS',
    'styled-components',

    // State & Data Management
    'Redux',
    'Prisma',
    'Strapi',

    // Dev Tools & Workflow
    'Git',
    'GitHub',
    'VS Code',
    'ESLint',

    // Backend & APIs
    'Node.js',
    'REST API',
    'JWT Authentication',

    // Cloud & Hosting
    'Azure',

    // General Skills
    'Responsive Design',
    'Component-Driven Development',
  ];

  const certs = [
    [
      'AZ-900',
      'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main',
    ],
  ];

  return (
    <div className="bg-background-100 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Skills & Technologies
          </h2>
          <ul className="flex justify-center flex-wrap gap-5 sm:gap-4 gap my-8">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow text-sm sm:text-base"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center mt-12">
            Certifications
          </h2>
          <ul className="flex justify-center flex-wrap gap-5 sm:gap-4 gap">
            {certs.map((cert) => (
              <li
                key={cert[0]}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow text-sm sm:text-base"
              >
                <Image
                  src={cert[1]}
                  width={80}
                  height={80}
                  alt=""
                  className="mb-4"
                />
                {cert[0]}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
