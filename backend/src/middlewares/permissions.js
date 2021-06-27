const { rule, shield } = require('graphql-shield');

const isAuthenticated = rule()((root, args, ctx) => {
  return !!ctx.user || new Error('NOT_AUTHORIZED');
});

module.exports = shield({
  Query: {
    users: isAuthenticated,
    user: isAuthenticated,
    me: isAuthenticated,
  },
});
