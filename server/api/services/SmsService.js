const accountSid = 'AC0391155b4c941b1c087b392fb589e9ca';
const authToken = 'd81602682f428a47f07c6d101211bfb6';
const client = require('twilio')(accountSid, authToken);

module.exports = {
  sendSMS() {
    client.messages
      .create({
        body:
          'Congrats You have added a new product to your cart. Please visit your cart to check them out.',
        from: '+15108673521',
        to: '+2347063766697'
      })
      .then(message => console.log(message.sid))
      .done();
  }
};
