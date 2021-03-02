const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push(
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        },
      );
    return config;
  }
};