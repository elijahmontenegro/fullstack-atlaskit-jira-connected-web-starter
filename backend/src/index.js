require('dotenv').config();

const startServer = require('./server');
const models = require('./models');

(async () => {
  await startServer();

  await models.sequelize.sync({ force: true });
})();
