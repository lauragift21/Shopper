/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * Authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */
const passport = require('passport'),
  passportJWT = require('passport-jwt'),
  LocalStrategy = require('passport-local').Strategy,
  JWTStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;
bcrypt = require('bcrypt-nodejs');

// serialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

//  deserialize the user
passport.deserializeUser(function(id, cb) {
  User.findOne({ id }, function(err, user) {
    cb(err, user);
  });
});

// local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passportField: 'password'
    },
    function(username, password, cb) {
      User.findOne({ username: username }, function(err, user) {
        if (err) return cb(err);
        if (!user) return cb(null, false, { message: 'User not found' });
        bcrypt.compare(password, user.password, function(err, res) {
          if (!res) return cb(null, false, { message: 'Invalid Password' });
          return cb(null, user, { message: 'Login Successful' });
        });
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mysecret'
    },
    function(jwtPayload, cb) {
      //find the user in db if needed
      return User.findOneById(jwtPayload.id)
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);
