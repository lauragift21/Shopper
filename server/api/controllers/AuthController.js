/**
 * AuthController
 * Ability to register and SignIn users
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
        return res.json([200],{ message: 'User Login Successful', data});
      })
    })(req, res);
  },

  // logout function
  logout: function(req, res){
    req.logout();
    sails.log('User '+user.id+' has logged out.');
    res.redirect('/');
  },

  // register function
  register: function(req, res){

    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }

    User.create(data).fetch().exec(function(err, user){
      if(err) return res.send(user);
      req.login(user, function(err){
        if(err) return res.send(user);
        sails.log('User '+user.id+' has been registered successfully.');
        return res.status([200]).json({ message: 'New User Registration Successful'});
        // return res.redirect('/');
      })
    })
  }
};

