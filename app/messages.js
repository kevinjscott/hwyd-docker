var _ = require('lodash');
var moment = require('moment-timezone');
var teachers = require('./data-teachers');
var stockquestions = require('./data-stockquestions');

exports.getCustomQuestions = function(kidOrTeacher, count) {
  count = count || 1;
  var result = [];
  var t = moment().tz('America/New_York');
  var customitem = {};
  var teacher, kid;

  if (kidOrTeacher.customitems) {
    // it's a teacher
    teacher = kidOrTeacher;
    kid = {};
  } else {
    // it's a kid
    kid = kidOrTeacher;
    teacher = _.find(teachers, ['id', kid.teacherid]);
  }

  for (j = 0; j < count; j++) {
    checkDate = moment(t).tz('America/New_York').add(j, 'days').format('l');
    customitem = {};
    if (teacher) {
      customitem = _.find(teacher.customitems, ['date', checkDate]) || {};
    }
    customitem.kid = kid.name;
    customitem.date = checkDate;
    customitem.message = customitem.message || '';
    result.push(customitem);
  }

  return result;
}

exports.getStockQuestions = function(count) {
  count = count || 1;
  var result = [];

  for (j = 0; j < count; j++) {
    var i = stockquestions.currentIndex + j;
    i = i % (stockquestions.questions.length);

    result.push(stockquestions.questions[i]);
  }

  return result;
}

exports.getQuestions = function(count) {
  count = count || 1;
  var result = [];
  var stock = this.getStockQuestions(count);
  return ("howdy");
}

exports.toCalendarDays = function() {
  var questions = stockquestions.questions;
  var index = stockquestions.currentIndex;

  var t = moment().tz('America/New_York');
  t = moment(t).add(-0, 'days');    // for testing
  var thedate = t;

  console.log((t).format('LLLL'));
  daysPastMonday = ((_.toInteger((t).format('d')) + 1 ) % 7) - 2;
  var offset = (index) % questions.length;

  questions = _.concat(questions.splice(offset), questions);
  startPad = 0;

  for (var i = 0; i < questions.length; i++) {
    thedate = moment(t).add(i, 'days');
    d = _.toInteger(thedate.format('d'));

    if (d == 6 || d == 0) {
      questions.splice(i, 0, '');
    }

  }

  questions = _.map(questions, function(question, i) {
    var thedatestr = moment(t).add(i, 'days').format('l');
    return {
      message: question,
      date: thedatestr
    }
  })

  return questions;
}

  // todo: sort out weekends - ignored for now
