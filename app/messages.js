var _ = require('lodash');
var moment = require('moment-timezone');  // todo: make a global for t or today
var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var teachers = require('./data-teachers');
var stockquestions;
var today = moment().tz('America/New_York');

var StockQuestion = require("./models/stockquestion").StockQuestion;

exports.init = function(callback){
  var promise = StockQuestion.find().exec();

  promise.then(function (sq) {
    if (!sq.length) {
      console.log('Reinitializing questions');
      var sq2 = new StockQuestion(require('./data-stockquestions'));
      stockquestions = sq2;
      return sq2.save();
    } else {
      stockquestions = sq[0];
    }
  })

  .then(function(){
    if (callback) callback(null);
  })

  .catch(function(err){
    console.log('error:', err);
  });

}

exports.advanceToday = function(n) {
  today.add(n, 'days');
}

exports.toCalendarDays = function() {
  var questions = _.cloneDeep(stockquestions.questions);
  var index = stockquestions.currentIndex;

  t = moment(today).add(-0, 'days');    // for testing
  var thedate = t;

  // console.log((today).format('LLLL'));
  daysPastMonday = ((_.toInteger((today).format('d')) + 1 ) % 7) - 2;
  var offset = (index) % questions.length;

  questions = _.concat(questions.splice(offset), questions);
  startPad = 0;

  for (var i = 0; i < questions.length; i++) {
    thedate = moment(today).add(i, 'days');
    d = _.toInteger(thedate.format('d'));

    if (d == 6 || d == 0) {
      questions.splice(i, 0, '');
    }
  }

  questions = _.map(questions, function(question, i) {
    var thedatestr = moment(today).add(i, 'days').format('l');
    return {
      message: question,
      date: thedatestr
    }
  })
  return questions;
}

exports.getCustomQuestions = function(kidOrTeacher, count) {
  count = count || 1;
  var result = [];
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
    checkDate = moment(today).tz('America/New_York').add(j, 'days').format('l');
    customitem = {};
    if (teacher) {
      customitem = _.find(teacher.customitems, ['date', checkDate]) || {};
    }
    customitem.kid = kid.name || '';
    customitem.date = checkDate;
    customitem.message = customitem.message || '';
    result.push(customitem);
  }

  return result;
}

exports.getStockQuestions = function(count) {
  count = count || 1;
  var result = [];
  var questions = this.toCalendarDays();
  var j = 0;

  for (var i = 0; i < count; i++) {
    result.push(questions[i]);
  }

  return result;
}

exports.getQuestions = function(kidsOrTeacher, numDays) {
  var count = numDays || 1;
  var result = [];
  var stock = this.getStockQuestions(count);
  var custom = this.getCustomQuestions(kidsOrTeacher, count);
  var customarr = [];
  var kidArrLength = _.isArray(kidsOrTeacher) ? kidsOrTeacher.length : 1;

  if (_.isArray(kidsOrTeacher)) {
    for (var i = 0; i < kidArrLength; i++) {
      customarr.push(
        this.getCustomQuestions(kidsOrTeacher[i], count)
      )
    }
  } else {
    customarr.push(
      this.getCustomQuestions(kidsOrTeacher, count)
    )
  }

  for (var i = 0; i < count; i++) {
    var s = stock[i];
    var custommessages = [];

    for (var j = 0; j < kidArrLength; j++) {
      // console.log(customarr[j][i]);
      custommessages.push(
        {
          kid: customarr[j][i].kid,
          message: customarr[j][i].message
        }
      );
    }

    result.push(
      {
        date: s.date,
        stockmessage: s.message,
        custommessages: custommessages,
      }
    )
  }

  return result;
}

exports.format = function(o) {
  var result = '';

  result += moment(o.date, 'l').format('LLLL') + '\n';
  result += o.stockmessage;

  for (var i = 0; i < o.custommessages.length; i++) {
    if (o.custommessages[i].message) {
      result += '\n\nAsk ' + o.custommessages[i].kid + ': ';
      result += o.custommessages[i].message;
    }
  }

  return result;
}

exports.advanceToNextDailyQuestion = function() {
  stockquestions.currentIndex++;
  stockquestions.currentIndex = stockquestions.currentIndex % stockquestions.questions.length;

  StockQuestion.update( {  }, { $set: { currentIndex: stockquestions.currentIndex }}, function() {
    console.log('updated currentIndex in DB');
  });

}


