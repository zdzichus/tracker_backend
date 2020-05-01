var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Misiu');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
