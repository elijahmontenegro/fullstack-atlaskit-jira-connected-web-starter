const AtlassianStrategy = require('passport-atlassian-oauth2');
const { atlassian: config } = require('../../config');
const models = require('../../models');

module.exports = new AtlassianStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL,
  scope: config.scope,
}, async (accessToken, refreshToken, profile, cb) => {

  // include the Jira cloud Id along with the other user data
  const cloudID = config.cloudID;

  const user = {
    id: profile.id,
    displayName: profile.displayName,
    email: profile.email,
    photo: profile.photo
  };

  return await models.User.findOrCreate({
    where: { id: profile.id },
    // Take the following and upload to the DB if not present already
    defaults: user
  })
  .then(res => {
    return cb(null, Object.assign({}, user, { accessToken, refreshToken, cloudID }));
  })
  .catch(err => {
    return cb(err, Object.assign({}, user, { accessToken, refreshToken, cloudID }));
  })
});
