require('dotenv').config()

const pkg = require('../package.json');

const config = {
  name: pkg.name,
  version: pkg.version,
  env: process.env.APP_ENV,
  port: process.env.APP_PORT
};

module.exports = config;