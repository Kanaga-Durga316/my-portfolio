/* eslint-env node */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(
      rule => rule.test && rule.test.toString().includes('tsx|ts')
    );

    tsRules.forEach(rule => {
      rule.include = undefined;
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
