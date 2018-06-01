/*
* Mailer server for adding amazon ses
*/
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

const transporter = nodemailer.createTransport(
  ses({
    accessKeyId: 'AKIAIYDMZIQ4ANARS7VA',
    secretAccessKey: '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'
  })
);

let mailOptions = {
  from: 'shopper@mailinator.com',
  to: 'laurandidi21@gmail.com',
  subject: 'Congrats! New Product added to Cart',
  html:
    'You have added a new product to your cart. Please visit your Cart to check them out.'
};

transporter.sendMail(mailOptions);
