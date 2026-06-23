import { MetadataRoute } from 'next';

import { siteConfig } from '@/constant/config';

const lastModified = '2026-06-23';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${siteConfig.url}/images/henners-spaceholding.jpg`,
        `${siteConfig.url}/images/henners-ceremony.jpg`,
        `${siteConfig.url}/images/henners-dj.jpg`,
      ],
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/media-package`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
