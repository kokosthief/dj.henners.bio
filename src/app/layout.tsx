import { Metadata, Viewport } from 'next';
import { Overpass, Rowdies } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

import GoogleAnalytics from './google-analytics';
import { generateStructuredData } from './structured-data';

const overpass = Overpass({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-overpass',
  preload: true,
  adjustFontFallback: true,
});

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-rowdies',
  preload: false,
  adjustFontFallback: true,
});

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
        url: `${siteConfig.url}/images/henners-spaceholding.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners holding space for an ecstatic dance journey in Amsterdam',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/henners-spaceholding.jpg`],
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
        <link rel="canonical" href={siteConfig.url} />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://region1.google-analytics.com" />
        <link rel="preconnect" href="https://w.soundcloud.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Amsterdam" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
      </head>
      <body className={`${overpass.variable} ${rowdies.variable} bg-[#070b12] font-primary text-white antialiased`}>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
        {children}
      </body>
    </html>
  );
}
