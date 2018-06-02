/*
* Mailer service for adding amazon ses
*/
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

const transporter = nodemailer.createTransport(
  ses({
    accessKeyId: process.env.accessKeyId || 'AKIAIYDMZIQ4ANARS7VA',
    secretAccessKey:
      process.env.secretAccessKey || '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'
  })
);

let mailOptions = {
  from: 'shopper@mailinator.com',
  to: 'c;ear' ,
  subject: 'Congrats! New Product added to Cart',
  html:
    'You have added a new product to your cart. Please visit your Cart to check them out.'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  } else {
    console.log('Message sent sucessfully!');
  }
});
