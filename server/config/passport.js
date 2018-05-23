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
localStrategy = require('passport-local'),
bcrypt = require('bcrypt-nodejs');

// serialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

// deserialize the user
passport.deserializeUser(function(user, cb) {
  User.findOne({id}).exec(function(err, user){
    cb(err, user);
  });

})

// local passport
passport.use(new localStrategy({
  emailField: 'email',
  passwordField: 'password'
}), function(email, password, cb) {

  User.findOne({email: email}).exec(function(err, user) {
    if(err) return cb(err);
    if(!user) return cb(null, false, {message: 'email address not found'});

    bcrypt.compare(password, user.password, function(err, res){
      if(!res) return cb(null, false, {message: 'Invalid Password'});
      return cb(null, user, {message: 'Login succesfull'});
    })
  });
});
