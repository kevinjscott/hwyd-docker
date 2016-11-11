var schedule = require('node-schedule');
var scheduledevent = require('./scheduledevent');
var messages = require('./messages');

var init = function() {
  // schedule.scheduleJob('*/1 * * * *', function(){
  //   console.log('scheduler fired - executing scheduled event');
  //   scheduledevent.execute();
  //   messages.advanceToNextDailyQuestion();  //todo: schedule this every midnight
  //   messages.advanceToday(1); // todo: this is just for testing
  // });
  // console.log('scheduler initialized');

  // console.log('Schedule inactive. Executing scheduledevent once...')
  // scheduledevent.execute();   // todo: uncomment above and remove this line
}

module.exports.init = init;
