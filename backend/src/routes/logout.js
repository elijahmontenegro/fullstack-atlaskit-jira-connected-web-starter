module.exports = (req, res) => {
  res.clearCookie('jwt');
  res.redirect(process.env.APP_CLIENT_URL);
};
