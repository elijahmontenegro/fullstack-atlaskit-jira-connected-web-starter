const refresh = require('passport-oauth2-refresh');
const AtlassianStrategy = require('./strategy');
const models = require('../../models');

function requestNewAccessToken(id, refreshToken) {
  refresh.requestNewAccessToken(AtlassianStrategy, refreshToken, async (err, accessToken, refreshToken) => {
    models.User.update({ accessToken, refreshToken }, { where: { id: id }})
    .then(res => {
      // console.log('Access Token Refreshed Successfully.')
    })
    .catch(err => {
      // console.log('Access Token Refresh Failed.')
    })
  });
};

function isRefreshNeeded(user) {

};

module.exports = {
  requestNewAccessToken
}
