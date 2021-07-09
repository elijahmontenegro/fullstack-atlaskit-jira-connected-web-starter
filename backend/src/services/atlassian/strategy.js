const AtlassianStrategy = require('passport-atlassian-oauth2');
const { atlassian: config, jwt } = require('../../config');
const models = require('../../models');
const { getTimeExpires } = require('../time');

module.exports = new AtlassianStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL,
  scope: config.scope,
}, async (accessToken, refreshToken, { expires_in }, profile, cb) => {
  const cloudID = config.cloudID; // this is a constant hence not needed in the db so we inlcude it in the cookie for later access.

  // include the expiry time in user for refreshing the accessToken later
  const timeExpiry = getTimeExpires(expires_in);

  const user = {
    id: profile.id,
    displayName: profile.displayName,
    email: profile.email,
    photo: profile.photo,
    //
    accessToken: accessToken,
    refreshToken: refreshToken,
    timeExpiry: timeExpiry
  };

  return await models.User.findOrCreate({
    where: { id: profile.id },
    // Take the following and upload to the DB if not present already
    defaults: user
  })
  .then(res => {
    return cb(null, Object.assign(user, {
      cloudID
    }));
  })
  .catch(err => {
    return cb(err, Object.assign(user, {
      cloudID
    }));
  })
});
