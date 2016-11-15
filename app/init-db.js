var teachers = require('./data-teachers');
var customers = require('./data-customers');
var _ = require('lodash');
var moment = require('moment-timezone');
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require("mongoose"));
var db = mongoose.connection;
var messages = Promise.promisifyAll(require('./messages'));
mongoose.connect(process.env.DATABASE_URL);
db.on('error', console.error.bind(console, 'connection error:'));

exports.init = function(callback){
  require('./messages').initAsync()
  .then(function(){
    if (callback) callback(null);
  });
}

