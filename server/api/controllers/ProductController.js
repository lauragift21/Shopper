/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
        sails.log.info('Product created', product);
        if (product)
          return res.json([200], {
            message: 'New Product Added',
            product
          });
      });
    // MailService.sendMail();
    // SmsService.sendSMS();
  },
  getProduct: function(req, res) {
    Product.find({ name: name, product }).exec(function(error, product) {
      if (error) return res.send(error);
      if (product) return res.json(product);
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
