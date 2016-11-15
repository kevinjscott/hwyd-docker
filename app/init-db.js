var teachers = require('./data-teachers');
var customers = require('./data-customers');
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require("mongoose"));
var db = mongoose.connection;

exports.init = function(callback){
  mongoose.connect(process.env.DATABASE_URL);
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    Promise.promisifyAll(require('./messages')).initAsync()
    .then(function(){
      if (callback) callback(null);
    });
  })
}
