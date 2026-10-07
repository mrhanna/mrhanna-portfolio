import type { Metadata, Viewport } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './styles/globals.css';

const inter = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mrhanna.dev'),
  title: 'Michael Hanna | Code, Networks & Systems',
  description:
    "I like figuring out how things work, from the physical wire to the UI. Here's some of what I've built, configured, and broken along the way.",
  keywords: [
    'Michael Hanna',
    'software developer',
    'web developer',
    'TypeScript developer',
    'React developer',
    'Next.js',
    'networking',
    'computer networking',
    'network labs',
    'CCNA',
    'Cisco',
    'Arista',
    'Linux',
    'homelab',
    'systems administration',
    'infrastructure',
    'Proxmox',
    'Docker',
    'Azure',
    'NetBox',
    'Ansible',
    'WireGuard',
    'React Native',
    'PostgreSQL',
    'REST API',
    'Google Apps Script',
    'developer portfolio',
    'technology portfolio',
    'musician and programmer',
  ],
  authors: [{ name: 'Michael Hanna' }],
  creator: 'Michael Hanna',
  openGraph: {
    title: 'Michael Hanna | Code, Networks & Systems',
    description:
      "I like figuring out how things work, from the physical wire to the UI. Here's some of what I've built, configured, and broken along the way.",
    url: 'https://mrhanna.dev',
    siteName: 'Michael Hanna',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michael Hanna | Code, Networks & Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Michael Hanna | Code, Networks & Systems',
  //   description:
  //     "I like figuring out how things work, from the physical wire to the UI. Here's some of what I've built, configured, and broken along the way.",
  //   creator: '@yourusername',
  //   images: ['/og-image.jpg'],
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
