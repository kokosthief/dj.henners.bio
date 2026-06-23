import { gigs } from '@/app/gigsData';
import { siteConfig } from '@/constant/config';

const baseUrl = siteConfig.url;

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
    image: `${baseUrl}/images/henners-spaceholding.jpg`,
    sameAs: [siteConfig.social.soundcloud, siteConfig.social.instagram],
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
      url: siteConfig.social.hipsy,
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

  return {
    personSchema,
    serviceSchema,
    eventSchemas,
    webSiteSchema,
    pastGigCount: pastGigs.length,
  };
}
