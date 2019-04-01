// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
var express = require('express');

const accountSid = 'ACb22fc6109b0c48d0752a599c60af3374';
const authToken = '02dcb28f988fa2d56bd48c17e65faa2b';
const client = require('twilio')(accountSid, authToken);
var router = express.Router();

router.post('/', function(req, res, next) {
  client.messages
    .create({
       body: req.body.message || 'This is the ship that made the Kessel Run in fourteen parsecs?',
       from: '+19704102522',
       to: req.body.to || '+19703676952'
     })
    .then(message => {
      console.log(message.sid)
      res.send('sent')
    });
  });

module.exports = router;

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+19704102522',
//      to: '+19703676952'
//    })
//   .then(message => console.log(message.sid));
