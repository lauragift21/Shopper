/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  // create a new product
  createProduct: function(req, res) {
    data = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    };
    Product.create(data)
      .fetch()
      .exec(function(error, product) {
        if (error) return res.serverError(error);
        if (product) return res.status(200).json(product);
      });
  },

  // get list of all products
  getProducts: function(req, res) {
    Product.find({ sort: 'name ASC' })
      .populate('user')
      .exec(function(error, product) {
        if (error) return res.serverError(error);
        if (product) return res.status(200).json(product);
      });
  },

  // delete a product
  deleteProduct: function(req, res) {
    Product.destroy({ id: req.params.id }).exec(function(error, product) {
      if (error) return res.serverError(error);
      sails.log('Product removed');
      return res.ok();
    });
  },

  // send mail and sms on add to cart action
  addToCart: function(req, res) {
    // MailService.sendMail();
    // SmsService.sendSms();
  }
};
