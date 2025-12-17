import { Metadata } from 'next';
import { Overpass, Rowdies } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

import { generateStructuredData } from './structured-data';

const overpass = Overpass({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-overpass',
  preload: true
});

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-rowdies',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'DJ Henners', url: siteConfig.url }],
  creator: 'DJ Henners',
  robots: { index: true, follow: true },
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
    siteName: siteConfig.title,
    images: [{
      url: `${siteConfig.url}/images/henners-dj.jpg`,
      width: 1200,
      height: 630,
      alt: 'DJ Henners - Ecstatic Dance DJ in Amsterdam'
    }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/henners-dj.jpg`],
    creator: '@djhenners'
  },
  alternates: {
    canonical: siteConfig.url
  },
  category: 'Music & Entertainment'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.serviceSchema),
          }}
        />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="preconnect" href="https://widget.sndcdn.com" />
        <link rel="preconnect" href="https://w.soundcloud.com" />
        <link rel="preconnect" href="https://i1.sndcdn.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .fade-up{animation:fadeUp 1s ease-out forwards}
              @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
              .bg-gradient-dark{background:linear-gradient(135deg,#0a0a0a 0%,#0d324d 100%)}
              .animate-gentle-pulse{animation:gentlePulse 3s ease-in-out infinite}
              @keyframes gentlePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
            `,
          }}
        />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Amsterdam" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        <meta name="language" content="en,nl" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
      </head>
      <body className={`dark ${overpass.variable} ${rowdies.variable}`}>{children}</body>
    </html>
  );
}
