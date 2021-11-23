const { baseConfig, nextConfig } = require('./lib/configs');
const eslint = require('./.eslintrc.js');

module.exports = {
  rules   : eslint,
  configs : {
    react : baseConfig,
    next  : nextConfig
  }
};
