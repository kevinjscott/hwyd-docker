var Slack = require('slack-node');

function sendViaSlack(text, channel) {
  slack = new Slack();
  slack.setWebhook('https://hooks.slack.com/services/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'); 
  slack.webhook({
    channel: channel,
    username: "HWYD",
    icon_emoji: ":question:",
    text: text
  }, function(err, response) {
    if (response.status == 'ok') {
      console.log('Sent to Slack: ' + text);
    } else {
      console.log(response);
    }
  });
}

module.exports.slack = sendViaSlack;
