import { siteConfig } from '@/constant/config';

export function generateStructuredData() {
  const baseUrl = siteConfig.url;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "DJ Henners",
    "alternateName": "Henners",
    "description": siteConfig.description,
    "url": baseUrl,
    "image": `${baseUrl}/images/henners-dj.jpg`,
    "sameAs": [
      "https://soundcloud.com/hennerrsss",
      "https://instagram.com/djhenners",
      "https://facebook.com/djhenners"
    ],
    "jobTitle": "Professional Ecstatic Dance DJ",
    "worksFor": {
      "@type": "Organization",
      "name": "DJ Henners Professional Services"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.location.city,
      "addressCountry": siteConfig.location.country,
      "addressRegion": siteConfig.location.region
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.location.coordinates.lat,
      "longitude": siteConfig.location.coordinates.lng
    },
    "knowsAbout": [
      "Ecstatic Dance",
      "Conscious Dance",
      "DJ Performance",
      "Music Curation",
      "Event Facilitation",
      "Global Rhythms",
      "African Music",
      "Transformative Music",
      "Ceremony Music",
      "Festival Performance"
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DJ Henners - Ecstatic Dance DJ Services",
    "description": "Ecstatic Dance DJ in Amsterdam providing transformative musical experiences for events, festivals, and ceremonies across the Netherlands.",
    "url": baseUrl,
    "telephone": "+31683421604",
    "email": "dj@henners.bio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "Netherlands",
      "addressRegion": "North Holland"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3676,
      "longitude": 4.9041
    },
    "openingHours": "Mo-Su 09:00-22:00",
    "priceRange": "€€€",
    "servesCuisine": "Music & Entertainment",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.3676,
        "longitude": 4.9041
      },
      "geoRadius": "500000"
    },
    "areaServed": [
      "Amsterdam",
      "Netherlands",
      "Utrecht",
      "Rotterdam",
      "The Hague",
      "Europe"
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Ecstatic Dance DJ Services",
    "description": "Expert DJ services specializing in ecstatic dance, conscious movement, festivals, and transformative musical experiences.",
    "provider": {
      "@type": "Person",
      "name": "DJ Henners"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DJ Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ecstatic Dance DJ Performance",
            "description": "Professional DJ services for ecstatic dance events and conscious movement sessions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Festival DJ Performance",
            "description": "High-energy DJ sets for festivals and large-scale events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceremony Music Facilitation",
            "description": "Sacred and transformative music for ceremonies and spiritual gatherings"
          }
        }
      ]
    }
  };

  // Event Schema for upcoming gigs
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": "Ecstatic Dance with DJ Henners",
    "description": "Transformative ecstatic dance experience with Amsterdam conscious dance DJ",
    "performer": {
      "@type": "Person",
      "name": "DJ Henners"
    },
    "location": {
      "@type": "Place",
      "name": "Amsterdam",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressCountry": "Netherlands"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/contact`,
      "availability": "https://schema.org/InStock"
    }
  };

  return {
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    eventSchema
  };
}