const { performance } = require('perf_hooks');

module.exports = async (resolve, root, args, ctx, info) => {
  const start = performance.now();

  const result = await resolve(root, args, ctx, info);

  const time = performance.now() - start;
  console.log(
    `Request: ${time.toFixed(2)}ms`,
    '-',
    `Result: ${JSON.stringify(result, null, 2)}`,
  );

  return result;
};
