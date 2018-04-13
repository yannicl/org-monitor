const express = require('express')
const app = express()

var messages = [];

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
})

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


const { RTMClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();


rtm.on('message', (event) => {
  // For structure of `event`, see https://api.slack.com/events/message
  var message = event;
  console.log('message: %j', message);

  messages.push(message);

});
