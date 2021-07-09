const { rule, shield } = require('graphql-shield');

const isAuthenticated = rule()((root, args, ctx) => {
  return !!ctx.user;
});

module.exports = shield({
  Query: {
    users: isAuthenticated,
    user: isAuthenticated,
    me: isAuthenticated,
  },
});
