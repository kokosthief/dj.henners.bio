import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit - DJ Henners | Professional Press Kit & Downloads',
  description: 'Complete press kit for DJ Henners - Download high-resolution photos, promotional videos, technical rider, artist biography, and press materials. Perfect for event organizers, venues, and media.',
  keywords: [
    'DJ Henners press kit',
    'press kit download',
    'DJ photos high resolution',
    'technical rider',
    'artist biography',
    'promotional materials',
    'event organizer resources',
    'DJ press photos',
    'ecstatic dance media',
    'Amsterdam DJ press kit'
  ],
  openGraph: {
    title: 'Press Kit - DJ Henners | Professional Press Kit & Downloads',
    description: 'Complete press kit for DJ Henners - Download high-resolution photos, promotional videos, technical rider, artist biography, and press materials.',
    images: ['/images/henners-dj.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Kit - DJ Henners | Professional Press Kit & Downloads',
    description: 'Complete press kit for DJ Henners - Download high-resolution photos, promotional videos, technical rider, artist biography, and press materials.',
    images: ['/images/henners-dj.jpg'],
  },
};

export default function MediaPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}