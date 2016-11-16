var schedule = require('node-schedule');
var scheduledevents = require('./scheduledevents');

var init = function() {
  schedule.scheduleJob('*/1 * * * *', function(){
    scheduledevents.sendMessagesForThisMinute();
  });

  schedule.scheduleJob('0 0 * * *', function(){
    console.log('midnight event - bump daily index');
    scheduledevents.advanceToNextDailyQuestion();
  });

  // console.log('Schedule inactive. Executing scheduledevents once...')
  scheduledevents.sendMessagesForThisMinute();   // todo: uncomment above and remove this line
}

module.exports.init = init;
