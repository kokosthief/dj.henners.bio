import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Booking - DJ Henners | Book Ecstatic Dance Events',
  description: 'Contact DJ Henners for bookings and inquiries. Professional ecstatic dance DJ available for events, festivals, ceremonies, and private parties in Amsterdam and internationally.',
  keywords: [
    'book DJ Henners',
    'ecstatic dance booking',
    'DJ contact Amsterdam',
    'event booking',
    'festival DJ hire',
    'ceremony DJ',
    'private party DJ',
    'conscious dance events',
    'DJ booking form',
    'Amsterdam event DJ'
  ],
  openGraph: {
    title: 'Contact & Booking - DJ Henners | Book Ecstatic Dance Events',
    description: 'Contact DJ Henners for bookings and inquiries. Professional ecstatic dance DJ available for events, festivals, ceremonies, and private parties.',
    images: ['/images/henners-dj.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Booking - DJ Henners | Book Ecstatic Dance Events',
    description: 'Contact DJ Henners for bookings and inquiries. Professional ecstatic dance DJ available for events, festivals, ceremonies, and private parties.',
    images: ['/images/henners-dj.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}