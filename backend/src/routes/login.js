const jwt = require('jsonwebtoken');
const { env, jwt: config } = require('../config');

module.exports = async (req, res) => {
  // req.user has the auth token and refresh token as well as profile data
  // next we have to encrypt the data and tokens
  // save that to the cookie -- when accessing the cookie we decrypt it
  /// redirect to front end

  const token = jwt.sign(req.user, config.secret, { expiresIn: config.expiry });

  res.cookie('jwt', token); // think about setting an experiation for the cookie to match with the JWT experation

  // jwt.verify(token, config.secret, (err, decoded) => {
  //   // console.log('token verification:', err, decoded);
  // });

  res.redirect(process.env.APP_CLIENT_URL);
};

// res.cookie sends a cookie to the frontend once res.redirect is called
// this is how the frontend can start a session with the logged in user
// authentication with graphql has this token in jwt
// the decrypted token is the user { ...profile, accessToken, refreshToken }

