const { defineConfig } = require('@vue/cli-service');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/week-6-project/' : '/',
};
