var Teacher = require('./models/teachers').Teacher;
var Customer = require('./models/customers').Customer;
var _ = require('lodash');
var moment = require('moment-timezone');
var Promise = require('bluebird');
var messages = Promise.promisifyAll(require('./messages'));
var count = 5;

// Customer.findOne({ 'delivery.address': '#customer2'})
// .then(function (item) {
//   if (item) {
//     // console.log('found customer: ' + item);
//     console.log(JSON.stringify(messages.getQuestions(item.kids, count), null, 2));
//   } else {
//     console.log('customer not found');
//   }
// })

// Teacher.findOne({ 'slack': '#teacher1'})
// .then(function (item) {
//   if (item) {
//     // console.log('found teacher: ' + item);
//     console.log('found teacher: ' + item);
//     console.log('Teachers custom questions: ' + JSON.stringify(messages.getCustomQuestions(item, count), null, 2));
//   } else {
//     console.log('teacher not found');
//   }
// })

// Customer.findOne({ 'delivery.address': '#customer1'})
// .then(function (item) {
//   if (item) {
//     // console.log('found customer: ' + item);
//     console.log('Customers custom questions: ' + JSON.stringify(messages.getCustomQuestions(item.kids[0], count), null, 2));
//   } else {
//     console.log('customer not found');
//   }
// })

// console.log(JSON.stringify(messages.getStockQuestions(count), null, 2));
// console.log(JSON.stringify(messages.toCalendarDays(), null, 2));

// console.log(JSON.stringify(messages.getCustomQuestions(customers[0].kids[0], count), null, 2));
// messages.advanceToNextDailyQuestion();
// console.log(JSON.stringify(messages.getQuestions(customers[0].kids), null, 2));

