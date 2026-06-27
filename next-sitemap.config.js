/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
const siteUrl = 'https://dj.srenneh.com';
const lastmod = '2026-06-25T00:00:00.000Z';
const image = (href, title) => ({ loc: new URL(href), title });
const absolute = (path) => `${siteUrl}${path}`;

// eslint-disable-next-line no-undef
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/contact', '/human-version', '/human-version-2', '/human-version-3', '/manifest.webmanifest', '/sitemap.xml', '/sitemap-0.xml'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorityByPath = {
      '/': 1,
      '/ecstatic-dance-dj-amsterdam': 0.95,
      '/ecstatic-dance-dj-netherlands': 0.9,
      '/events': 0.88,
      '/about': 0.85,
      '/media-package': 0.8,
    };

    const imageByPath = {
      '/': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners social preview'),
        image(absolute('/images/rijksmuseum-close-up.jpg'), 'Henners DJing at Rijksmuseum'),
        image(absolute('/images/rijksmuseum-dj-booth.jpg'), 'Rijksmuseum DJ booth'),
      ],
      '/ecstatic-dance-dj-amsterdam': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners ecstatic dance DJ Amsterdam'),
        image(absolute('/images/rijksmuseum-dj-booth.jpg'), 'Henners DJing in Amsterdam'),
      ],
      '/ecstatic-dance-dj-netherlands': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners ecstatic dance DJ Netherlands'),
      ],
      '/events': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners event history'),
        image(absolute('/images/rijksmuseum-dancefloor.jpg'), 'Rijksmuseum dancefloor'),
      ],
      '/about': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners social preview'),
        image(absolute('/images/henners-spaceholding.jpg'), 'Henners holding space'),
        image(absolute('/images/henners-ceremony.jpg'), 'Henners ceremony music'),
      ],
      '/media-package': [
        image(absolute('/images/og-henners-rijksmuseum-2026.jpg'), 'Henners press kit social preview'),
        image(absolute('/images/rijksmuseum-dj-booth.jpg'), 'Rijksmuseum DJ booth'),
        image(absolute('/images/rijksmuseum-dancefloor.jpg'), 'Rijksmuseum dancefloor'),
        image(absolute('/images/rijksmuseum-close-up.jpg'), 'Henners DJing at Rijksmuseum'),
      ],
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : config.changefreq,
      priority: priorityByPath[path] ?? config.priority,
      lastmod,
      images: imageByPath[path] ?? undefined,
    };
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
