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

// Dummy serialization/desiarialization
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// initialize passport
passport.use(AtlassianStrategy);
refresh.use(AtlassianStrategy);
server.use(passport.initialize());
server.use(passport.session());

// custom routes
server.get('/auth/connect', authenticator.atlassian.redirect, () => {});
server.get('/auth/callback', authenticator.atlassian.base, routes.login);
server.get('/auth/logout', routes.logout);
server.get('/error', routes.error);

// cors
server.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

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

  const app = await server.start({ port: process.env.APP_SERVER_PORT });
  console.log('[SERVER] Running on', app.address());

  return app;
};
