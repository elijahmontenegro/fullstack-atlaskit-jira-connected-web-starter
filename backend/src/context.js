const { createContext, EXPECTED_OPTIONS_KEY } = require('dataloader-sequelize');
const { resolver } = require('graphql-sequelize');
const models = require('./models');
const jwt = require('jsonwebtoken');
const { jwt: config } = require('./config');

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
    const user = jwt.verify(token, config.secret);

    // add context to graphql request
    ctx = Object.assign(ctx, { token, user });
  }

  return ctx;
};
