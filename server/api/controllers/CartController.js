/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

module.exports = {
  sendMsg: function(req, res, user) {
    // service for sending sms
    SmsService.sendSMS();

    // creates a transporter for sending mail request
    const transporter = nodemailer.createTransport(
      ses({
        accessKeyId: process.env.accessKeyId || 'AKIAIYDMZIQ4ANARS7VA',
        secretAccessKey:
          process.env.secretAccessKey ||
          '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'
      })
    );

    let mailOptions = {
      from: 'shopper@mailinator.com',
      // TODO: Add user email
      to: 'laurandidi21@gmail.com',
      subject: 'Congrats! Your Order has been created',
      html: `Hola, You just added an item to your cart with order number: 455433
        Please visit your Cart to proceed to checkout.`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.log('there was an error:', err);
      } else {
        console.log('Message sent successfully!', res);
      }
    });
  }
};
