
module.exports = (req, res) => {
  const error = 'Something went wrong.';

  res.send(`[OAUTH] Error: ${error}`);
};
