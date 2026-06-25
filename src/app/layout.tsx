import { Metadata, Viewport } from 'next';
import * as React from 'react';
import { Suspense } from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

import SiteAnalytics from './components/SiteAnalytics';
import GoogleAnalytics from './google-analytics';
import { generateStructuredData } from './structured-data';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Henners`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: 'Henners', url: siteConfig.url }],
  creator: 'Henners',
  publisher: 'Henners',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Henners',
    images: [
      {
        url: `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners — Ecstatic Dance Facilitator and DJ in Amsterdam',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
    creator: '@srrenneh',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'Music & Entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.serviceSchema) }}
        />
        {structuredData.eventSchemas.map((schema, index) => (
          <script
            key={`event-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {structuredData.videoSchemas.map((schema, index) => (
          <script
            key={`video-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Henners AI reference" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Henners full AI reference" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Amsterdam" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
      </head>
      <body className="bg-[#070b12] font-primary text-white antialiased">
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
        <Suspense fallback={null}>
          <SiteAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
