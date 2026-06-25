import { gigs } from '@/app/gigsData';
import { siteConfig } from '@/constant/config';

const baseUrl = siteConfig.url;

const proofVideos = [
  {
    name: 'Henners DJing for Ambrosia at Rijksmuseum Amsterdam',
    description: 'Short press-kit video of Henners DJing for Ambrosia at Rijksmuseum in Amsterdam.',
    contentUrl: '/downloads/videos/ambrosia-rijksmuseum.mp4',
    thumbnailUrl: '/images/video-posters/ambrosia-rijksmuseum.jpg',
    duration: 'PT48S',
  },
  {
    name: 'Henners DJing for Ambrosia at Het Sieraad Amsterdam',
    description: 'Short press-kit video of Henners DJing for Ambrosia at Het Sieraad in Amsterdam.',
    contentUrl: '/downloads/videos/ambrosia-het-sieraad.mp4',
    thumbnailUrl: '/images/video-posters/ambrosia-het-sieraad.jpg',
    duration: 'PT7S',
  },
  {
    name: 'Henners DJing at Lundjuweel 2025',
    description: 'Short press-kit video of Henners DJing at Lundjuweel 2025.',
    contentUrl: '/downloads/videos/lundjuweel-2025.mp4',
    thumbnailUrl: '/images/video-posters/lundjuweel-2025.jpg',
    duration: 'PT15S',
  },
];

export function generateStructuredData() {
  const pastGigs = gigs.filter((gig) => new Date(gig.date) < new Date());
  const upcomingGigs = gigs.filter((gig) => new Date(gig.date) >= new Date());

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Henners',
    alternateName: ['DJ Henners', 'Henry Willmott'],
    description: siteConfig.description,
    url: baseUrl,
    image: `${baseUrl}/images/og-henners-rijksmuseum-2026.jpg`,
    sameAs: [siteConfig.social.soundcloud, siteConfig.social.instagram, ...siteConfig.aliases],
    jobTitle: 'Ecstatic Dance Facilitator and DJ',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.coordinates.lat,
      longitude: siteConfig.location.coordinates.lng,
    },
    knowsAbout: [
      'Ecstatic Dance Facilitation',
      'Conscious Dance',
      'Movement Facilitation',
      'Ceremony Music',
      'Space Holding',
      'Music Curation',
      'Global Rhythms',
      'African-inspired Dance Music',
      'Festival DJ Sets',
      'Retreat Music',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#ecstatic-dance-facilitation`,
    name: 'Ecstatic Dance Facilitation and DJ Journeys',
    description:
      'Ecstatic dance facilitation, conscious dance DJ sets, ceremony music, and movement journeys for communities, retreats, ceremonies, and festivals.',
    provider: { '@id': `${baseUrl}/#person` },
    serviceType: 'Ecstatic Dance Facilitation',
    areaServed: siteConfig.business.serviceAreas.map((name) => ({ '@type': 'Place', name })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/LimitedAvailability',
      url: `${baseUrl}/#contact`,
      description: siteConfig.business.status,
    },
  };

  const eventSchemas = upcomingGigs.map((gig) => ({
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `${gig.event} with Henners`,
    startDate: gig.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    performer: { '@id': `${baseUrl}/#person` },
    location: {
      '@type': 'Place',
      name: gig.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: gig.location,
        addressCountry: gig.country,
      },
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/#upcoming`,
      availability: 'https://schema.org/InStock',
    },
  }));

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: siteConfig.title,
    url: baseUrl,
    description: siteConfig.description,
    about: { '@id': `${baseUrl}/#person` },
    inLanguage: 'en',
  };

  const videoSchemas = proofVideos.map((video) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: `${baseUrl}${video.thumbnailUrl}`,
    contentUrl: `${baseUrl}${video.contentUrl}`,
    embedUrl: `${baseUrl}/media-package`,
    duration: video.duration,
    uploadDate: '2026-06-25',
    inLanguage: 'en',
    creator: { '@id': `${baseUrl}/#person` },
    publisher: { '@id': `${baseUrl}/#person` },
  }));

  return {
    personSchema,
    serviceSchema,
    eventSchemas,
    videoSchemas,
    webSiteSchema,
    pastGigCount: pastGigs.length,
  };
}
