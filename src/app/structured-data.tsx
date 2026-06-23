import { gigs } from '@/app/gigsData';
import { siteConfig } from '@/constant/config';

const baseUrl = siteConfig.url;

export const faqItems = [
  {
    question: 'What does an ecstatic dance facilitator do?',
    answer:
      'An ecstatic dance facilitator shapes a safe, intentional movement journey. For Henners, that includes musical curation, emotional pacing, ceremony-aware space holding, and a flow that supports grounding, release, joy, softness, and integration.',
  },
  {
    question: 'Where is Henners based?',
    answer:
      'Henners is based in Amsterdam and has played ecstatic dance floors, ceremonies, retreats, and festivals across the Netherlands and Europe.',
  },
  {
    question: 'Is Henners currently taking bookings?',
    answer:
      'Henners is currently taking a pause from DJing and gigging. New gatherings, mixes, or selected future invitations will be shared through the site when the timing feels right.',
  },
  {
    question: 'What kind of music does Henners play?',
    answer:
      'Henners blends global rhythms, organic percussion, African-inspired grooves, melodic electronic music, ceremonial textures, and spacious integration music into conscious dance journeys.',
  },
  {
    question: 'Can organizers still contact Henners?',
    answer:
      'Yes. Organizers can use the contact form or press kit for context, photos, music links, and technical information, while respecting the current pause from regular gigging.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
    faqSchema,
    eventSchemas,
    webSiteSchema,
    pastGigCount: pastGigs.length,
  };
}
