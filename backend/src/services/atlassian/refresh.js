const refresh = require('passport-oauth2-refresh');
const AtlassianStrategy = require('./strategy');
const models = require('../../models');

function requestNewAccessToken(id, refreshToken) {
  refresh.requestNewAccessToken(AtlassianStrategy, refreshToken, async (err, accessToken, refreshToken) => {
    models.User.update({ accessToken, refreshToken }, { where: { id: id }})
    .then(res => {
      // console.log('Access Token Refreshed Successfully.')
      // update cookie?
    })
    .catch(err => {
      // console.log('Access Token Refresh Failed.')
    })
  });
};

let accessToken;
let accessTokenExpiry; // milliseconds
const tokenExpiryBuffer = 120000; // 2 minutes in milliseconds

function isRefreshNeeded(user) {
  if (!accessToken || Date.now() > ctx.accessTokenExpiry - tokenExpiryBuffer) {
    accessToken = response.body.access_token;
    accessTokenExpiry = response.body.expires_in * 1000 + Date.now();
  }
};

module.exports = {
  requestNewAccessToken
}
