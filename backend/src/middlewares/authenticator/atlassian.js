const passport = require('passport');
const { atlassian: config } = require('../../config');

const base = passport.authenticate('atlassian', { failureRedirect: '/error' });

const redirect = passport.authenticate('atlassian');

module.exports = {
  base,
  redirect
};
