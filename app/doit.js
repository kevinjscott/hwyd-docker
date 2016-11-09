var teachers = require('./data-teachers');
var customers = require('./data-customers');
var messages = require('./messages');
var _ = require('lodash');
var moment = require('moment-timezone');

// console.log(JSON.stringify(messages.getStockQuestions(2), null, 2));
// console.log(JSON.stringify(messages.getQuestions(7), null, 2));
// console.log(JSON.stringify(messages.toCalendarDays(), null, 2));


console.log(JSON.stringify(messages.getCustomQuestions(customers[0].kids[0], 7), null, 2));
console.log(JSON.stringify(messages.getCustomQuestions(teachers[0], 7), null, 2));
