const { GraphQLServer } = require('graphql-yoga');
const cors = require('cors');

const schema = require('./modules');
const models = require('./models');
const redis = require('./redis');
const context = require('./context');
const passport = require('passport');
const refresh = require('passport-oauth2-refresh');
const { logging, permissions, authenticator } = require('./middlewares');
const AtlassianStrategy = require('./services/atlassian');
const routes = require('./routes');

const server = new GraphQLServer({
	schema,
	context,
	middlewares: [logging, permissions]
});

// cors
server.express.use(cors());

// Dummy serialization/desiarialization
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// initialize passport
passport.use(AtlassianStrategy);
refresh.use(AtlassianStrategy);
server.express.use(passport.initialize());
server.express.use(passport.session());

// custom routes
server.express.get('/auth/connect', authenticator.atlassian.redirect, () => {});
server.express.get('/auth/callback', authenticator.atlassian.base, routes.login);
server.express.get('/error', routes.error);

module.exports = async () => {
  // db
	try {
    await models.sequelize.authenticate();
    console.log('[DB] Connection has been established successfully.');
  } catch (error) {
    console.error('[DB] Unable to connect to the database:', error);
  }

  // redis
  redis.on("ready", () => {
    console.log("[REDIS] Connected to Redis server successfully.");
  });

  const app = await server.start({ port: 4000 });
  console.log('[SERVER] Running on', app.address());

  return app;
};
