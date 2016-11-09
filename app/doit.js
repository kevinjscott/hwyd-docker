var teachers = require('./data-teachers').data;
var messages = require('./messages');
var _ = require('lodash');
var moment = require('moment-timezone');

console.log(JSON.stringify(messages.getStockQuestions(2), null, 2));
console.log(JSON.stringify(messages.getCustomQuestions(teachers[0], 7), null, 2));
console.log(JSON.stringify(messages.toCalendarDays(), null, 2));
