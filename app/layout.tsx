import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './styles/globals.css';

const inter = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mrhanna.dev'),
  title: 'Michael Hanna - Full-Stack Developer',
  description:
    'Musician turned full-stack developer building modern, responsive web and mobile apps with React, TypeScript, and more.',
  keywords: [
    'Michael Hanna',
    'software developer',
    'JavaScript developer',
    'TavaScript developer',
    'React developer',
    'frontend developer',
    'full stack developer',
    'freelance developer',
    'web developer',
    'Next.js',
    'React Native',
    'TypeScript',
    'Strapi',
    'Tailwind CSS',
    'Expo',
    'Redux',
    'Symfony',
    'PHP',
    'REST API',
    'content management systems',
    'solo developer',
    'developer portfolio',
    'code portfolio',
    'musician and programmer',
    'component-based UI',
    'responsive design',
    'freelance programmer',
  ],
  authors: [{ name: 'Michael Hanna' }],
  creator: 'Michael Hanna',
  openGraph: {
    title: 'Michael Hanna - Developer Portfolio',
    description:
      'Musician turned full-stack developer building modern, responsive web and mobile apps with React, TypeScript, and more.',
    url: 'https://mrhanna.dev',
    siteName: 'Michael Hanna - Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michael Hanna - Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter: {
  // 	card: 'summary_large_image',
  // 	title: 'Michael Hanna - Developer',
  // 	description: 'Musician turned full-stack developer building modern, responsive web and mobile apps with React, TypeScript, and more.',
  // 	creator: '@yourusername',
  // 	images: ['/og-image.jpg'],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-ui-blue-50`}>
        {children}
      </body>
    </html>
  );
}
