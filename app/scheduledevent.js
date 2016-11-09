var moment = require('moment-timezone');
var _ = require('lodash');

var send = require('./send');
var messages = require('./messages');

// todo: read users from an actual DB
var customers = require('./data-customers');
sendmaster = customers.data;

var execute = function() {
  // var t = moment.tz('2014-06-01T20:44:40Z', 'America/New_York').format('H:m');
  // var matchingcustomers = _.filter(sendmaster, ['delivery.time', t]);
  var matchingcustomers = sendmaster; // todo: replace this with the real customer selection logic

  // todo: set customers to work with actual time and dynamically pick up the right users

  _.forEach(matchingcustomers, function(customer) {
// todo: uncomment all this below
    // var msg = messages.getAndMarkSent(customer);
    // switch(customer.delivery.method) {
    //   case 'slack':
    //     send.slack(msg, customer.delivery.address);
    //     break;
    //   default:
    //     console.log('delivery method not found for user ' + JSON.stringify(customer));
    // }
  });

  // todo: save updated customers object back into the DB
  // console.log(JSON.stringify(customers, null, 2));
}

module.exports.execute = execute;



