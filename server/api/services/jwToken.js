const jwt = require('jsonwebtoken'),
  tokenSecret = 'secret';

module.exports = {
  sign: function(payload) {
    return jwt.sign(
      {
        data: payload
      },
      tokenSecret,
      { expiresIn: 172800 }
    );
  },
  verify: function(token, callback) {
    jwt.verify(token, tokenSecret, callback);
  }
};
