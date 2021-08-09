const AtlassianStrategy = require('passport-atlassian-oauth2');
const { atlassian: config, jwt } = require('../../config');
const models = require('../../models');
const { getTimeExpires } = require('../time');
const cloudinary = require('../cloudinary');
const { v4: uuidv4 } = require('uuid');

module.exports = new AtlassianStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL,
  scope: config.scope,
},
  async (accessToken, refreshToken, { expires_in }, profile, cb) => {
    // this is a constant hence not needed in the db so we inlcude it in the cookie for later access.
    const cloudId = config.cloudID;

    let user = await models.User.findOne({ where: { id: profile.id } }); // i need to return object not model

    const upload_photo = await cloudinary.v2.uploader.upload(profile.photo, {
      public_id: profile.id,
      overwrite: true,
      tags: ['avatar']
    });

    if (!user) {
      // include the expiry time in user for refreshing the accessToken later
      const timeExpiry = getTimeExpires(expires_in);

      user = await models.User.create({
        id: profile.id,
        displayName: profile.displayName,
        email: profile.email,
        photo: upload_photo.secure_url,
        accessToken: accessToken,
        refreshToken: refreshToken,
        timeExpiry: timeExpiry
      }); // i need to return a object not sequelize model
    }

    return cb(null, Object.assign(user.get({ plain: true }), { cloudId }));
  }
);
