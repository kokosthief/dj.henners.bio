/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
const lastmod = '2026-06-23T00:00:00.000Z';

// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://dj.henners.bio',
  generateRobotsTxt: true,
  exclude: ['/manifest.webmanifest', '/sitemap.xml', '/sitemap-0.xml'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorityByPath = {
      '/': 1,
      '/about': 0.85,
      '/contact': 0.75,
      '/media-package': 0.7,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : config.changefreq,
      priority: priorityByPath[path] ?? config.priority,
      lastmod,
    };
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://dj.henners.bio/sitemap.xml'],
  },
};
