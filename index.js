const eslintrc = require('./.eslintrc.js');

const baseConfig = { extends : ['@reflektor/react'] };
const nextConfig = {
  extends : [
    ...baseConfig.extends,
    'next/core-web-vitals'
  ]
};

module.exports = {
  extends : eslintrc.extends,
  configs : {
    base : baseConfig,
    next : nextConfig
  }
};
