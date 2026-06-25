/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
const lastmod = '2026-06-24T00:00:00.000Z';
const image = (href, title) => ({ loc: new URL(href), title });

// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://dj.henners.bio',
  generateRobotsTxt: true,
  exclude: ['/contact', '/manifest.webmanifest', '/sitemap.xml', '/sitemap-0.xml'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorityByPath = {
      '/': 1,
      '/about': 0.85,
      '/media-package': 0.75,
    };

    const imageByPath = {
      '/': [
        image('https://dj.henners.bio/images/og-henners-rijksmuseum-2026.jpg', 'Henners social preview'),
        image('https://dj.henners.bio/images/rijksmuseum-close-up.jpg', 'Henners DJing at Rijksmuseum'),
        image('https://dj.henners.bio/images/rijksmuseum-dj-booth.jpg', 'Rijksmuseum DJ booth'),
      ],
      '/about': [
        image('https://dj.henners.bio/images/og-henners-rijksmuseum-2026.jpg', 'Henners social preview'),
        image('https://dj.henners.bio/images/henners-spaceholding.jpg', 'Henners holding space'),
        image('https://dj.henners.bio/images/henners-ceremony.jpg', 'Henners ceremony music'),
      ],
      '/media-package': [
        image('https://dj.henners.bio/images/og-henners-rijksmuseum-2026.jpg', 'Henners press kit social preview'),
        image('https://dj.henners.bio/images/rijksmuseum-dj-booth.jpg', 'Rijksmuseum DJ booth'),
        image('https://dj.henners.bio/images/rijksmuseum-dancefloor.jpg', 'Rijksmuseum dancefloor'),
        image('https://dj.henners.bio/images/rijksmuseum-close-up.jpg', 'Henners DJing at Rijksmuseum'),
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
