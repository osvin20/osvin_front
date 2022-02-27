const securityHeaders = ['https://osvintique.com']

module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  env: {
    api: 'https://osvintique.com/api/',
    domain: 'https://osvintique.com/',
    headers: securityHeaders,
  },
  images: {
      domains: ['osvintique.com'],
      loader: 'imgix',
      path: 'https://osvintique.com/',

  },
}
