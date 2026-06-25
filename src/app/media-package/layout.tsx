import { Metadata } from 'next';

import { siteConfig } from '@/constant/config';

const title = 'Press Kit';
const description =
  'Press kit for Henners: biography, optimized preview photos, high-resolution downloads, videos, technical rider, and organizer resources for ecstatic dance, retreats, ceremonies, and festivals.';
const ogImage = `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Henners press kit',
    'ecstatic dance facilitator press kit',
    'ecstatic dance DJ photos',
    'Amsterdam ecstatic dance DJ',
    'technical rider',
    'artist biography',
    'conscious dance facilitator',
    'retreat DJ press kit',
  ],
  alternates: { canonical: `${siteConfig.url}/media-package` },
  openGraph: {
    url: `${siteConfig.url}/media-package`,
    title: 'Henners Press Kit',
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Henners press kit — ecstatic dance facilitator and DJ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henners Press Kit',
    description,
    images: [ogImage],
  },
};

export default function MediaPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
