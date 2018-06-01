/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  // login function
  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if (err || !user) {
        return res.json([400], {
          message: info.message,
          user
        });
      }
      req.login(user, function(err) {
        if (err) res.send(err);
        sails.log('User ' + user.id + ' has logged in.');
        const token = jwt.sign(user, 'mysecret');
        return res.json([200], {
          message: 'User Login Successful',
          user,
          token
        });
      });
    })(req, res);
  },

  // logout function
  logout: function(req, res, user) {
    req.logout();
    sails.log('User ' + user.id + ' has logged out.');
    res.redirect('/');
  },

  // register function
  register: function(req, res) {
    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone
    };
    User.create(data)
      .fetch()
      .exec(function(err, user) {
        if (err) return res.serverError(user);
        req.login(user, function(err) {
          if (err) return res.send(user);
          sails.log('User ' + user.id + ' has been registered successfully.');
          return res.json([200], {
            message: 'New User Registration Successful'
          });
        });
      });
  }
};
