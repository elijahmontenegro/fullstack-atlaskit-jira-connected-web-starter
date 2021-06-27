const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { resolver } = require('graphql-sequelize');
const models = require('../../models');
const config = require('../../config');
const redis = require('../../redis');
// const { generateValidationCode } = require('../../services/user');
// const { roles } = require('../../constants/roles');

module.exports = {
  Query: {
    users: resolver(models.User),
    user: resolver(models.User),
    me: resolver(models.User, {
      before(findOptions, args, ctx) {
        console.log(ctx.user.id)
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
