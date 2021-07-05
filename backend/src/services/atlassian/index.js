const AtlassianStrategy = require('./strategy');
const { requestNewAccessToken } = require('./refresh');

module.exports = {
  AtlassianStrategy,
  requestNewAccessToken
}
