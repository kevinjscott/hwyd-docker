var moment = require('moment-timezone');
var _ = require('lodash');

const send = require('./send');
const messages = require('./messages');

// todo: read users from an actual DB
sendmaster = [
  {
    channel: '#hwyd1',
    username: 'username1',
    firstname: 'Firstname1',
    time: '16:45',
    message: function() {
      return messages.get(this.username);
    }
  }, {
    channel: '#hwyd2',
    username: 'username2',
    firstname: 'Firstname2',
    time: '16:45',
    message: function() {
      return messages.get(this.username);
    }
  }, {
    channel: '#hwyd3',
    username: 'username3',
    firstname: 'Firstname3',
    time: '16:44',
    message: function() {
      return messages.get(this.username);
    }
  }, {
    channel: '#hwyd4',
    username: 'username4',
    firstname: 'Firstname4',
    time: '16:44',
    message: function() {
      return messages.get(this.username);
    }
  }
];

var execute = function() {
  var t = moment('2014-06-01T20:44:40Z').format('H:m');
  var recipients = _.filter(sendmaster, ['time', t]);

  // todo: find users scheduled for this time
  // getUsers();

  _.forEach(recipients, function(recipient) {
    send.slack(recipient.message(), recipient.channel);
  });
}

module.exports.execute = execute;



