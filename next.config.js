const securityHeaders = ['https://osvintique.com']

module.exports = {
  reactStrictMode: true,
  env: {
    api: 'https://osvintique.com/api/',
    domain: 'https://osvintique.com/',
    headers: securityHeaders,
  },
}
