/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');

module.exports = {
  // login function
  login: function (req, res){
    passport.authenticate('local', function(err, user, info){
      if(err || !user){
        return res.send({message: info.message,
        user
        });
      }
      req.login(user, function(err){
        if(err) res.send(err);
        sails.log('User '+user.id+' has logged in.');

      // TODO: Add response object to postman
      })
    })(req, res);
  },

  // logout function
  logout: function(req, res){
    req.logout();
    res.redirect('/');
  },

  // register function
  register: function(req, res){
    // TODO: add form validation

    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }

    User.create(data).fetch().exec(function(err, user){
      if(err) return res.negotiate(user);

      req.login(user, function(err){
        if(err) return res.negotiate(user);
        sails.log('User '+user.id+' has been registered successfully.');
        // return res.send([statusCode, ], data);
        return res.redirect('/');
      // TODO: Add response object to postman

      })
    })
  }


};

