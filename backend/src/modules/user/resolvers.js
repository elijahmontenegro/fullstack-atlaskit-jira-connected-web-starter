const { resolver } = require('graphql-sequelize');
const models = require('../../models');
const config = require('../../config');
const redis = require('../../redis');

module.exports = {
  Query: {
    users: resolver(models.User),
    user: resolver(models.User),
    me: resolver(models.User, {
      before(findOptions, args, ctx) {
        findOptions.where = {
          id: ctx.user.id,
        };
        return findOptions;
      },
    })
  },
  Mutation: {
  },
  AuthPayload: {
    user({ user }) {
      return models.User.findOne({ where: { id: user.id } });
    },
  },
};
