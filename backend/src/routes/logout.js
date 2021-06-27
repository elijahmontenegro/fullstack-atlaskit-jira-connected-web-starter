module.exports = (req, res) => {
  req.logout();
  res.clearCookie('jwt');
  res.json({ success: true });
};
