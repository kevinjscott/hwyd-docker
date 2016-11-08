var schedule = require('node-schedule');
var scheduledevent = require('./scheduledevent');

var init = function() {
  // schedule.scheduleJob('*/1 * * * *', function(){
  //   console.log('scheduler fired - executing scheduled event');
  //   scheduledevent.execute();
  // });
  // console.log('scheduler initialized');
  scheduledevent.execute();   // todo: uncomment above and remove this line
}

module.exports.init = init;
