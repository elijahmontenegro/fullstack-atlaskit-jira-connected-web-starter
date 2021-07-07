const { createContext, EXPECTED_OPTIONS_KEY } = require('dataloader-sequelize');
const { resolver } = require('graphql-sequelize');
const models = require('./models');
const jwt = require('jsonwebtoken');
const { jwt: config } = require('./config');
const { getMinutesUntilExpiration, getTimeExpires } = require('./services/time');
const refresh = require('passport-oauth2-refresh');
// const AtlassianStrategy = require('./strategy');

// Tell `graphql-sequelize` where to find the DataLoader context in the global
// request context
resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

module.exports = ({ request, ...rest }) => {
  // For each request, create a Dataloader context for Sequelize
  const dataloaderContext = createContext(models.sequelize);

  let ctx = {
    [EXPECTED_OPTIONS_KEY]: dataloaderContext,
  };

  const authorization = request && request.get('Authorization');

  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.replace('Bearer ', '');

    const user = jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return null;
      if(decoded) return decoded;
    });

    if (user) {
      const minutesUntilExpiration = getMinutesUntilExpiration(user.timeExpiry);

      if (minutesUntilExpiration < 0) {
        refresh.requestNewAccessToken('atlassian', user.refreshToken, async (err, accessToken, refreshToken, { expires_in }) => {
          if (err)
            console.error(err);

          const timeExpires = getTimeExpires(expires_in);

          models.User.update({ accessToken, refreshToken, timeExpires }, { where: { id: user.id }})
            .then(res => {
              console.log(`User (${user.id}) accessToken refreshed successfully!`);
            })
            .catch(err => {
              console.error(err);
            });
        });
      }

      // add context to graphql request
      ctx = Object.assign(ctx, { token, user });
    }
  }

  return ctx;
};
