var teachers = require('./data-teachers');
var customers = require('./data-customers');
var messages = require('./messages');
var _ = require('lodash');
var moment = require('moment-timezone');


var count = 3;
console.log(JSON.stringify(messages.getStockQuestions(count), null, 2));
// console.log(JSON.stringify(messages.getCustomQuestions(teachers[0], count), null, 2));
// console.log(JSON.stringify(messages.getCustomQuestions(customers[0].kids[0], count), null, 2));

// console.log(JSON.stringify(messages.toCalendarDays(), null, 2));

// console.log(JSON.stringify(messages.getQuestions(customers[0].kids), null, 2));
// messages.advanceToNextDailyQuestion();
// console.log(JSON.stringify(messages.getQuestions(customers[0].kids), null, 2));
