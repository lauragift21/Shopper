const accountSid =
  process.env.accountSid || 'ACc4df0a10f63f2c7040bf98d244f91a5a';
const authToken = process.env.authToken || '00f0878293d7ff333ccac2ab7d2c9fd4';
const client = require('twilio')(accountSid, authToken);

module.exports = {
  sendSMS(user) {
    client.messages
      .create({
        body:
          'Congrats You have added a new product to your cart. Please visit your cart to check them out.',
        from: '+16263250829',
        // TODO: ADD USER PHONE
        to: '+2347063766697'
      })
      .then(message => console.log(message.sid))
      .done();
  }
};
