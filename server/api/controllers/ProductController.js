/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  postProduct: function(req, res) {
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
        if (product)
          return res.status(200).json(product);
      });
  },

  getProducts: function(req, res) {
    Product.find({ sort: 'name ASC' })
      .populate('user')
      .exec(function(error, product) {
        if (error) return res.serverError(error);
        if (product) return res.status(200).json(product);
      });
  },

  deleteProduct: function(req, res) {
    const id = req.param(id);
    Product.destroy({ id, user }).exec(function(error) {
      if (error) return res.serverError(error);
      sails.log('Product removed', product);
      return res.ok();
    });
  }
};
