import { Metadata } from 'next';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: 'Contact Henners',
  description:
    'Contact Henners for ecstatic dance floors, ceremonies, retreats, festivals, and community gatherings. Amsterdam-based ecstatic dance facilitator and DJ.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: 'Contact Henners',
    description:
      'Contact Henners for ecstatic dance floors, ceremonies, retreats, festivals, and community gatherings.',
    images: [
      {
        url: `${siteConfig.url}/images/gallery/edfh-basement-bw.jpg`,
        width: 1200,
        height: 900,
        alt: 'Henners — ecstatic dance facilitator and DJ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Henners',
    description:
      'Contact Henners for ecstatic dance floors, ceremonies, retreats, festivals, and community gatherings.',
    images: [`${siteConfig.url}/images/gallery/edfh-basement-bw.jpg`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
