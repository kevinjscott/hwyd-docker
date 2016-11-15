var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var StockQuestionSchema = new mongoose.Schema({
  currentIndex: Number,
  questions: []
});

StockQuestionSchema.plugin(timestamps);

var StockQuestion = mongoose.model('StockQuestion', StockQuestionSchema);

module.exports.init = function(callback){
  var promise = StockQuestion.find().exec();

  promise.then(function (sq) {
    if (!sq.length) {
      console.log('Reinitializing questions');
      var sq2 = new StockQuestion(require('../data-stockquestions'));

      return sq2.save();
    } else {
      stockquestions = sq;
    }
  })

  .then(function(){
    if (callback) callback(null);
  })

  .catch(function(err){
    console.log('error:', err);
  });

}

module.exports.StockQuestion = StockQuestion;
