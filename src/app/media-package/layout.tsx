import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit - Henners | Ecstatic Dance Facilitator & DJ',
  description:
    'Press kit for Henners: biography, high-resolution photos, videos, technical rider, and organizer resources for ecstatic dance, retreats, ceremonies, and festivals.',
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
  openGraph: {
    title: 'Press Kit - Henners',
    description:
      'Biography, photos, video assets, and technical context for ecstatic dance floors, retreats, ceremonies, and festivals.',
    images: ['/images/henners-spaceholding.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Kit - Henners',
    description:
      'Biography, photos, video assets, and technical context for ecstatic dance floors, retreats, ceremonies, and festivals.',
    images: ['/images/henners-spaceholding.jpg'],
  },
};

export default function MediaPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
