const db = require('./db');
const redis = require('./redis');
const atlassian = require('./atlassian');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY
  },
  db: db[env],
  redis: redis[env],
  atlassian: atlassian[env]
};
