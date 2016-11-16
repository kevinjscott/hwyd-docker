var schedule = require('node-schedule');
var scheduledevents = require('./scheduledevents');
var messages = require('./messages');

var init = function() {
  schedule.scheduleJob('*/1 * * * *', function(){
  //   console.log('scheduler fired - executing scheduled event');
  //   scheduledevents.sendMessagesForThisMinute();
  //   messages.advanceToday(1); // todo: this is just for testing
    // scheduledevents.pingSlack('minute scheduler fired');
  });
  // console.log('scheduler initialized');

  // schedule.scheduleJob('*/1 * * * *', function(){
  schedule.scheduleJob('0 0 * * *', function(){
    console.log('midnight event - bump daily index');
    scheduledevents.advanceToNextDailyQuestion();
  });


  scheduledevents.pingSlack('app started');

  // console.log('Schedule inactive. Executing scheduledevents once...')
  // scheduledevents.sendMessagesForThisMinute();   // todo: uncomment above and remove this line
}

module.exports.init = init;
