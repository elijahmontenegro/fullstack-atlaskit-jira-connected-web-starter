const { createContext, EXPECTED_OPTIONS_KEY } = require('dataloader-sequelize');
const { resolver } = require('graphql-sequelize');
const models = require('./models');
const jwt = require('jsonwebtoken');
const { jwt: config } = require('./config');
const refresh = require('passport-oauth2-refresh');

// Tell `graphql-sequelize` where to find the DataLoader context in the global
// request context
resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

module.exports = ({ request, ...rest }) => {
  // For each request, create a Dataloader context for Sequelize
  const dataloaderContext = createContext(models.sequelize);

  let ctx = {
    [EXPECTED_OPTIONS_KEY]: dataloaderContext,
  };
  console.log('TEST')

  const authorization = request && request.get('Authorization');

  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.replace('Bearer ', '');
    const user = jwt.verify(token, config.secret);

    // Refreshes the access token to retain the user OAuth 2.0 access
    const refreshFn = (function fn() {
      console.log('Refreshing Access Token.')
      // refresh.requestNewAccessToken(AtlassianStrategy, user.refreshToken, async (err, accessToken, refreshToken) => {
      //   models.User.update({ accessToken, refreshToken }, { where: { id: user.id }})
      //   .then(res => {
      //     console.log('Access Token Refreshed Successfully.')
      //   })
      //   .catch(err => {
      //     console.log('Access Token Refresh Failed.')
      //   })
      // });

      return fn;
      })();

    // Interval every hour since the token expires in that amount of time
    setInterval(refreshFn, 1.8e+6 );

    // add context to graphql request
    ctx = Object.assign(ctx, { token, user });
  }

  return ctx;
};
