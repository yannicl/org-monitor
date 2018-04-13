const express = require('express')
const app = express()

var messages {'a':'b'};

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
})

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
